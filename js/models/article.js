var app = app || {};

(() => {
    app.Article = Backbone.Model.extend({
        defaults:{
            index: 0,
            title: '',
            score: 0,
            url: '',
            author: ''
        }
    });
})();
