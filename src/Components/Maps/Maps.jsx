import { YMaps, Map, GeoObject, Circle } from "@pbe/react-yandex-maps"
import { useContext } from "react"
import { Context } from "../context"
import { Points } from "./Points/Points"


export const Maps = () => {
  const { points } = useContext(Context)
  const COLOR = {
    red: '#f44336',
    yellow: '#ffcc33',
    green: '#8fce00'
  }
  const getColor = (coefficient) => {
    if (coefficient >= 0.7) {
      return COLOR.green
    } else if (coefficient >= 0.3) {
      return COLOR.yellow
    }
    return COLOR.red
  }


  return (
    <div className="map">
      <YMaps className="map__ymaps">
        <div >
          <Map width='100%' height='100%' defaultState={{ center: [55.75, 37.57], zoom: 10 }} >
            <Points />
          </Map>
        </div>
      </YMaps>
    </div>
  )
}