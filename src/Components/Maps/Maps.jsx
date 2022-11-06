import { YMaps, Map, GeoObject } from "@pbe/react-yandex-maps"
import { useContext } from "react"
import { Context } from "../context"


export const Maps = () => {
  const { points } = useContext(Context)

  return (
    <div className="map">
      <YMaps className="map__ymaps">
        <div >
          <Map width='100%' height='100%' defaultState={{ center: [55.75, 37.57], zoom: 10 }} >
            {
              points.Postamats.map(point =>
                <GeoObject
                  key={point.id}
                  geometry={{
                    type: 'Point',
                    coordinates: [point.lattitude, point.longtitude],
                  }}
                  properties={{
                    balloonContent: point.address,
                    // hintContent: point.address,
                    iconContent: point.id
                  }}
                  options={{
                    preset: 'islands#blackStretchyIcon',
                    hasHint: true,
                    iconCaptionMaxWidth: '50'
                  }}
                  modules={[
                    'geoObject.addon.balloon',
                    'geoObject.addon.hint',
                  ]}
                />
              )
            }

          </Map>
        </div>
      </YMaps>
    </div>
  )
}