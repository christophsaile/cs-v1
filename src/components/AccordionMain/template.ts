import * as styles from "./styles.scss";

import {
	AccordionMainProps,
	AccordionMainState,
	AccordionMainMethods
} from "./defines";

export default (
	render: Function,
	data: AccordionMainProps & AccordionMainState & AccordionMainMethods,
	createStyle: Function
) => {
	return render`
        ${createStyle(styles)}
		<section class="accordion">
			<div class="accordion__item expand">1</div>
			<div class="accordion__item">2</div>
			<div class="accordion__item">3</div>
			<div class="accordion__item">4</div>
			<div class="accordion__item">5</div>
		</section>
    `;
};
