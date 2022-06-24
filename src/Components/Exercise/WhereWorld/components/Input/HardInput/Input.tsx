import "./Input.modules.scss";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import CountryItem from "../../CountryItem/Item";

function Input({ setCountries }: any) {
  const [searchValue, setSearchvalue] = useState<string>("");

  useEffect(() => {
    const getUserData = async () => {
      const dataCountry = await axios(
        `https://restcountries.com/v3.1/name/${searchValue}`
      );
      setCountries(dataCountry.data);

      console.log(dataCountry.data);
    };
    if(searchValue) {

      getUserData();
    }
    // let newData = countriesDefault.filter((o: any) =>
    //   o.name.common.includes(searchValue)
    // );
    // console.log(countriesDefault);
    // setCountries(newData);
  }, [searchValue]);

  return (
    <div className="search">
      <BsSearch />
      <input
        className="input-ww"
        placeholder="Search for a country..."
        onChange={(e) =>
          setTimeout(() => {
            setSearchvalue(e.target.value);
          }, 500)
        }
      />
    </div>
  );
}

export default Input;
