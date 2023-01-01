import React from "react"

export default function Travel({img,loc,map,title,start,end,description}) {
    return (
        <div className="Travel">
            <img src={img}/>
            <div>
                <div className="place">
                    <img src="./images/locc.png"/>
                    <p>{loc}</p>
                    <a href={map}><u className="map">View on Google Maps</u></a>
                </div>
                <h1 className="travel--title">{title}</h1>
                <p className="bold">{start} - {end}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}
