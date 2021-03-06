import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import SectionTitle from './../common/SectionTitle'
import 'prismjs/themes/prism-twilight.css'
import Code from 'preact-prism'

import ListGroupExample from './../examples/ListGroup'
const ListGroupExampleSource = require('!!raw-loader!./../examples/ListGroup')

import ListGroupBadgeExample from './../examples/ListGroupBadge'
const ListGroupBadgeExampleSource = require('!!raw-loader!./../examples/ListGroupBadge')

import ListGroupDisabledItemsExample from './../examples/ListGroupDisabledItems'
const ListGroupDisabledItemsExampleSource = require('!!raw-loader!./../examples/ListGroupDisabledItems')

import ListGroupAnchorsAndButtonsExample from './../examples/ListGroupAnchorsAndButtons'
const ListGroupAnchorsAndButtonsExampleSource = require('!!raw-loader!./../examples/ListGroupAnchorsAndButtons')

import ListGroupContextualClassesExample from './../examples/ListGroupContextualClasses'
const ListGroupContextualClassesExampleSource = require('!!raw-loader!./../examples/ListGroupContextualClasses')

import ListGroupCustomContentExample from './../examples/ListGroupCustomContent'
const ListGroupCustomContentExampleSource = require('!!raw-loader!./../examples/ListGroupCustomContent')

import ListGroupFlushExample from './../examples/ListGroupFlush'
const ListGroupFlushExampleSource = require('!!raw-loader!./../examples/ListGroupFlush')

const properties = `ListGroup.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    // boolean to render list group items edge-to-edge in a parent container
    flush: PropTypes.bool,
    className: PropTypes.string,
    cssModule: PropTypes.object,
}
`

export default class ListGroupPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="ListGroup" />
        <div className="docs-example">
          <ListGroupExample />
          <Code language="javascript">{ListGroupExampleSource}</Code>
        </div>
        <h4>Properties</h4>
        <Code language="javascript">{properties}</Code>
        <legend>Tags</legend>
        <div className="docs-example">
          <ListGroupBadgeExample />
          <Code language="javascript">{ListGroupBadgeExampleSource}</Code>
        </div>
        <legend>Disabled items</legend>
        <div className="docs-example">
          <ListGroupDisabledItemsExample />
          <Code language="javascript">{ListGroupDisabledItemsExampleSource}</Code>
        </div>
        <legend>Anchors and buttons</legend>
        <div className="docs-example">
          <p>Note: you need add action props to make these buttons fit the list.</p>
          <ListGroupAnchorsAndButtonsExample />
          <Code language="javascript">{ListGroupAnchorsAndButtonsExampleSource}</Code>
        </div>
        <legend>Contextual classes</legend>
        <div className="docs-example">
          <ListGroupContextualClassesExample />
          <Code language="javascript">{ListGroupContextualClassesExampleSource}</Code>
        </div>
        <legend>Custom content</legend>
        <div className="docs-example">
          <ListGroupCustomContentExample />
          <Code language="javascript">{ListGroupCustomContentExampleSource}</Code>
        </div>
        <legend>Flush</legend>
        <div className="docs-example">
          <ListGroupFlushExample />
          <Code language="javascript">{ListGroupFlushExampleSource}</Code>
        </div>
      </div>
    )
  }
}
