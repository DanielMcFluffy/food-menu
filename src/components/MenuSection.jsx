import { Container, Navbar } from "react-bootstrap";
import './MenuSection.css'

export default function MenuSection({ title, children }) {

  return (
    <>
      <Navbar className="menu-header" style={{ width: '85%' }} >
        <Container>
          <Navbar.Brand>{title}</Navbar.Brand>
        </Container>
      </Navbar>
      {children}

    </>
  )
}

