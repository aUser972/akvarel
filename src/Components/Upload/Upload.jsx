import jsPDF from "jspdf"
import { useContext } from "react"
import { Context } from "../context"
import FileSaver from 'file-saver'
import XLSX from 'sheetjs-style'

export const Upload = ({ POINTS }) => {
  const { points } = useContext(Context)
  console.log(points)
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

    const ws = XLSX.utils.json_to_sheet(points.Postamats)
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    const data = new Blob([excelBuffer], { type: fileType })
    FileSaver.saveAs(data, 'postamats' + fileExtension)
  }
  const prepairURL = (data) => {
    const result = points.Postamats.map(point =>
      point.longtitude + ',' + point.lattitude + ',pm2grl'
    ).join('~')

    return `https://static-maps.yandex.ru/1.x/?size=650,450&l=map&pt=${result},pm2grl`
  }

  const exportPDF = () => {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "in",
      format: 'a4'
    });
    pdf.addImage(prepairURL(POINTS), 'JPEG', 0, 0, 12, 9);
    pdf.save("postamats.pdf");
  }
  return (
    <div className="aside__form-upload">
      {
        BUTTONS.map(btn =>
          <button
            className="aside__form-upload__btn button_green"
            key={btn.id}
            onClick={() => { btn.id === 1 ? exportExcel() : exportPDF() }}
          >
            {btn.name}
          </button>
        )
      }
    </div>
  )
}