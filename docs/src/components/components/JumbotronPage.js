import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import Code from 'preact-prism'
import SectionTitle from './../common/SectionTitle'

import JumbotronExample from './../examples/Jumbotron'
const JumbotronExampleSource = require('!!raw-loader!./../examples/Jumbotron')

import JumbotronFluidExample from "./../examples/JumbotronFluid"
const JumbotronFluidExampleSource = require('!!raw-loader!./../examples/JumbotronFluid')

const properties = `Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};`

export default class JumbotronPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Jumbotron" />
        <hr />
        <div className="docs-example">
          <JumbotronExample />
          <Code language="javascript">{JumbotronExampleSource}</Code>
        </div>
        <h4>Properties</h4>
        <Code language="javascript">{properties}</Code>
        <SectionTitle>Fluid Jumbotron</SectionTitle>
        <hr />
        <div className="docs-example">
          <JumbotronFluidExample />
          <Code language="javascript">{JumbotronFluidExampleSource}</Code>
        </div>
      </div>
    )
  }
}
