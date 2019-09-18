var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: 'http://magicznyswiatksiazki.pl/wp-content/uploads//2017/01/Harry-Potter-i-Insygnia-%C5%9Amierci-2-1.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'https://s3.viva.pl/newsy/plakat-do-filmu-krol-lew-502111-GALLERY_BIG.jpg'
  },
  {
    id: 3,
    title: 'Rambo',
    desc: 'Sylvester Stallone in main role',
    image: 'https://cdn.vox-cdn.com/thumbor/hIbJS0BmhhVv0N1ehe38WMeLCQc=/0x0:1024x683/1220x813/filters:focal(0x0:1024x683):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47776447/rambo.0.0.jpg'
  },
  {
    id: 4,
    title: 'Predator',
    desc: 'Alien from the sky vs Arnold Schwarzenegger',
    image: 'https://is5-ssl.mzstatic.com/image/thumb/Video115/v4/ce/9d/4d/ce9d4d41-0581-14a2-d64e-25e2c064d8e6/pr_source.lsr/268x0w.png'
  },
  {
    id: 5,
    title: 'Twin Peaks',
    desc: 'The mysterious city of Twin Peaks',
    image: 'https://gfx.antyradio.pl/var/antyradio/storage/images/film/seriale/zakonczono-zdjecia-do-twin-peaks-10321/731583-1-pol-PL/Zakonczono-zdjecia-do-Twin-Peaks_article.webp'
  }
];



var MovieDescription = React.createClass({
  propTypes:{
    desc: React.PropTypes.object.isRequired,
  },
    render: function () {
        return (
            React.createElement('p', {}, this.props.movie.desc)
        )
    }
});

var MovieTitle = React.createClass({
  propTypes:{
    title: React.PropTypes.object.isRequired,
  },
    render: function () {
        return (
            React.createElement('h2', {}, this.props.movie.title)
        )
    },
});


var Movie = React.createClass({
  propTypes:{
    title: React.PropTypes.object.isRequired,
    desc: React.PropTypes.object.isRequired,
    image: React.PropTypes.object.isRequired,
  },
    render: function () {
        return (
          React.createElement('li', {key: this.props.movie.id},
            React.createElement(MovieTitle, { movie: this.props.movie }),
            React.createElement(MovieDescription, { movie: this.props.movie }),
            React.createElement('img', {src: this.props.movie.image}, ) )
        )
    }
});


  var moviesElements = movies.map(function(movie) {
    return React.createElement(Movie, { movie: movie });
  });


  var moviesList = React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmów'),
            React.createElement('ul', {}, moviesElements)
        );


  ReactDOM.render(moviesList, document.getElementById('app'));
