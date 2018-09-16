import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import SectionTitle from './../common/SectionTitle'
import 'prismjs/themes/prism-twilight.css'
import Code from 'preact-prism'

import TableExample from './../examples/Table'
const TableExampleSource = require('!!raw-loader!./../examples/Table')

import TableDarkExample from './../examples/TableDark'
const TableDarkExampleSource = require('!!raw-loader!./../examples/TableDark')

import TableStripedExample from './../examples/TableStriped'
const TableStripedExampleSource = require('!!raw-loader!./../examples/TableStriped')

import TableBorderedExample from './../examples/TableBordered'
const TableBorderedExampleSource = require('!!raw-loader!./../examples/TableBordered')

import TableBorderlessExample from './../examples/TableBorderless'
const TableBorderlessExampleSource = require('!!raw-loader!./../examples/TableBorderless')

import TableHoverExample from './../examples/TableHover'
const TableHoverExampleSource = require('!!raw-loader!./../examples/TableHover')

import TableSizingExample from './../examples/TableSizing'
const TableSizingExampleSource = require('!!raw-loader!./../examples/TableSizing')

import TableResponsiveExample from './../examples/TableResponsive'
const TableResponsiveExampleSource = require('!!raw-loader!./../examples/TableResponsive')

const properties = `Table.propTypes = {
// Pass in a Component to override default element
tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
size: PropTypes.string,
bordered: PropTypes.bool,
borderless: PropTypes.bool,
striped: PropTypes.bool,
dark: PropTypes.bool,
hover: PropTypes.bool,
responsive: PropTypes.bool
};`

export default class TablesPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Tables" />
        <hr />
        <div className="docs-example">
          <TableExample />
          <Code language="javascript">{TableExampleSource}</Code>
        </div>
        <h4>Properties</h4>
        <Code language="javascript">{properties}</Code>
        <SectionTitle>Dark table</SectionTitle>
        <div className="docs-example">
          <TableDarkExample />
          <Code language="javascript">{TableDarkExampleSource}</Code>
        </div>
        <SectionTitle>Striped rows</SectionTitle>
        <div className="docs-example">
          <TableStripedExample />
          <Code language="javascript">{TableStripedExampleSource}</Code>
        </div>
        <SectionTitle>Bordered table</SectionTitle>
        <div className="docs-example">
          <TableBorderedExample />
          <Code language="javascript">{TableBorderedExampleSource}</Code>
        </div>
        <SectionTitle>Borderless table</SectionTitle>
        <div className="docs-example">
          <TableBorderlessExample />
          <Code language="javascript">{TableBorderlessExampleSource}</Code>
        </div>
        <SectionTitle>Hoverable rows</SectionTitle>
        <div className="docs-example">
          <TableHoverExample />
          <Code language="javascript">{TableHoverExampleSource}</Code>
        </div>
        <SectionTitle>Small table</SectionTitle>
        <div className="docs-example">
          <TableSizingExample />
          <Code language="javascript">{TableSizingExampleSource}</Code>
        </div>
        <SectionTitle>Responsive table</SectionTitle>
        <div className="docs-example">
          <TableResponsiveExample />
          <Code language="javascript">{TableResponsiveExampleSource}</Code>
        </div>
      </div>
    )
  }
}
