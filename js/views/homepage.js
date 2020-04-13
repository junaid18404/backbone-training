var app = app || {};

(async () => {
    const articleList = new app.ArticleList();
    const TableRow = app.TableRow;

    const HomePage = Backbone.View.extend({
        initialize: function () {
            $('#get-started').html('Fetch Data');
            this.tableBody = $('#table-body');
        },

        events: {
            'click #get-started' : `fetchArticlesInTable`,
        },

        fetchArticlesInTable: async function() {
            const articleData = (await articleList.fetch())['data']['children'];
            this.setArticleData(articleData);
            articleList.forEach((article) => {
                const row = new TableRow({model: article});
                this.tableBody.append(row.render().el);
            });
        },

        setArticleData: function (articleData) {
            articleList.set(articleData.map((article, index) => {
                return new app.Article({
                    index: index + 1,
                    title: article.data.title,
                    score: article.data.score,
                    url: article.data.url,
                    author: article.data.author
                })
            }));
        }
    });
    new HomePage({
        el: 'body',
        model: app.Article
    });
})();
