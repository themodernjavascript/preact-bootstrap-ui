import {
  h, 
  render, 
  Component 
} from 'preact'

import { Container, Row, Col } from 'preact-bootstrap-ui'

export default () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="social">
              <iframe src="https://ghbtns.com/github-btn.html?user=themodernjavascript&repo=preact-bootstrap-ui&type=star&count=true" frameBorder="0" scrolling="0" width="100" height="20px" />
              <iframe src="https://ghbtns.com/github-btn.html?user=themodernjavascript&repo=preact-bootstrap-ui&type=fork&count=true" frameBorder="0" scrolling="0" width="100" height="20px" />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
