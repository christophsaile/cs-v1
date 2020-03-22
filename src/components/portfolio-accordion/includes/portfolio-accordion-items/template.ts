import * as styles from "./styles.scss";

import {
	PortfolioAccordionItemsProps,
	PortfolioAccordionItemsState,
	PortfolioAccordionItemsMethods
} from "./defines";

export default (
	render: Function,
	data: PortfolioAccordionItemsProps & PortfolioAccordionItemsState & PortfolioAccordionItemsMethods,
	refs: any,
	createStyle: Function
) => {

	return render`
	${createStyle(styles)}
	<article class=accordion__item>
		<header class="accordion__header ${data.isOpen ? '' : 'closed'}" ref=${refs.accordionHeaderRef}>
			<span class="accordion__icon"></span>
			<portfolio-headline half type="h2" data-resources="[{paths: ['components/PortfolioHeadline/index.js']}]">
				<slot name="heading"></slot>
			</portfolio-headline>
		</header>
		<div class="accordion__body" ref=${refs.accordionBodyRef}>
			<slot name="text"></slot>
		</div>
	</article>
	`;
};
