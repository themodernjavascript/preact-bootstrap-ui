import { h, Component } from 'preact'
import { 
  Container, 
  Jumbotron, 
  Row, 
  Col, 
  Button,
  Nav 
} from 'preact-bootstrap-ui'
import './../../style/index.css'

import ComponentNavbar from './../../components/UI/ComponentNavbar'
import ButtonDropdownPage from './../../components/components/ButtonDropdownPage'

export default class Components extends Component {
  render(props) {
    return (
      <div>
        <Container className="content">
          <Row>
            <ComponentNavbar />
            <Col tag="aside" md={{ size: 9, order: 1 }} className="docSearch-content">
              <ButtonDropdownPage />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}