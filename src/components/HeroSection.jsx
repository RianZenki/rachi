import image from "../assets/image/illustration1.svg";

import classes from "./HeroSection.module.css";

export const HeroSection = () => {
	return (
		<section className={classes["hero-section"]}>
			<div className={classes["hero-left"]}>
				<h1>
					Rachi,
					<span>é tudo que você</span>
					<span>precisa em um só lugar.</span>
				</h1>
				<button>Cadastrar-se</button>
			</div>
			<img src={image} alt="Man using a notebook" />
		</section>
	);
};
