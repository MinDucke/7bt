import "./Movies.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import ListMovies from "./ListMovies";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const res = async () => {
      const dataAxios = await axios(
        "https://62a00597a9866630f80561eb.mockapi.io/v1/movies"
      );
      setMovies(dataAxios.data);
      console.log(dataAxios.data);
    };
    res();
  }, []);
  return (
   <div className="container-movies">
          <input type="input" placeholder="search" className="input-movies" />
        <div className="movies">
          {[...movies, ...movies, ...movies].map((i:any, key:number) => {
            return <ListMovies data={i} key={key}/>
          })}
        </div>
   </div>
  );
}

export default Movies;
