import userIcon from "../assets/image/user.svg";
import securityIcon from "../assets/image/security.svg";
import smileIcon from "../assets/image/happy.svg";

import classes from "./functionalitiesSection.module.css";

export const FunctionsSection = () => {
	return (
		<section
			className={classes["functionalities-section"]}
			id="functionalities"
		>
			<h2>Como funciona</h2>

			<div className={classes["functionalities-list"]}>
				<div className={classes["functionalities-item"]}>
					<img src={userIcon} alt="User Icon" />
					<h3>Crie conexões</h3>
					<p>Lorem ipsum dolor sit amet, consecteteu.</p>
				</div>

				<div className={classes["functionalities-item"]}>
					<img src={securityIcon} alt="Security Icon" />
					<h3>100% gratuito</h3>
					<p>Lorem ipsum dolor sit amet, consecteteu.</p>
				</div>

				<div className={classes["functionalities-item"]}>
					<img src={smileIcon} alt="Smile Icon" />
					<h3>Compartilhamento</h3>
					<p>Lorem ipsum dolor sit amet, consecteteu.</p>
				</div>
			</div>
		</section>
	);
};
