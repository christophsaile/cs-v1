import * as styles from "./styles.scss";

import {
	PortfolioAccordionVerticalProps,
	PortfolioAccordionVerticalState,
	PortfolioAccordionVerticalMethods
} from "./defines";

export default (
	render: Function,
	data: PortfolioAccordionVerticalProps & PortfolioAccordionVerticalState & PortfolioAccordionVerticalMethods,
	createStyle: Function
) => {
	return render`
        ${createStyle(styles)}
		<section class="accordion">
		</section>
    `;
};
