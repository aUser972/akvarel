import { YMaps, Map, Circle } from "@pbe/react-yandex-maps"
import { useContext, useState } from "react"
import { CustomCircle } from "../CustomCircleContext"
import { Points } from "./Points/Points"


export const Maps = () => {
  const { customCircle } = useContext(CustomCircle)
  const [myCircle, setMyCircle] = useState(null)

  const handlerClick = (map) => {
    const coordinates = map.get('coords')
    setMyCircle(<Circle
      geometry={[
        coordinates,
        customCircle.data.Radius
      ]}
      options={{
        fillColor: "#DB709377",
        strokeColor: "#990066",
        strokeOpacity: 0.8,
        strokeWidth: 1
      }}
    />)
  }



  return (
    <div className="map">
      <YMaps className="map__ymaps">
        <div >
          <Map
            width='100%'
            height='100%'
            defaultState={{ center: [55.75, 37.57], zoom: 10 }}
            onClick={(event) => customCircle && handlerClick(event)}
          >
            {
              customCircle && myCircle
            }
            < Points />

          </Map>
        </div>
      </YMaps>
    </div>
  )
}