/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle';
import AlertExample from './../examples/Alert';

export default class AlertsPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Alerts" />
        <div className="docs-example">
          <AlertExample />
        </div>
      </div>
    )
  }
}
