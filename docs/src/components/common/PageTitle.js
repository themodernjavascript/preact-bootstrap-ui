import { h, Component} from 'preact'

function PageTitle({ title, ...props }) {
  return (
    <h2 {...props} className="h3">{title}</h2>
  )
}

export default PageTitle
