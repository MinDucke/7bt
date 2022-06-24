import "./Home.modules.scss";
import { Link } from "react-router-dom";
import { listRouter } from "../../Router/Router";

function Home() {
  return (
    <div className="Exercise">
      <div className="head">
        <Link className="header" to="/">
          HOME
        </Link>
      </div>

      <div>
        <div className="container">
          <div className="heading">
            {listRouter.map((e,i) => (
              <button>
                <Link to= {e.path}>{e.name}</Link>
              </button>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
