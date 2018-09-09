import { h, Component } from 'preact'
import PropTypes from 'prop-types'

function SectionTitle({ children, ...props }) {
  return <h3 {...props}>{children}</h3>
}

export default SectionTitle
