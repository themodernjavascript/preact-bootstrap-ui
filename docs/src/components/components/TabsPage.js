import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import 'prismjs/themes/prism-twilight.css'
import Code from 'preact-prism'

import TabsExample from './../examples/Tabs'
const TabsExampleSource = require('!!raw-loader!./../examples/Tabs')

export default class TabsPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Tabs" />
        <hr />
        <div className="docs-example">
          <TabsExample />
          <Code language="javascript">{TabsExampleSource}</Code>
        </div>
      </div>
    )
  }
}
