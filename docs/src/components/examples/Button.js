import { h, Component } from 'preact'
import { Button } from 'preact-bootstrap-ui'

export default class Example extends Component {
  render() {
    return (
      <div>
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>
    )
  }
}