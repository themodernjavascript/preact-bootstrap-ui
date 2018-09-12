/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import Code from 'preact-prism'
import SectionTitle from './../common/SectionTitle'

import CardExample from './../examples/Card'
const CardExampleSource = require('!!raw-loader!../examples/Card')

import CardContentExample from './../examples/CardContentTypes'
const CardContentExampleSource = require('!!raw-loader!./../examples/CardContentTypes')

import CardSizingExample from './../examples/CardSizing'
const CardSizingExampleSource = require('!!raw-loader!./../examples/CardSizing')

import CardAlignmentExample from './../examples/CardAlignment'
const CardAlignmentExampleSource = require('!!raw-loader!./../examples/CardAlignment')

import CardHeaderFooterExample from './../examples/CardHeaderFooter'
const CardHeaderFooterExampleSource = require('!!raw-loader!./../examples/CardHeaderFooter')

import CardImageCapsExample from './../examples/CardImageCaps'
const CardImageCapsExampleSource = require('!!raw-loader!./../examples/CardImageCaps')

import CardImageOverlayExample from './../examples/CardImageOverlay'
const CardImageOverlayExampleSource = require('!!raw-loader!./../examples/CardImageOverlay')

import CardBackgroundsExample from './../examples/CardBackgrounds'
const CardBackgroundsExampleSource = require('!!raw-loader!./../examples/CardBackgrounds')

import CardOutlineExample from './../examples/CardOutline'
const CardOutlineExampleSource = require('!!raw-loader!./../examples/CardOutline')

import CardGroupsExample from './../examples/CardGroups'
const CardGroupsExampleSource = require('!!raw-loader!./../examples/CardGroups')

import CardDecksExample from './../examples/CardDecks'
const CardDecksExampleSource = require('!!raw-loader!./../examples/CardDecks')

import CardColumnsExample from './../examples/CardColumns'
const CardColumnsExampleSource = require('!!raw-loader!./../examples/CardColumns')

const properties = `Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string
};

CardBody.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardColumns.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardDeck.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardFooter.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardGroup.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardHeader.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardImg.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: PropTypes.bool,
  bottom: PropTypes.bool
};

CardImgOverlay.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardLink.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // ref will only get you a reference to the CardLink component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardSubtitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardText.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};`

export default class CardPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Card" />
        <hr />
        <div className="docs-example">
          <CardExample />
          <Code language="javascript">{CardExampleSource}</Code>
        </div>
        <h4>Properties</h4>
        <Code language="javascript">{properties}</Code>
        <SectionTitle>Content Types</SectionTitle>
        <div className="docs-example">
          <CardContentExample />
          <Code language="javascript">{CardContentExampleSource}</Code>
        </div>
        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <CardSizingExample />
          <Code language="javascript">{CardSizingExampleSource}</Code>
        </div>
        <SectionTitle>Text alignment</SectionTitle>
        <div className="docs-example">
          <CardAlignmentExample />
          <Code language="javascript">{CardAlignmentExampleSource}</Code>
        </div>
        <SectionTitle>Header and Footer</SectionTitle>
        <div className="docs-example">
          <CardHeaderFooterExample />
          <Code language="javascript">{CardHeaderFooterExampleSource}</Code>
        </div>
        <SectionTitle>Image caps</SectionTitle>
        <div className="docs-example">
          <CardImageCapsExample />
          <Code language="javascript">{CardImageCapsExampleSource}</Code>
        </div>
        <SectionTitle>Image overlays</SectionTitle>
        <div className="docs-example">
          <CardImageOverlayExample />
          <Code language="javascript">{CardImageOverlayExampleSource}</Code>
        </div>
        <SectionTitle>Background variants</SectionTitle>
        <div className="docs-example">
          <CardBackgroundsExample />
          <Code language="javascript">{CardBackgroundsExampleSource}</Code>
        </div>
        <SectionTitle>Outline variants</SectionTitle>
        <div className="docs-example">
          <CardOutlineExample />
          <Code language="javascript">{CardOutlineExampleSource}</Code>
        </div>
        <SectionTitle>Groups</SectionTitle>
        <div className="docs-example">
          <CardGroupsExample />
          <Code language="javascript">{CardGroupsExampleSource}</Code>
        </div>
        <SectionTitle>Decks</SectionTitle>
        <div className="docs-example">
          <CardDecksExample />
          <Code language="javascript">{CardDecksExampleSource}</Code>
        </div>
        <SectionTitle>Columns</SectionTitle>
        <div className="docs-example">
          <CardColumnsExample />
          <Code language="javascript">{CardColumnsExampleSource}</Code>
        </div>
      </div>
    )
  }
}
