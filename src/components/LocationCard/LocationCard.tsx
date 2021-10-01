import './styles.sass'
interface LocationCardProps {
    locationClick: ()=>void
}
export const LocationCard = (props: LocationCardProps) => {
    return(
        <div className="location-card">
        <div id="map" style={{width:window.innerWidth/2, height: 200, margin: 16}}/>
        <button onClick={props.locationClick} style={{marginLeft:16}}>
            GET MY LOCATION
        </button>
        </div>
    )
}