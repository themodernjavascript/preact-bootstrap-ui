/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import Code from 'preact-prism'
import SectionTitle from './../common/SectionTitle'

import ButtonExample from '../examples/Button'
const ButtonExampleSource = require('!!raw-loader!../examples/Button')

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
      </div>
    )
  }
}
