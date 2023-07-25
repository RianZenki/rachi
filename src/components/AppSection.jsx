import appStore from "../assets/image/app-store.svg";
import googlePlay from "../assets/image/google-play.svg";
import image from "../assets/image/illustration2.svg";

import classes from "./AppSection.module.css";

export const AppSection = () => {
	return (
		<section className={classes["app-section"]} id="app">
			<div className={classes["app-section-info"]}>
				<h2>Baixe nosso app para desfrutar mais!</h2>
				<p>
					Amet in elementum nulla scelerisque dui, egestas at. Elit
					consectetur turpis elementum amet vitae et etiam nec. Varius
					volutpat hac adipiscing tincidunt pretium.
				</p>
				<div className={classes["store-buttons"]}>
					<a>
						<img src={googlePlay} alt="Google Play" />
					</a>
					<a>
						<img src={appStore} alt="App Store" />
					</a>
				</div>
			</div>

			<img src={image} alt="Man using a smartphone" />
		</section>
	);
};
