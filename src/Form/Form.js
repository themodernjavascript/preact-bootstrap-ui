import { 
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import classNames from 'classnames'
import { mapToCssModules } from './../Utils'

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'form',
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.getRef = this.getRef.bind(this)
    this.submit = this.submit.bind(this)
  }

  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref)
    }
    this.ref = ref
  }

  submit() {
    if (this.ref) {
      this.ref.submit()
    }
  }

  render(props) {
    const {
      className,
      cssModule,
      inline,
      tag: Tag,
      innerRef,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      inline ? 'form-inline' : false
    ), cssModule)

    return (
      <Tag {...attributes} ref={innerRef} className={classes} />
    )
  }
}

Form.propTypes = propTypes
Form.defaultProps = defaultProps

export default Form