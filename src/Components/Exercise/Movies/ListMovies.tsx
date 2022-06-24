import './Movies.scss'
function ListMovies(props:any) {
    const {data} = props; 
    return ( <div className="movie">
        <img src={data.poster} className='movie-img'/>
        <div className="title-movies">{data.title}</div>
        <div className="imdb">{data.imdb}</div>
       <div className="description">{data.description}</div>

    </div> );
}

export default ListMovies;