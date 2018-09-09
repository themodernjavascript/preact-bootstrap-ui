import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style'

const Header = () => (
	<header class={style.header}>
		<h1>Preact Bootstrap UI</h1>
		<nav>
			<Link activeClassName={style.active} href="/components/alerts">Components</Link>
			<Link activeClassName={style.active} href="/utilities">Utilities</Link>
      <a href="https://github.com/themodernjavascript/preact-bootstrap-ui">GitHub</a>
		</nav>
	</header>
)

export default Header