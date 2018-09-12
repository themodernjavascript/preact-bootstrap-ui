/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import SectionTitle from './../common/SectionTitle'
import 'prismjs/themes/prism-twilight.css'
import Code from 'preact-prism'

import LayoutExample from './../examples/Layout'
const LayoutExampleSource = require('!!raw-loader!./../examples/Layout')

const containerProperties = `Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}`

const rowProperties = `Row.propTypes = {
  noGutters: PropTypes.bool
}`

const colProperties = `const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-width-12
    // auto => col-auto or col-width-auto
    // true => col or col-width
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}`

export default class LayoutPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Layout Components (Container, Row, Col)" />
        <div className="docs-example">
          <LayoutExample />
          <Code language="javascript">{LayoutExampleSource}</Code>
        </div>
        <h4>Container Properties</h4>
        <Code language="javascript">{containerProperties}</Code>
        <h4>Row Properties</h4>
        <Code language="javascript">{rowProperties}</Code>
        <h4>Col Properties</h4>
        <Code language="javascript">{colProperties}</Code>
      </div>
    )
  }
}
