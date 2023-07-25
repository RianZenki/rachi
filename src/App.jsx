import classes from "./App.module.css";

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FunctionsSection } from "./components/FunctionalitiesSection";
import { AppSection } from "./components/AppSection";
import { PlansSection } from "./components/PlansSection";
import { Footer } from './components/Footer';
import { ContactSection } from "./components/ContactSection";

function App() {
	return (
		<div className={classes.container}>
			<Header />
			<HeroSection />
			<FunctionsSection />
			<AppSection />
			<PlansSection />
			<ContactSection />
			<Footer />
		</div>
	);
}

export default App;
