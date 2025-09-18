import { use } from "react";

function Countries({detail}){
    const info=use(detail);
    const arr=info.countries;
    console.log(arr);

    return(
         <div>
            <h1>Data:{arr.length}
            </h1>
         </div>
    )
}
export default Countries;