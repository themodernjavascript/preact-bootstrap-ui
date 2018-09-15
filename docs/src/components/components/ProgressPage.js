import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import SectionTitle from './../common/SectionTitle'
import 'prismjs/themes/prism-twilight.css'
import Code from 'preact-prism'

import ProgressExample from './../examples/Progress'
const ProgressExampleSource = require('!!raw-loader!./../examples/Progress')

import ProgressColorExample from './../examples/ProgressColor'
const ProgressColorExampleSource = require('!!raw-loader!./../examples/ProgressColor')

import ProgressLabelsExample from './../examples/ProgressLabels'
const ProgressLabelsExampleSource = require('!!raw-loader!./../examples/ProgressLabels')

import ProgressStripedExample from './../examples/ProgressStriped'
const ProgressStripedExampleSource = require('!!raw-loader!./../examples/ProgressStriped')

import ProgressAnimatedExample from './../examples/ProgressAnimated'
const ProgressAnimatedExampleSource = require('!!raw-loader!./../examples/ProgressAnimated')

import ProgressMultiExample from './../examples/ProgressMulti'
const ProgressMultiExampleSource = require('!!raw-loader!./../examples/ProgressMulti')

import ProgressMaxExample from './../examples/ProgressMax'
const ProgressMaxExampleSource = require('!!raw-loader!./../examples/ProgressMax')

const properties = `Progress.propTypes = {
  multi: PropTypes.bool,
  bar: PropTypes.bool, // used in combination with multi
  tag: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  max: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
  ]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  barClassName: PropTypes.string // used to add class to the inner progress-bar element
};

Progress.defaultProps = {
  tag: 'progress',
  value: 0,
  max: 100,
};`

export default class ProgressPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Progress" />
        <div className="docs-example">
          <ProgressExample />
          <Code language="javascript">{ProgressExampleSource}</Code>
        </div>
        <h4>Properties</h4>
        <Code language="javascript">{properties}</Code>
        <SectionTitle>Color Variants</SectionTitle>
        <div className="docs-example">
          <ProgressColorExample />
          <Code language="javascript">{ProgressColorExampleSource}</Code>
        </div>
        <SectionTitle>Labels</SectionTitle>
        <div className="docs-example">
          <ProgressLabelsExample />
          <Code language="javascript">{ProgressLabelsExampleSource}</Code>
        </div>
        <SectionTitle>Striped</SectionTitle>
        <div className="docs-example">
          <ProgressStripedExample />
          <Code language="javascript">{ProgressStripedExampleSource}</Code>
        </div>
        <SectionTitle>Animated</SectionTitle>
        <p>
          The <code>animated</code> prop also adds the <code>striped</code> prop; there is no need to pass both.
        </p>
        <div className="docs-example">
          <ProgressAnimatedExample />
          <Code language="javascript">{ProgressAnimatedExampleSource}</Code>
        </div>
        <SectionTitle>Multiple bars / Stacked</SectionTitle>
        <div className="docs-example">
          <ProgressMultiExample />
          <Code language="javascript">{ProgressMultiExampleSource}</Code>
        </div>
        <SectionTitle>Max value</SectionTitle>
        <div className="docs-example">
          <ProgressMaxExample />
          <Code language="javascript">{ProgressMaxExampleSource}</Code>
        </div>
      </div>
    )
  }
}
