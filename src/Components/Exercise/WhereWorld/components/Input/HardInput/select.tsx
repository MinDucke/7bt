import axios from "axios";
import { useEffect, useState } from "react";
import "./Input.modules.scss";

function Select({ setCountries }: any) {
  const [searchRegion, setSearchRegion] = useState("");

  useEffect(() => {
    const getRegionData = async () => {
      const dataRegion = await axios(
        `https://restcountries.com/v3.1/region/${searchRegion}`
      );
      setCountries(dataRegion.data);
      console.log(dataRegion.data);
    };
    if (searchRegion) {
      getRegionData();
    }
  }, [searchRegion]);

  // const handleSubmit = (e: any) => {};
  return (
    <select
      className="region"
      onChange={(e) => {
        setSearchRegion(e.target.value);
        console.log(e.target.value);
      }}
    >
      <option disabled selected>
        Filter by Region
      </option>
      <option value="Asia">Asia</option>
      <option value="Africa">Africa</option>
      <option value="Euro">Euro</option>
      <option value="America">America</option>
      <option value="Ocenia">Oceania</option>
    </select>
  );
}

export default Select;
