import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import SectionTitle from './../common/SectionTitle'
import 'prismjs/themes/prism-twilight.css'
import Code from 'preact-prism'

import ListGroupExample from './../examples/ListGroup'
const ListGroupExampleSource = require('!!raw-loader!./../examples/ListGroup');

export default class ListGroupPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="ListGroup" />
        <div className="docs-example">
          <ListGroupExample />
          <Code language="javascript">{ListGroupExampleSource}</Code>
        </div>
      </div>
    )
  }
}
