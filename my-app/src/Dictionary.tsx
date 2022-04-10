import axios from "axios";
import { useEffect, useState } from "react";

function Dictionary() {

    const [def1, setDef] = useState([]);

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


        // in theory def contains many strings or arrays of strings
        // for (let i = 0; i < def.length; i++) {
        //     console.log(def[i]);
        // }
        // def.forEach
        // def.toString
        // def.length
        //Definition: {def.meanings[0].definitions[0].definition}
      }
        ,[]);

        
            // const reptiles = ["alligator", "snake", "lizard"];
          
            // return (
            //   <ol>
            //     {def1.meanings[0].definitions.map((reptile) => (
            //       <li>{reptile}</li>
            //     ))}
            //   </ol>
            // );
          
        
}
export default Dictionary;