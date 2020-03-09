import * as styles from "./styles.scss";

import {
	PortfolioAccordionProps,
	PortfolioAccordionState,
	PortfolioAccordionMethods
} from "./defines";

export default (
	render: Function,
	data: PortfolioAccordionProps & PortfolioAccordionState & PortfolioAccordionMethods,
	createStyle: Function
) => {
	return render`
		${createStyle(styles)}
		<div class="accordion">
			<portfolio-headline type="h2" half-inline vertical data-resources="[{paths: ['components/portfolio-headline/index.js']}]">
				contact me
			</portfolio-headline>
			<div class="accordion__items">
				<slot />
			</div>
		</div>
    `;
};
