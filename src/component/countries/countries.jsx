import { use } from "react";
import Country from "./country/country";
function Countries({detail}){
    const info=use(detail);
    const arr=info.countries;
    console.log(arr);

    return(
         <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
           {
            arr.map(country=><Country    key={country.cca3.cca3}country={country}>
             
            </Country>)
           }
         </div>
    )
}
export default Countries;