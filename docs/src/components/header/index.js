import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style'

const Header = () => (
	<header class={style.header}>
		<h1>Preact Bootstrap UI</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Components</Link>
			<Link activeClassName={style.active} href="/profile">Utilities</Link>
			<Link activeClassName={style.active} href="/profile">GitHub</Link>
		</nav>
	</header>
)

export default Header