import { YMaps, Map, GeoObject, Circle } from "@pbe/react-yandex-maps"
import { useContext } from "react"
import { Context } from "../context"


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
            {
              points.Postamats ?
                points.Postamats.map(point =>
                  <GeoObject
                    key={point.id}
                    geometry={{
                      type: 'Point',
                      coordinates: [point.lattitude, point.longtitude],
                    }}
                    properties={{
                      balloonContent: point.address,
                      iconCaption: point.id
                    }}
                    options={{
                      preset: 'islands#blackDotIconWithCaption',
                      hasHint: true,
                      iconCaptionMaxWidth: '50'
                    }}
                    modules={[
                      'geoObject.addon.balloon',
                    ]}
                  />
                ) :
                points.Polygon.map(point =>
                  <Circle
                    geometry={[[point.lattitude, point.longtitude], 100]}
                    options={{
                      fillColor: getColor(point.coefficient),
                      fillOpacity: 0.6,
                      strokeWidth: 0,
                    }}
                  />
                )
            }

          </Map>
        </div>
      </YMaps>
    </div>
  )
}