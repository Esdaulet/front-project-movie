import React, { useState } from "react";
import Homes from "../components/homes/Homes";
import Upcoming from "../components/Upcoming/Upcoming";
import { upcome, latest, recommended } from "../dummyData";
import Trending from "../components/Trending/trending";
import { Element } from "react-scroll";
import "./animated.css";

const HomeAlone = () => {
  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);
  const [rec, setRec] = useState(recommended);

  return (
    <>
      <Element name="homes">
        <Homes />
      </Element>
      <Element name="upcoming">
        <Upcoming items={items} title="Предстоящие фильмы" />
      </Element>
      <Element name="latest">
        <Upcoming items={item} title="Последние фильмы" />
      </Element>
      <Element name="trending">
        <Trending />
      </Element>
      <Element name="recommended">
        <Upcoming items={rec} title="Рекомендуемые фильмы" />
      </Element>
    </>
  );
};

export default HomeAlone;
