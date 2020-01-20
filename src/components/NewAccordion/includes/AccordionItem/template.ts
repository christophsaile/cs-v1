import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { AccordionItemProps, AccordionItemState, AccordionItemMethods } from './defines';


export const template = ( data: AccordionItemProps & AccordionItemState & AccordionItemMethods ): HTMLFragment => {
  return html`
	<header class="accordion__header">
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
