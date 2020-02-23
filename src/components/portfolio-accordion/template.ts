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
			<slot />
		</div>
    `;
};
