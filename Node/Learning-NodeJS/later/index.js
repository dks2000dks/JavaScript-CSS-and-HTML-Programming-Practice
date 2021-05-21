const express = require('express');
const app = express();
const Article = require('./db').Article;
const read = require('node-readability');

// Setting Port
app.set('port', process.env.PORT || 8000);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
    '/css/bootstrap.css',
    express.static('node_modules/bootstrap/dist/css/bootstrap.css')
);

// Getting all Articles
app.get('/articles', (req, res, next) => {
    Article.all((err, articles) => {
        if (err) return next(err);
        
        res.format({
            html: () => {
                res.render('articles.ejs', { articles });
            },
            json: () => {
                res.send(articles);
            }
        });
    });
});

// Getting a Single Article
app.get('/articles/:id', (req, res) => {
    const id = req.params.id;
    console.log('Fetching:', id);
    Article.find(id, (err, article) => {
        if (err) return (err);
        res.format({
            html: () => {
              res.render('article.ejs', { article });
            },
            json: () => {
              res.send(article);
            }
        });
    });  
});

// Deleting an Article
app.delete('/articles/:id/', (req, res, next) => {
    const id = req.params.id;
    console.log('Deleting:', id);
    Article.delete(id, (err) => {
        if (err) return next(err);
        res.send("Deleted\n");
    });
});

// Posting an Article
app.post('/articles/', (req, res, next) => {
    const url = req.body.url;

    read(url, (err, result) => {
        if (err || !result) res.status(500).send('Error in Downloading the Article');
        
        Article.create(
            {title: result.title, content: result.content},
            (err, article) => {
                if (err) return next(err);
                res.send("Posted the Article\n");
            }
        );
    });
});

const port = app.get('port');
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;