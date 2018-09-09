import { h, Component } from 'preact'
import { Badge, Button } from 'preact-bootstrap-ui'

export default class Example extends Component {
  render() {
    return (
      <div>
        <Button color="primary" outline>
          Notifications <Badge color="secondary">4</Badge>
        </Button>
      </div>
    )
  }
}
