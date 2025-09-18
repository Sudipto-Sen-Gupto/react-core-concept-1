import React, { Suspense } from 'react'
import './App.css'
import Countries from './component/countries/countries';
const data=async()=>{
  const url=await fetch("https://openapi.programming-hero.com/api/all");
  const res=await url.json();
  return res;

}
function App() {
 const detail=data();
  return (
    <>
     
      <h1> React</h1>
      <Suspense fallback={<h1>Data Is Loading...</h1>}>
         <Countries detail={detail}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
