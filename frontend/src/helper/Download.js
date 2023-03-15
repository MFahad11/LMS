import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Certificate from '../Pages/components/cards/Certficate';
import  ReactDOM  from 'react-dom';
export function downloadPDF() {
  const doc = new jsPDF();

  // create a div element to render the component
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<Certificate />, div);

  // convert the div element to an image using html2canvas
  html2canvas(div).then((canvas) => {
    const imgData = canvas.toDataURL('image/jpeg');

    // add the image to the PDF document
    doc.addImage(imgData, 'JPEG', 10, 10, 180, 180);

    // save the PDF document
    doc.save("myPDF.pdf");

    // remove the temporary div element
    document.body.removeChild(div);
  });
}
