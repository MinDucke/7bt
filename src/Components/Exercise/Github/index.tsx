import "./Github.scss";
import Result from "./Result";
import axios from "axios";
import { useState, useEffect } from "react";

function GitHub() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<any>(undefined);
  const [searchValue, setSearchvalue] = useState("");
  

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      const dataUser = await axios(
        `https://api.github.com/users/${searchValue}`
      );
      setPosts(dataUser.data);
      setLoading(false);
      
      console.log(dataUser.data);
    };
    getUserData();
  }, [searchValue]);
 
  console.log(posts)
  return (
    <div className="container-github">
      <form className="form-github">
        <input
          className="search-input"
          placeholder="Search a Github User"
          onChange={(e) => setTimeout(() => {
            setSearchvalue(e.target.value)
          }, 2500)}
          
        />
        {loading ? (
          <div className="undefined">Undefined</div>
        ) : (
          <>
                   {
          posts &&  <Result key={posts.id} data={posts}/> 
         }
          </>

      // posts.map( (result:any) => (
      //   <Result key={result.id} data={result}/> 
      // ))
        )}
      </form>
    </div>
  );
}

export default GitHub;
