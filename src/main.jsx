import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PdfViewerComponent from './Components/pdfViewer/PdfViewerComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />

      {/* <PdfViewerComponent document={'ppt.ppt'} /> */}
  </React.StrictMode>,
)
