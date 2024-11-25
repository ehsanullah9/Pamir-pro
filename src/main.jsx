import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import { ThemeProvider } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(

    <ThemeProvider dir='rtl'>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>

)
