/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import SectionTitle from './../common/SectionTitle'
import 'prismjs/themes/prism-twilight.css'
import Code from 'preact-prism'

import BadgeExample from './../examples/Badge'
const BadgeExampleSource = require('!!raw-loader!../examples/Badge')

import BadgeButtonExample from '../examples/BadgeButton';
const BadgeButtonExampleSource = require('!!raw-loader!../examples/BadgeButton')

import BadgeVariationsExample from '../examples/BadgeVariations'
const BadgeVariationsExampleSource = require('!!raw-loader!../examples/BadgeVariations')

import BadgePillsExample from '../examples/BadgePills'
const BadgePillsExampleSource = require('!!raw-loader!../examples/BadgePills')

import BadgeLinksExample from '../examples/BadgeLinks'
const BadgeLinksExampleSource = require('!!raw-loader!../examples/BadgeLinks')

export default class BadgePage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Badges" />
        <hr />
        <p>Scale to parent</p>
        <div className="docs-example">
          <BadgeExample />
          <Code language="javascript">{BadgeExampleSource}</Code>
        </div>
        <p>Badges can be used as part of links or buttons to provide a counter.</p>
        <div className="docs-example">
          <BadgeButtonExample />
          <Code language="javascript">{BadgeButtonExampleSource}</Code>
        </div>
        <SectionTitle>Contextual variations</SectionTitle>
        <div className="docs-example">
          <BadgeVariationsExample />
          <Code language="javascript">{BadgeVariationsExampleSource}</Code>
        </div>
        <SectionTitle>Pills</SectionTitle>
        <div className="docs-example">
          <BadgePillsExample />
          <Code language="javascript">{BadgePillsExampleSource}</Code>
        </div>
        <SectionTitle>Links</SectionTitle>
        <p>Adding the <code>href</code> prop (without specifying a <code>tag</code> prop) will default the badge to a link.</p>
        <div className="docs-example">
          <BadgeLinksExample />
          <Code language="javascript">{BadgeLinksExampleSource}</Code>
        </div>
      </div>
    )
  }
}
