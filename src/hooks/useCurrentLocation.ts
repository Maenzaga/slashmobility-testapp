import { useEffect, useState } from "react"

export const useCurrentLocation = () => {
    const [position, setPosition] = useState<google.maps.LatLngLiteral>();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position: any) => {
                const pos: google.maps.LatLngLiteral = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                setPosition(pos);
            },
            (error) => {
                console.error(error);
            }
        );
    }, []);
    return position;
}