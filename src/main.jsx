import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Container } from 'reactstrap'

createRoot(document.getElementById('root')).render(
  <Container fluid>
    <StrictMode>
      <App />
    </StrictMode>
  </Container>,
)
