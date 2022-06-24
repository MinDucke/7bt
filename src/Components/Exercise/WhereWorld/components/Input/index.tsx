import { useEffect, useState } from "react";
import "./index.scss";
import { api } from "../../Api/Api";
import { TypeCountries } from "../../Types/Type";
import CountryItem from "../CountryItem/Item";
import Input  from "./HardInput/Input";
import Select from "./HardInput/select";
import { Col, Row } from "antd";

function TaskBar() {
  const [countries, setCountries] = useState<TypeCountries[]>([]);
  const [countriesDefault, setCountriesDefault] = useState<TypeCountries[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCountries();
  }, []);
  const getAllCountries = async () => {
    setLoading(true);
    let countries = await api.getCountries();
    setCountries(countries);
    setCountriesDefault(countries)
    console.log(countries);
    setLoading(false);
  };
 
  

  return (
    <div className="task">
      <div className="taskbar-ww">
        <Input setCountries={setCountries} />
        <Select  setCountries={setCountries}/>
      </div>

      <Row gutter={20}>
        {loading && <div className="Loading">Loading...</div>}
        {!loading &&
          countries.map((item) => {
            return (
              <Col span={5}>
                <CountryItem
                  name={item.name}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                  flag={item.flags.png}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default TaskBar;
