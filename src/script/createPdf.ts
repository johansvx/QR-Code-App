import jsPDF from "jspdf";


export const createPdf = (l_width: number, l_height: number, q_width: number, q_height: number, imageData: string) => {

    const pdf = new jsPDF('l', 'cm', [l_width, l_height])

    if(imageData) {

        pdf.addImage(imageData, 'PNG', 1, 0.2, q_width, q_height)
        pdf.autoPrint({variant: 'non-conform'});
        pdf.save('label.pdf')
    }

}