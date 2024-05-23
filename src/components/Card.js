import React from "react"

export default function Card(props) {
    console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    const imagePath = require(`../assets/images/${props.coverImg}`);
    console.log(imagePath)

    return (
        <div className="card">

            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={imagePath} alt="card-img" className="card--image" />
            <div className="card--stats">
                <img src={require('../assets/images/star.png')} alt="star" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) - </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p> <span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}