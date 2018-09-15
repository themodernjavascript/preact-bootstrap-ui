import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import SectionTitle from './../common/SectionTitle'
import 'prismjs/themes/prism-twilight.css'
import Code from 'preact-prism'

import PaginationExample from '../examples/Pagination'
const PaginationExampleSource = require('!!raw-loader!../examples/Pagination')

import PaginationStateExample from './../examples/PaginationState'
const PaginationStateExampleSource = require('!!raw-loader!./../examples/PaginationState')

import PaginationSizingLargeExample from './../examples/PaginationSizingLarge'
const PaginationSizingLargeExampleSource = require('!!raw-loader!./../examples/PaginationSizingLarge')

import PaginationSizingSmallExample from './../examples/PaginationSizingSmall'
const PaginationSizingSmallExampleSource = require('!!raw-loader!./../examples/PaginationSizingSmall')

const properties = `Pagination.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string
};

PaginationItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

PaginationLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  next: PropTypes.bool,
  previous: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string
};`

export default class PaginationPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Pagination" />
        <div className="docs-example">
          <PaginationExample />
          <Code language="javascript">{PaginationExampleSource}</Code>
        </div>
        <h4>Properties</h4>
        <Code language="javascript">{properties}</Code>
        <SectionTitle>Disabled and active states</SectionTitle>
        <div className="docs-example">
          <PaginationStateExample />
          <Code language="javascript">{PaginationStateExampleSource}</Code>
        </div>
        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <PaginationSizingLargeExample />
          <Code language="javascript">{PaginationSizingLargeExampleSource}</Code>
        </div>
        <div className="docs-example">
          <PaginationSizingSmallExample />
          <Code language="javascript">{PaginationSizingSmallExampleSource}</Code>
        </div>
      </div>
    )
  }
}
