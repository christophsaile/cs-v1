import * as styles from './styles.scss';

import { AccordionItemsProps, AccordionItemsState, AccordionItemsMethods } from './defines';


export const template = (render: Function, data: AccordionItemsProps & AccordionItemsState & AccordionItemsMethods , createStyle: Function) => {
  return render`
	<header class="accordion__header" ref=${this.refs.accordionHeaderRef}>
		<span class="accordion__icon"></span>
		<heading-comp no-margin type="h4" data-resources="[{paths: ['components/HeadingComp/index.js']}]">
			<slot name="heading"></slot>
		</heading-comp>
	</header>
	<div class="accordion__body">
		<slot name="text"></slot>
	</div>
    ${createStyle(styles)}
  `;
}
