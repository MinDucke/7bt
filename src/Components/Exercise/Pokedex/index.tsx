import "./Pokedex.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import PokeData from "./PokeData";
import { Col, Row } from "antd";

function Pokedex() {
  const [pokedex, setPokedex] = useState<any>([]);

  useEffect(() => {
    const res = async () => {
      const dataAxios = await axios(
        `https://62a00597a9866630f80561eb.mockapi.io/v1/pokedex`
      );
      setPokedex(dataAxios.data);
      console.log(dataAxios.data);
    };
    res();
  }, []);

  return (
    <div className="container-poke">
      <h1 className="title">Pokedex</h1>
      <div className="flex-poke">
        <Row gutter={[{ xs: 8, sm: 16 }, 16 ]}>
          {pokedex.map((o: any, i: any) => {
            return (
              <Col
                xs={{ span: 12 }}
                sm={{ span: 8 }}
                md={{ span: 6 }}
                lg={{ span: 4 }}
              >
                <PokeData data={o} key={i} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Pokedex;
