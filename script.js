var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'https://images-na.ssl-images-amazon.com/images/I/5182lTRiYPL._SY450_.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'Film opowiadający historię króla sawanny',
        img: 'https://www.movieposter.com/posters/archive/main/108/MPW-54063'
    },
    {
        id: 3,
        title: 'Ojciec Chrzestny',
        desc: 'Opowieść o włoskiej rodzinie mafijnej',
        img: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg'
    },
    {
        id: 4,
        title: 'Prestiż',
        desc: 'Opowieść o rywalizacji dwóch iluzjonistów',
        img: 'data:image/webp;base64,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'
    }
];

var MovieTitle = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
    render: function(){
        return (
            React.createElement('h2', {}, this.props.item.title)
        );
    },
});

var MovieDesc = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
    render: function(){
        return (
            React.createElement('p', {}, this.props.item.desc)
        );
    },    
});

var MovieImg = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
    render: function(){
        return (
            React.createElement('img', {src: this.props.item.img, alt: this.props.item.title, height: 400})
        );
    },      
});

var Movie = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', { key : this.props.item.id},
                React.createElement(MovieTitle, {item: this.props.item}),
                React.createElement(MovieDesc, {item: this.props.item}),
                React.createElement(MovieImg, {item: this.props.item})    
            )
        );
    }    
});

var MoviesList = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },
    render: function() {
        var moviesList = this.props.items.map(function(movie) {
            return React.createElement(Movie, {
                key: movie.id,
                item: movie,
            });
        });
        return (
            React.createElement('ul', {}, moviesList)
        );
    },
});

var App =  React.createClass({
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement(MoviesList, {items : movies})
            )
        );
    },
});

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));