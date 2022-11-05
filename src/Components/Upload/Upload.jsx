import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export const Upload = ({ POINTS }) => {
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

  const exportExcel = () => {

  }
  const prepairURL = (data) => {
    const points = data['PostamatPointes'].map(point =>
      point.address.longitude + ',' + point.address.latitude + ',pm2grl'
    ).join('~')

    return `https://static-maps.yandex.ru/1.x/?l=map&pt=${points},pm2grl`
  }

  const exportPDF = () => {
    const input = document.body
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "in",
          format: [7, 6]
        });
        pdf.addImage(prepairURL(POINTS), 'JPEG', 0, 0);
        pdf.save("download.pdf");
      })
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