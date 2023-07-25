import classes from "./ContactSection.module.css";

export const ContactSection = () => {
	return (
		<section className={classes["contact-section"]} id="contact">
			<h2>Contato</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
				lacinia mi quis euismod ultrices.
			</p>

			<form className={classes["contact-form"]}>
				<input type="email" id="email" placeholder="Seu melhor e-mail" />

				<button type="button">Enviar</button>
			</form>
		</section>
	);
};
