import * as styles from "./styles.scss";
import cn from "classnames";

import {
	AccordionItemsProps,
	AccordionItemsState,
	AccordionItemsMethods
} from "./defines";

export default (
	render: Function,
	data: AccordionItemsProps & AccordionItemsState & AccordionItemsMethods,
	refs: any,
	createStyle: Function
) => {
	const showHideBody = cn("accordion__header", {
		"closed": data.isOpen
	});

	return render`
	${createStyle(styles)}
	<article class=${`accordion__item ${data.modifier}`} >
		<header class=${showHideBody} ref=${refs.accordionHeaderRef}>
			<span class="accordion__icon"></span>
			<heading-comp no-margin type="h4" data-resources="[{paths: ['components/HeadingComp/index.js']}]">
				<slot name="heading"></slot>
			</heading-comp>
		</header>
		<div class="accordion__body" ref=${refs.accordionBodyRef}>
			<slot name="text"></slot>
		</div>
	</article>
  `;
};
