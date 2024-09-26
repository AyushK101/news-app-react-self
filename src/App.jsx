import { useState } from "react"
import { useEffect } from "react"
import Card from "./Card"


const api_key = import.meta.env.VITE_SERP_API_KEY;
console.log(api_key);





function App() {
  let [cards, setCards]= useState([]);
  
  console.log("up");
  
  useEffect( ()=> {
      
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://serpapi.com/search.json?engine=google_news&q=country&gl=in&hl=en&api_key=${api_key}`
        );
        const data = await response.json();
        console.log(data.news_results);
        setCards(data.news_results);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
},[])
  return (
    <>
      <div className="w-screen min-h-screen bg-zinc-800">
        <div id="header" className="text-center py-4 font-extrabold text-white text-5xl">
          NEWS WEBSITE by ayush 
        </div>
        <hr className="mb-3"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 justify-between gap-x-4  ">
          {cards.map( (e)=> <Card key={e?.position} title={e?.title} date={e?.date} icon={e?.source?.icon} link={e?.link} thumbnail={e.thumbnail} />)}

        </div>
      </div>
    </>

  )
}

export default App
