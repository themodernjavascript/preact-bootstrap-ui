import { h, Component } from 'preact';
import { Button, ButtonGroup, ButtonToolbar } from 'preact-bootstrap-ui';

export default class Example extends Component {
  render() {
    return (
      <ButtonToolbar>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
}