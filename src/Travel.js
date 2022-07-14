
export default function Travel(props) {
    return(
        <div className="travel">
            <div className="travel-left">
                <img src={props.img} />
            </div>
            <div className="travel-right">
                <div className="location">
                    <img id="location" src="./images/locate.svg" />
                    <h3>{props.country}</h3>
                    <a href={props.url}>View on Google Maps</a>
                </div>
                <h1>{props.location}</h1>
                <h5>{props.date}</h5>
                <h3>{props.description}</h3>
            </div>
        </div>
    )
}