import { h, Component } from 'preact';
import { Button, ButtonGroup } from 'preact-bootstrap-ui';

export default class Example extends Component {
  render() {
    return (
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    );
  }
}