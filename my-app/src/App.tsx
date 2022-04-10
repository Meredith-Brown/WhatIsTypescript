import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { render } from "@testing-library/react";
const axios = require('axios');

function App() {

  const [def, setDef] = useState([]);

  const form: HTMLFormElement = document.querySelector("#defineform");
  document.body.addEventListener("submit", async function (event) {
    event.preventDefault();
    let form = event.target as HTMLFormElement;
  });

    useEffect(() => {
      const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
      form.onsubmit = async () => {
        const formData = new FormData(form);
        // console.log(formData);
        const text = formData.get("defineword") as string;
        axios.get(url + text)
          .then((res) => {
            console.log(res);
            setDef(res.data);
          })
          .catch((err) => {
            console.log(err);
        })
      }
    }
      ,[]);

  return (
    <div className="App">
<main className="container">

<div className="bg-light p-5 rounded">
  <h1 className="defined">Definition</h1>
  <p className="lead">Random Text</p>
  {def.map((def) => (
  <ul className="list-unstyled">
    <li>{def.word}</li>
    <li>{def.phonetic}</li>
    <li>Part Of Speech: {def.meanings[0].partOfSpeech}</li>
    <li>Definition: {def.meanings[0].definitions[0].definition}</li>
    <li>Synonym: {def.meanings[0].synonyms}</li>
    <li>Antonym: {def.meanings[0].antonyms}</li>
    <li>Origin: {def.origin}</li>
    </ul>
    ))}
 </div>

</main>
    </div>
  );
}

export default App;
