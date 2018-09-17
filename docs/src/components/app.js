import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Footer from './footer'

// Code-splitting is automated for routes
import Home from '../routes/home'
import Alert from '../routes/alerts'
import Badge from '../routes/badge'
import Breadcrumbs from '../routes/breadcrumbs'
import Buttons from '../routes/buttons'
import Card from '../routes/card'
import Jumbotron from '../routes/jumbotron'
import Layout from '../routes/layout'
import ListGroup from '../routes/listgroup'
import Pagination from '../routes/pagination'
import Progress from '../routes/progress'
import Tables from '../routes/tables'
import Tabs from '../routes/tabs'
import Fade from '../routes/fade'

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url
	}

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Alert path="/components/alerts" />
					<Badge path="/components/badge" />
					<Breadcrumbs path="/components/breadcrumbs" />
					<Buttons path="/components/buttons" />
					<Card path="/components/card" />
					<Jumbotron path="/components/jumbotron" />
					<Layout path="/components/layout" />
					<ListGroup path="/components/listgroup" />
					<Pagination path="/components/pagination" />
					<Progress path="/components/progress" />
					<Tables path="/components/tables" />
					<Tabs path="/components/tabs" />
					<Fade path="/components/fade" />
				</Router>
				<Footer />
			</div>
		)
	}
}