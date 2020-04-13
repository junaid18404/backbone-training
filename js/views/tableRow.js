var app = app || {};

(async () => {
    app.TableRow = Backbone.View.extend({
        tagName: 'tr',
        render: function() {
            this.$el.html(
                `<td>${this.model.get('index')}</td>
                <td>${this.model.get('title')}</td>
                <td>${this.model.get('score')}</td>
                <td><a href="${this.model.get('url')}" target="_blank">${this.model.get('url')}</a></td>
                <td>${this.model.get('author')}</td>`
            );
            return this;
        }
    });
})();