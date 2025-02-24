import { ChangeEvent, useState } from 'react';
import './App.css'
import {qrCodeUrl} from './script/qrCodeUrl.ts'
import { createPdf } from './script/createPdf.ts';
// import { QrImage } from './components/QrImage'


function App() {

  const [imageUrl, setImageUrl] = useState('../public/default.png')
  const [labelWidth, setLabelWidth] = useState(0)
  const [labelHeight, setLabelHeight] = useState(0)
  const [qrWidth, setQrWidth] = useState(0)
  const [qrHeight, setQrHeight] = useState(0)

  const handleQRTextChange = async (event: ChangeEvent<HTMLTextAreaElement>) => {

    const text = event.target?.value;

    if(!text) {

      setImageUrl('../public/default.png')

    }
  
    setImageUrl(await qrCodeUrl(text))
  
  }

  const handleLabelWidth = (event: ChangeEvent<HTMLInputElement>) => {

    const width = parseInt(event.target.value)
    setLabelWidth(width)

  }

  const handleLabelHeight = (event: ChangeEvent<HTMLInputElement>) => {

    const height = parseInt(event.target.value)
    setLabelHeight(height)

  }

  const handleQrWidth = (event: ChangeEvent<HTMLInputElement>) => {

    const width = parseInt(event.target.value)

    if(labelWidth && width >= labelWidth) {

      alert('QR width must be less than label width')
      return
    }
    setQrWidth(width)

  }

  const handleQrHeigth =  (event: ChangeEvent<HTMLInputElement>) =>{

    const height = parseInt(event.target.value)
    if(labelHeight && height >= labelHeight) {

      alert('QR width must be less than label width')
      return
    }
    setQrHeight(height)

  }

  const handlePrint = () => {

    if(imageUrl) {

      createPdf(labelWidth, labelHeight, qrWidth, qrHeight, imageUrl)

    }


  }


  return (
    <>
      <div className='main-container'>
        
        <div className='header'>
          <div className="header-container">
            <h1>QR PRINTER TOOL</h1>
          </div>
          {/* <div className="logo-container">
            <img  className='logo' src='DHL_logo_rgb_BG.png' alt='logo'/>
          </div> */}
        </div>
        
        <div className="qr-main-container">
          <div className="qr-img-container">
            <img className='qr' src={imageUrl} alt='qr'/>
          </div>
          <div className="text-container">
            <h4 id='textqr-title'>QR Content</h4>
            <textarea name="message" rows={5} cols={100}
            onChange={handleQRTextChange} placeholder='Enter or paste QR Data' />
          </div>
          <div className="size-container">
            <div className="label-size-container">
              <h4 id='label-size-title'>Label Dimensions</h4>
              <div className="label-input-container">
              <label htmlFor="l-width">W</label>
                <input type="text"
                  name="l-width"
                  id="l-width" 
                  onChange={handleLabelWidth}
                />
                <label htmlFor="l-height">H</label>
                <input type="text"
                  name="l-height"
                  id="l-height"
                  onChange={handleLabelHeight}
                />
              </div>
            </div>
            <div className="qr-size-container">
              <h4 id='qr-size-title'>QR Dimensions</h4>
              <div className="qr-input-container">
                <label htmlFor="q-width">W</label>
                <input type="text"
                  name="q-width"
                  id="q-width"
                  onChange={handleQrWidth}
                />
                <label htmlFor="q-height">H</label>
                <input type="text"
                  name="q-height"
                  id="q-height"
                  onChange={handleQrHeigth}/>
              </div>
            </div>
          </div>
          <div className="print-btn-container">
            <button className='print-btn'
              onClick={handlePrint}>Print</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
