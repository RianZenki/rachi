import classes from "./PlansSection.module.css";

export const PlansSection = () => {
	return (
		<section className={classes["plans-section"]} id="plans">
			<div className={classes["plans-section-info"]}>
				<h2>Nossos Planos</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					lacinia mi quis euismod ultrices.
				</p>
			</div>

			<div className={classes["plans-list"]}>
				<div className={classes["plans-item"]}>
					<h3>Bronze</h3>
					<p className={classes["plans-item-price"]}>
						<span className={classes.currency}>R$</span>
						<span className={classes.value}>28</span>
						<span className={classes.month}>/mês</span>
					</p>
					<p className={classes["plans-item-info"]}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						lacinia mi quis euismod ultrices.
					</p>
					<button>Assinar</button>
				</div>

				<div className={classes["plans-item"]}>
					<h3>Prata</h3>
					<p className={classes.preferred}>P R E F E R I D O</p>
					<p className={classes["plans-item-price"]}>
						<span className={classes.currency}>R$</span>
						<span className={classes.value}>57</span>
						<span className={classes.month}>/mês</span>
					</p>
					<p className={classes["plans-item-info"]}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						lacinia mi quis euismod ultrices.
					</p>
					<button>Assinar</button>
				</div>

				<div className={classes["plans-item"]}>
					<h3>Ouro</h3>
					<p className={classes["plans-item-price"]}>
						<span className={classes.currency}>R$</span>
						<span className={classes.value}>94</span>
						<span className={classes.month}>/mês</span>
					</p>
					<p className={classes["plans-item-info"]}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						lacinia mi quis euismod ultrices.
					</p>
					<button>Assinar</button>
				</div>
			</div>
		</section>
	);
};
