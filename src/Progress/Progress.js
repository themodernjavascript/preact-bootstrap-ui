import { 
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import classNames from 'classnames'
import { mapToCssModules } from './../Utils'
import toNumber from 'lodash.tonumber'

const propTypes = {
  children: PropTypes.node,
  bar: PropTypes.bool,
  multi: PropTypes.bool,
  tag: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  max: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  barClassName: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'div',
  value: 0,
  max: 100,
}

class Progress extends Component {
  render(props) {
    const {
      children,
      className,
      barClassName,
      cssModule,
      value,
      max,
      animated,
      striped,
      color,
      bar,
      multi,
      tag: Tag,
      ...attributes
    } = props

    const percent = ((toNumber(value) / toNumber(max)) * 100)

    const progressClasses = mapToCssModules(classNames(
      className,
      'progress'
    ), cssModule)

    const progressBarClasses = mapToCssModules(classNames(
      'progress-bar',
      bar ? className || barClassName : barClassName,
      animated ? 'progress-bar-animated' : null,
      color ? `bg-${color}` : null,
      striped || animated ? 'progress-bar-striped' : null
    ), cssModule)

    const ProgressBar = multi ? children : (
      <div
        className={progressBarClasses}
        style={{ width: `${percent}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax={max}
        children={children}
      />
    )

    if (bar) {
      return ProgressBar
    }

    return (
      <Tag {...attributes} className={progressClasses} children={ProgressBar} />
    )
  }
}

Progress.propTypes = propTypes
Progress.defaultProps = defaultProps

export default Progress