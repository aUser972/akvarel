import { YMaps, Map, GeoObject } from "@pbe/react-yandex-maps"
import mo from '../../mo.json'

export const Maps = () => {
  const kievskiy = mo.features.filter(item =>
    item.properties.NAME === 'Киевский'
  )

  const points = [
    {
      coordinates: [55.787715, 37.775631],
      title: 'ВАО',
      name: 'Московская область, г. ВАО',
      link: '/geo/vao/',
      hide_page: 0,
      id: 'city--09c334bc'
    }, {
      coordinates: [55.728003, 37.443533],
      title: 'ЗАО',
      name: 'Московская область, г. ЗАО',
      link: '/geo/zao/',
      hide_page: 0,
      id: 'city--6d92aabf'
    }, {
      coordinates: [55.838390, 37.525774],
      title: 'САО',
      name: 'Московская область, г. САО',
      link: '/geo/sao/',
      hide_page: 0,
      id: 'city--51e42351'
    }, {
      coordinates: [55.854875, 37.632565],
      title: 'СВАО',
      name: 'Московская область, г. СВАО',
      link: '/geo/svao/',
      hide_page: 0,
      id: 'city--dfa05384'
    }, {
      coordinates: [55.829370, 37.451555],
      title: 'СЗАО',
      name: 'Московская область, г. СЗАО',
      link: '/geo/szao/',
      hide_page: 0,
      id: 'city--96b67aa3'
    }, {
      coordinates: [55.753600, 37.621184],
      title: 'ЦАО',
      name: 'Московская область, г. ЦАО',
      link: '/geo/tsao/',
      hide_page: 0,
      id: 'city--5c860e69'
    }, {
      coordinates: [55.622014, 37.678065],
      title: 'ЮАО',
      name: 'Московская область, г. ЮАО',
      link: '/geo/yuao/',
      hide_page: 0,
      id: 'city--e6b62677'
    }, {
      coordinates: [55.692019, 37.754592],
      title: 'ЮВАО',
      name: 'Московская область, г. ЮВАО',
      link: '/geo/yuvao/',
      hide_page: 0,
      id: 'city--acd5300f'
    }, {
      coordinates: [55.662735, 37.576187],
      title: 'ЮЗАО',
      name: 'Московская область, г. ЮЗАО',
      link: '/geo/yuzao/',
      hide_page: 0,
      id: 'city--8026980e'
    }
  ]
  console.log(kievskiy[0].geometry.coordinates)
  return (
    <div className="map">
      <YMaps>
        <div>
          <Map width='100%' height='100%' defaultState={{ center: [55.75, 37.57], zoom: 10 }} >

            <GeoObject
              geometry={{
                type: 'Polygon',
                coordinates: kievskiy[0].geometry.coordinates,
              }}
              properties={{
                balloonContent: "Многоугольник"
              }}
              options={{
                fillColor: '#00FF00',
                // Цвет обводки.
                strokeColor: '#0000FF',
                // Общая прозрачность (как для заливки, так и для обводки).
                opacity: 0.5,
                // Ширина обводки.
                strokeWidth: 2

              }}
            />
            {
              points.map(point =>
                <GeoObject
                  key={point.id}
                  geometry={{
                    type: 'Point',
                    coordinates: point.coordinates,
                  }}
                  properties={{
                    balloonContent: point.name,
                    hintContent: point.name
                  }}
                  options={{
                    preset: 'islands#blackStretchyIcon',
                    hasHint: true
                  }}
                  modules={[
                    'geoObject.addon.balloon',
                    'geoObject.addon.hint'
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