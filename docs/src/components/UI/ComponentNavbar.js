import { h } from 'preact'
import { Link } from 'preact-router/match'
import { Col, Nav, NavItem, NavLink } from 'preact-bootstrap-ui'

function ComponentNavbar() {
  return (
    <Col tag="main" md={{ size: 3, order: 2 }}>
      <div className="docs-sidebar mb-3">
        <h1 className="h5">Components</h1>
        <Nav className="flex-column">
          <NavItem>
            <NavLink tag={Link} to={'/components/badge'} activeClassName="active">
              Badge
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/components/breadcrumbs'} activeClassName="active">
              Breadcrumbs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/components/buttons'} activeClassName="active">
              Buttons
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </Col>
  )
}

export default ComponentNavbar