import QRCode from 'qrcode';


export async function qrCodeUrl(text: string):Promise<string>{

    try{
        const imgUrl= QRCode.toDataURL(text,
            {
            width:400,
            errorCorrectionLevel: 'L'
            })
        return imgUrl
        

    }
    catch(err){

        throw new Error("Error generando la imagen QR -> " + err)

    } 

}