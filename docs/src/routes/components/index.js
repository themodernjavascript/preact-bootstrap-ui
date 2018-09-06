import { h, Component } from 'preact'
import { 
  Container, 
  Jumbotron, 
  Row, 
  Col, 
  Button 
} from 'preact-bootstrap-ui'
import './../../style/index.css'

import AlertsPage from './../../components/components/AlertsPage'

export default class Components extends Component {
  render(props) {
    return (
      <div>
        <Container className="content">
          <Row>
            <Col tag="aside" md={{ size: 9, order: 1 }} className="docSearch-content">
              <AlertsPage />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}