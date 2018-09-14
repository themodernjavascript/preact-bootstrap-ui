import { h, Component } from 'preact'
import { ListGroup, ListGroupItem, Badge } from 'preact-bootstrap-ui'

export default class Example extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
      </ListGroup>
    )
  }
}