import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const imgPath = "./images/"
    const jsxData = data.map(card=>{
        return <Card img= {imgPath+card.coverImg}
                    title={card.title}
                    price={card.price}
                    rating={card.stats.rating}
                    reviewCount={card.stats.reviewCount}
                    Country="USA"
                />
    })
    for(var i = 0; i < 9; i++) console.log(jsxData)
            // <Hero />
    return (
        <div>
            <Navbar />
            <Hero />
            <div className= "cards">
                {jsxData}
            </div>
            
        </div>
    )
}
/*
                <Card img="./images/katie-zaferes.png" 
                        rating="5.0" 
                        reviewCount="6"
                        country="USA"
                        title="Life Lessons with Katie Zaferes"
                        price="136"
                />
                <Card img="./images/katie-zaferes.png" 
                        rating="5.0" 
                        reviewCount="6"
                        country="USA"
                        title="Life Lessons with Katie Zaferes"
                        price="136"
                />
                */