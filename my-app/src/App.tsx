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

      // convert def.meanings[0].definitions to string
        // for (let i = 0; i < def.length; i++) {
        //     console.log(def[i]);
        // }

        // var arrString = def.map.toString();

        // var arrString = def.values.toString;
        // def.filter // between "" and contains definitions???
        // var arr = def.splice(4,5);
        // var str1 = arr[0];
        // var str2 = arr[1];
        // var str3 = arr[2];
        // var str4 = arr[3];
        // var str5 = arr[4];


      // end experiment  

    //   body: arr.map( function( row ) {
    //     return row.map( function( cell ) { 
    //         return foo( cell ); 
    //     } );
    // } )

    var arrayWord = def.map((def) => (
      def.word
    ))

  return (
    <div className="App">
<main className="container">

<div className="bg-light p-5 rounded">
  <h1 className="defined">{arrayWord[0]}</h1>
{def.map((def) => (
  <p className="lead">{def.phonetic}</p>
  ))}
  {def.map((def) => (
  <ul className="list-unstyled">
    {/* <li>Part Of Speech: {def.meanings[0].partOfSpeech}</li>
    <li>Definition: {def.meanings[0].definitions[0].definition}</li>
    <li>Synonym: {def.meanings[0].synonyms}</li>
    <li>Antonym: {def.meanings[0].antonyms}</li>
    <li>Origin: {def.origin}</li> */}
    {def.meanings.map((meanings) => (
      <ul className="list-unstyled">
        {/* prints all parts of speech */}
        <li><br></br></li> 
        <li><b>{meanings.partOfSpeech}</b></li>
        <li><br></br></li>
        {meanings.definitions.map((definitions) => (
          <ul className="list-unstyled">
            {/* prints all definitions */}
            <li>{definitions.definition}{"\n"}</li>
            <li><br></br></li> 
          </ul>
    ))}

    <li><i>Synonyms:</i></li>
    <li>{meanings.synonyms.join(', ')}</li>
    <li><br></br></li>

    <li><i>Antonyms:</i></li>
    <li>{meanings.antonyms.join(', ')}</li>
    <li><br></br></li>
    
      </ul>
    ))}
    </ul>
    ))}
 </div>

</main>
    </div>
  );
}

export default App;
