import { h } from 'preact'
import { Link } from 'preact-router/match'
import { Container, Row, Col, Nav, NavItem, NavLink } from 'preact-bootstrap-ui'

function Content({ items, children, title }) {
  return (
    <Container className="content">
      <Row>
        <Col tag="main" md={{ size: 3, order: 2 }}>
          <div className="docs-sidebar mb-3">
            <h1 className="h5">{title}</h1>
            <Nav className="flex-column">
              {items.map(item => (
                <Link href={item.to}>{item.name}</Link>
              ))}
            </Nav>
          </div>
        </Col>
        <Col tag="aside" md={{ size: 9, order: 1 }} className="docSearch-content">
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default Content
