const sqlite3 = require('sqlite3').verbose();
const dbName = 'later.sqlite';

// Connecting to Database
const db = new sqlite3.Database(dbName);

// Creates Articles Table
db.serialize(() => {
    const query = `
        CREATE TABLE IF NOT EXISTS articles
        (id integer primary key, title, content TEXT)
    `;
    db.run(query);
});

class Article {

    //Fetching all Articles
    static all(cb) {
        db.all('SELECT * FROM articles', cb);
    }

    // Finding a Specific Article
    static find(id, cb) {
        db.get('SELECT * FROM articles WHERE id = ?', id, cb);
    }

    // Inserting Articles
    static create(data, cb){
        const sql = 'INSERT INTO articles(title, content) VALUES (?, ?)';
        db.run(sql, data.title, data.content, cb);
    }

    // Deleting Articles
    static delete(id, cb){
        if (id < 0) return cb(new Error('Please provide an id'));
        db.run('DELETE FROM articles WHERE id = ?', id, cb);
    }
}

module.exports = db;
module.exports.Article = Article;