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
          <NavItem>
            <NavLink tag={Link} to={'/components/button-dropdown'} activeClassName="active">
              Button Dropdown
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/components/button-group'} activeClassName="active">
              Button Group
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/components/card'} activeClassName="active">
              Card
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/components/jumbotron'} activeClassName="active">
              Jumbotron
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/components/layout'} activeClassName="active">
              Layout
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/components/layout'} activeClassName="active">
              List Group
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/components/pagination'} activeClassName="active">
              Pagination
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/components/progress'} activeClassName="active">
              Progress
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/components/tables'} activeClassName="active">
              Tables
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/components/tabs'} activeClassName="active">
              Tabs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/components/fade'} activeClassName="active">
              Fade
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </Col>
  )
}

export default ComponentNavbar