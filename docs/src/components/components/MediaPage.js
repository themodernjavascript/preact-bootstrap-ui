import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import SectionTitle from './../common/SectionTitle'
import 'prismjs/themes/prism-twilight.css'
import Code from 'preact-prism'

import MediaExample from './../examples/Media'
const MediaExampleSource = require('!!raw-loader!./../examples/Media')

export default class MediaPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Media object" />
        <div className="docs-example">
          <MediaExample />
          <Code language="javascript">{MediaExampleSource}</Code>
        </div>
      </div>
    )
  }
}
