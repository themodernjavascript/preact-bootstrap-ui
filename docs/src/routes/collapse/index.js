import { h, Component } from 'preact';
import { 
  Container, 
  Jumbotron, 
  Row, 
  Col, 
  Button,
  Nav 
} from 'preact-bootstrap-ui';
import './../../style/index.css';

import ComponentNavbar from './../../components/UI/ComponentNavbar';
import CollapsePage from './../../components/components/CollapsePage';

export default class Components extends Component {
  render(props) {
    return (
      <div>
        <Container className="content">
          <Row>
            <ComponentNavbar />
            <Col tag="aside" md={{ size: 9, order: 1 }} className="docSearch-content">
              <CollapsePage />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}