import { h, Component } from 'preact'
import { ListGroup, ListGroupItem, Badge } from 'preact-bootstrap-ui'

export default class Example extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
      </ListGroup>
    )
  }
}