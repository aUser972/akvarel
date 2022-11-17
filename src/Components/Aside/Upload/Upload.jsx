import jsPDF from "jspdf"
import { useContext } from "react"
import { PointsContext } from "../../PointsContext"
import FileSaver from 'file-saver'
import XLSX from 'sheetjs-style'

export const Upload = () => {
  const { points } = useContext(PointsContext)

  const BUTTONS = [
    {
      id: 1,
      name: 'Скачать Excel',
    },
    {
      id: 2,
      name: 'Скачать PDF'
    }
  ]

  const exportExcel = async () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    const fileExtension = '.xlsx'

    const ws = XLSX.utils.json_to_sheet(points.Postamats.Postamats)
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    const data = new Blob([excelBuffer], { type: fileType })
    FileSaver.saveAs(data, 'postamats' + fileExtension)
  }
  const prepairURL = (data) => {
    let zoom = ''
    data = data.Postamats ? data.Postamats : data.Polygon
    if (data.length === 1) zoom = '&z=15&'
    const result = data.map(point =>
      point.longtitude + ',' + point.lattitude + ',pmgrs' + point.id
    ).join('~')
    return `https://static-maps.yandex.ru/1.x/?${zoom}size=650,450&l=map&pt=${result}`
  }

  const exportPDF = (data) => {
    document.querySelector('.aside__close').click()
    window.print()
    if (data === '') {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: 'a4'
      });
      pdf.addImage(prepairURL(data), 'JPEG', 0, 0, 12, 9);
      pdf.save("postamats.pdf");
    }
  }
  return (
    <div className="aside__form-upload">
      {
        BUTTONS.map(btn =>
          <button
            className="aside__form-upload__btn button_green"
            key={btn.id}
            onClick={() => { btn.id === 1 ? exportExcel(points) : exportPDF(points) }}
          >
            {btn.name}
          </button>
        )
      }
    </div>
  )
}