/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import Code from 'preact-prism'
import SectionTitle from './../common/SectionTitle'

import BreadcrumbExample from './../examples/Breadcrumb'
const BreadcrumbExampleSource = require('!!raw-loader!./../examples/Breadcrumb')

import BreadcrumbNoListExample from './../examples/BreadcrumbNoList'
const BreadcrumbNoListExampleSource = require('!!raw-loader!./../examples/BreadcrumbNoList')

const properties = `Breadcrumb.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  'aria-label': PropTypes.string
};

BreadcrumbItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};`

export default class BreadcrumbsPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Breadcrumbs" />
        <div className="docs-example">
          <BreadcrumbExample />
          <Code language="javascript">{BreadcrumbExampleSource}</Code>
        </div>
        <h4>Properties</h4>
        <Code language="javascript">{properties}</Code>
        <SectionTitle>No list</SectionTitle>
        <hr />
        <p>Breadcrumbs can work without the usage of list markup.</p>
        <div className="docs-example">
          <BreadcrumbNoListExample />
          <Code language="javascript">{BreadcrumbNoListExampleSource}</Code>
        </div>
      </div>
    )
  }
}
