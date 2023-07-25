import classes from "./Header.module.css";

import logo from "../assets/image/logo.svg";

export const Header = () => {
	return (
		<header className={classes.header}>
			<img src={logo} alt="Logo" />

			<nav className={classes.nav}>
				<ul>
					<li>
						<a href="#functionalities">Funcionalidades</a>
					</li>
					<li>
						<a href="#app">App</a>
					</li>
					<li>
						<a href="#plans">Planos</a>
					</li>
					<li>
						<a href="#contact">Contato</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
