var app = app || {};

(() => {

    app.ArticleList = Backbone.Collection.extend({
        url: 'https://www.reddit.com/r/worldnews/new.json',
        model: app.Article
    });
})();
