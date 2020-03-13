import { html, createStyle, HTMLFragment } from "@biotope/element";
import * as styles from "./styles.scss";

import {
	PortfolioNavigationProps,
	PortfolioNavigationState,
	PortfolioNavigationMethods
} from "./defines";

export const template = (
	data: PortfolioNavigationProps &
		PortfolioNavigationState &
		PortfolioNavigationMethods,
	refs: any
): HTMLFragment => {
	return html`
		<div class="navigation" ref=${refs.navRef}>
			<portfolio-header-nav></portfolio-header-nav>
			<portfolio-counter-nav
				ref=${refs.counterRef}
			></portfolio-counter-nav>
			<portfolio-arrow-nav ref=${refs.arrowRef} text="Show More"></portfolio-arrow-nav>
		</div>
		${createStyle(styles)}
	`;
};
