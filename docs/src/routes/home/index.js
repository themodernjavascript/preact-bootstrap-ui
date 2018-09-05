import { h } from 'preact'
import Code from 'preact-prism'
import 'prismjs/themes/prism-twilight.css'
import './../../style/index.css'
import Example from './../../components/examples/import-basic'

import { 
  Container, 
  Jumbotron, 
  Row, 
  Col, 
  Button 
} from 'preact-bootstrap-ui'

const installation = `npm install --save preact-bootstrap-ui`
const importing = `import {
  h, 
  render, 
  Component 
} from 'preact'

import { Button } from 'preact-bootstrap-ui'

export default (props) => {
  return (
    <Button color="danger">Danger!</Button>
  )
}`

const about1 = `// Content passed in via props
const Example = (props) => {
  return (
    <p>This is a tooltip <TooltipTrigger tooltip={TooltipContent}>example</TooltipTrigger>!</p>
  );
}

// Content passed in as children (Preferred)
const PreferredExample = (props) => {
  return (
    <p>
      This is a <a href="#" id="TooltipExample">tooltip</a> example.
      <Tooltip target="TooltipExample">
        <TooltipContent/>
      </Tooltip>
    </p>
  );
}
`

const Home = () => (
  <div>
    <Jumbotron tag="section" className="jumbotron-header text-center mb-3">
      <Container>
        <Row>
          <Col>
            <h1 className="jumbotron-heading display-4">Preact Bootstrap UI</h1>
            <p className="lead">
              Easy to use Preact Bootstrap 4 components
            </p>
            <p>
              <Button color="danger" outline>GitHub</Button>
              <Button color="danger">Components</Button>
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    <Container>
      <Row className="justify-content-sm-center">
        <Col sm={8} className="docSearch-content">
          <h2>Installation</h2>
          <hr />
          <h3 className="mt-5">NPM</h3>
          <p>Install Preact Bootstrap UI and peer dependencies via NPM</p>
          <Code language="css">{installation}</Code>
          <p>Import the components you need</p>
          <div className="docs-example">
            <Example />
            <Code language="javascript">{importing}</Code>
          </div>
          <h2 className="mt-5">About the Project</h2>
          <hr />
          <p>This library contains Preact Bootstrap 4 components that favor composition and control. The library does not depend on jQuery or Bootstrap javascript. However, <a href="https://popper.js.org/">https://popper.js.org/</a> via <a href="https://github.com/souporserious/react-popper">https://github.com/souporserious/react-popper</a> is relied upon for advanced positioning of content like Tooltips, Popovers, and auto-flipping Dropdowns.</p>
          <p>There are a few core concepts to understand in order to make the most out of this library.</p>
          <p>1. Your content is expected to be composed via props.children rather than using named props to pass in Components.</p>
          <Code language="javascript">{about1}</Code>
          <p>2. Attributes in this library are used to pass in state, conveniently apply modifier classes, enable advanced functionality (like popperjs), or automatically include non-content based elements.</p>
          <p>Examples:</p>
          <ul>
            <li><code>isOpen</code> - current state for items like dropdown, popover, tooltip</li>
            <li><code>toggle</code> - callback for toggling isOpen in the controlling component</li>
            <li><code>color</code> - applies color classes, ex: <code>{'<Button color="danger"/>'}</code></li>
            <li><code>size</code> for controlling size classes. ex: <code>{'<Button size="sm"/>'}</code></li>
            <li><code>tag</code> - customize component output by passing in an element name or Component</li>
            <li>boolean based props (attributes) when possible for alternative style classes or sr-only content</li>
          </ul>
        </Col>
      </Row>
    </Container>
	</div>
)

export default Home