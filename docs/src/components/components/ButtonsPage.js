/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import Code from 'preact-prism'
import SectionTitle from './../common/SectionTitle'
import { Button } from 'preact-bootstrap-ui'

import ButtonExample from './../examples/Button'
const ButtonExampleSource = require('!!raw-loader!./../examples/Button')

import ButtonOutline from './../examples/ButtonOutline'
const ButtonOutlineSource = require('!!raw-loader!./../examples/ButtonOutline')

import ButtonStateful from './../examples/ButtonStateful'
const ButtonStatefulSource = require('!!raw-loader!./../examples/ButtonStateful')

const properties = `Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,

  // Pass in a Component to override default button element
  // example: react-router Link
  // default: 'button'
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  onClick: PropTypes.func,
  size: PropTypes.string
}`

const largeSize = `<Button color="primary" size="lg">Large Button</Button>{' '}
<Button color="secondary" size="lg">Large Button</Button>`

const smallSize = `<Button color="primary" size="sm">Small Button</Button>{' '}
<Button color="secondary" size="sm">Small Button</Button>`

const block = `<Button color="primary" size="lg" block>Block level button</Button>
<Button color="secondary" size="lg" block>Block level button</Button>`

const activeState = `<Button color="primary" size="lg" active>Primary link</Button>{' '}
<Button color="secondary" size="lg" active>Link</Button>`

const disabledState = `<Button color="primary" size="lg" disabled>Primary button</Button>{' '}
<Button color="secondary" size="lg" disabled>Button</Button>`

export default class ButtonsPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Buttons" />
        <div className="docs-example">
          <ButtonExample />
          <Code language="javascript">{ButtonExampleSource}</Code>
        </div>
        <h4>Properties</h4>
        <Code language="javascript">{properties}</Code>
        <SectionTitle>Outline Buttons</SectionTitle>
        <div className="docs-example">
          <ButtonOutline />
          <Code language="javascript">{ButtonOutlineSource}</Code>
        </div>
        <SectionTitle>Sizes</SectionTitle>
        <div className="docs-example">
          <Button color="primary" size="lg">Large Button</Button>{' '}
          <Button color="secondary" size="lg">Large Button</Button>
          <Code language="javascript">{largeSize}</Code>
        </div>
        <div className="docs-example">
          <Button color="primary" size="sm">Small Button</Button>{' '}
          <Button color="secondary" size="sm">Small Button</Button>
          <Code language="javascript">{smallSize}</Code>
        </div>
         <div className="docs-example">
          <Button color="primary" size="lg" block>Block level button</Button>
          <Button color="secondary" size="lg" block>Block level button</Button>
          <Code language="javascript">{block}</Code>
        </div>
        <SectionTitle>Active State</SectionTitle>
        <div className="docs-example">
          <Button color="primary" size="lg" active>Primary link</Button>{' '}
          <Button color="secondary" size="lg" active>Link</Button>
          <Code language="javascript">{activeState}</Code>
        </div>
        <SectionTitle>Disabled State</SectionTitle>
        <div className="docs-example">
          <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
          <Button color="secondary" size="lg" disabled>Button</Button>
          <Code language="javascript">{disabledState}</Code>
        </div>
        <SectionTitle>Checkbox and Radio Buttons (Stateful Buttons)</SectionTitle>
        <p>
          In order to have checkbox and radio buttons, your component needs to manage the state of which button(s) are active/select. It is not in the opinion of this library to manage state within it's components so it is left up to you. Below is a simple example showcasing how this could be done using the components which already exist in this library.
        </p>
        <div className="docs-example">
          <ButtonStateful />
          <Code language="javascript">{ButtonStatefulSource}</Code>
        </div>
      </div>
    )
  }
}
