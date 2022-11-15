import { GeoObject, Circle } from '@pbe/react-yandex-maps'
import { useContext } from "react"
import { PointsContext } from "../../PointsContext"

export const Points = () => {
  const { points } = useContext(PointsContext)

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
    points ?
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
            geometry={[[point.lattitude, point.longtitude], 1000]}
            options={{
              fillColor: getColor(point.coefficient),
              fillOpacity: 0.6,
              strokeWidth: 0,
            }}
          />
        )
      : <></>
  )
}