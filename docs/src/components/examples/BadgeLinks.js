import { h, Component } from 'preact'
import { Badge } from 'preact-bootstrap-ui'

export default class Example extends Component {
  render() {
    return (
      <div>
        <Badge href="#" color="primary">Primary</Badge>
        <Badge href="#" color="secondary">Secondary</Badge>
        <Badge href="#" color="success">Success</Badge>
        <Badge href="#" color="danger">Danger</Badge>
        <Badge href="#" color="warning">Warning</Badge>
        <Badge href="#" color="info">Info</Badge>
        <Badge href="#" color="light">Light</Badge>
        <Badge href="#" color="dark">Dark</Badge>
      </div>
    )
  }
}