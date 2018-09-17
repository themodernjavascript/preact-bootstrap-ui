import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import SectionTitle from './../common/SectionTitle'
import 'prismjs/themes/prism-twilight.css'
import Code from 'preact-prism'

import FadeExample from './../examples/Fade'
const FadeExampleSource = require('!!raw-loader!./../examples/Fade')

const properties = `Fade.propTypes = {
    // Controls if the fade is currently showing or not (default: true)
    in: PropTypes.bool, 

    // All of these match react-transition-group/Transition props
    mountOnEnter: PropTypes.bool,
    unmountOnExit: PropTypes.bool,
    appear: PropTypes.bool, // (default: true)
    enter: PropTypes.bool,  // (default: true)
    exit: PropTypes.bool,   // (default: true)
    timeout: PropTypes.oneOfType([ // (default: 150)
        PropTypes.number,
        PropTypes.shape({
            enter: PropTypes.number,
            exit: PropTypes.number,
        }).isRequired,
    ]),
    addEndListener: PropTypes.func,
    onEnter: PropTypes.func,
    onEntering: PropTypes.func,
    onEntered: PropTypes.func,
    onExit: PropTypes.func,
    onExiting: PropTypes.func,
    onExited: PropTypes.func,

    // The component(s) that should be faded
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    // Pass in a component or primitive component name to override the default element
    // (default: 'div')
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    // Class always applied to the Fade element (default: 'fade')
    baseClass: PropTypes.string,
    // Class applied to transition the Fade element in (default: 'show')
    baseClassActive: PropTypes.string,
    // Other classes that should always be applied
    className: PropTypes.string,
    cssModule: PropTypes.object,

    // Any other props provided will be applied to the element created (specified by tag)
}`

export default class FadePage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Fade" />
         <div className="docs-example">
          <FadeExample />
          <Code language="javascript">{FadeExampleSource}</Code>
        </div>
        <SectionTitle>Properties</SectionTitle>
        <Code language="javascript">{properties}</Code>
      </div>
    )
  }
}
