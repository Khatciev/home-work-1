import React, { useState } from "react";
import "./App.css";
import Phrase from "./components/Phrase";
import EmptyBlock from "./components/EmptyBlock";
import {adjectivesArr, nounsArr} from "../utils";

const App = () => {
  const [phrase, setPhrase] = useState([]);
  const randomNumbers = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  const handleClickGenerate = () => {
    let random1 = randomNumbers(0, adjectivesArr.length - 1);
    let random2 = randomNumbers(0, adjectivesArr.length - 1);
    let random3 = randomNumbers(0, nounsArr.length - 1);
    setPhrase((prevState) => [
      ...prevState,
      `${adjectivesArr[random1]} ${adjectivesArr[random2]} ${nounsArr[random3]}`,
    ]);
    console.log(phrase)
  };
  const handleClickClear = () => {
    setPhrase([]);

  };
  return (
    <div className="wrapper">
      {phrase.length ? (
        phrase.map((el, index) => <Phrase key={index} text={el} />)
      ) : (
        <EmptyBlock />
      )}
      <button onClick={handleClickGenerate} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={handleClickClear} className="btn btn_clear">
        Очистить
      </button>
    </div>
  );
};

export default App;
