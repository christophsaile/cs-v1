import * as styles from "./styles.scss";

import {
	AccordionItemsProps,
	AccordionItemsState,
	AccordionItemsMethods
} from "./defines";

export const template = (
	render: Function,
	data: AccordionItemsProps & AccordionItemsState & AccordionItemsMethods,
	refs: any,
	createStyle: Function
) => {
	return render`
	${createStyle(styles)}
	<header class="accordion__header" ref=${refs.accordionHeaderRef}>
		<span class="accordion__icon"></span>
		<heading-comp no-margin type="h4" data-resources="[{paths: ['components/HeadingComp/index.js']}]">
			<slot name="heading"></slot>
		</heading-comp>
	</header>
	<div class="accordion__body" ref=${refs.accordionBodyRef}>
		<slot name="text"></slot>
	</div>
  `;
};
