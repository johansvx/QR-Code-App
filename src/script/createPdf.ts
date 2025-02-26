import jsPDF from "jspdf";


export const createPdf = (l_width: number, l_height: number, q_size: number, imageData: string) => {

    const pdf = new jsPDF('l', 'cm', [l_width, l_height])

    const x = (l_width - q_size) / 2
    const y = (l_height - q_size) / 2

    if(imageData) {

        pdf.addImage(imageData, 'PNG', x, y, q_size, q_size)
        pdf.autoPrint({variant: 'non-conform'});
        pdf.save('label.pdf')
    }

}