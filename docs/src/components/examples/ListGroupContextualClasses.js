import { h, Component } from 'preact'
import { ListGroup, ListGroupItem } from 'preact-bootstrap-ui'

export default class Example extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem color="success">Cras justo odio</ListGroupItem>
        <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
        <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
      </ListGroup>
    )
  }
}