import { Link } from "react-router-dom";
import { OnlyCountryTS } from "../../Types/OnlyCountry";
import "./OnlyCountry.modules.scss";

export const OnlyCountry = ({
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
  borders,
  flags,
}: OnlyCountryTS) => {
  console.log(languages);
  return (
    <div className="layout-country">
      <img src={flags} alt={`Flag of : ${name.common}`} className="img-c" />
      <div className="data-onlyCountry">
        <div className="data--firstArea">
          <h1 className="name-title">{name.common}</h1>
          <div className="flex-data">
            <p>
              <span>Native Name: </span>
              {/* {name.nativeName.common} */}
            </p>
            <p>
              <span>Population: </span>
              {population}
            </p>
            <p>
              <span>Region: </span>
              {region}
            </p>
            <p>
              <span>Subregion: </span>
              {subregion}
            </p>
            <p>
              <span>Capital: </span>
              {capital}
            </p>

            <p>
              <span>Top Level Domain: </span>
              {tld}
            </p>
            {/* <p>
                <span>Currencies: </span>
                {currencies.name}
              </p> */}
            {/* <>
                <span>Language: </span>
                {languages.map((item:any, index:any) => <span key={index}>{item.name}</span>)} 
              </>    */}
          </div>

          <div className="borders">
            <span>Borders:</span>
            <div className="border-grid">
              {borders.map((item, index) => (
                <Link to={`/code/${item}`} key={index} className="link-country">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
