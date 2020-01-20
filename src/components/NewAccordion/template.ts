import * as styles from "./styles.scss";

import {
	NewAccordionProps,
	NewAccordionState,
	NewAccordionMethods
} from "./defines";

export default (
	render: Function,
	data: NewAccordionProps & NewAccordionState & NewAccordionMethods,
	createStyle: Function
) => {
	return render`
		${createStyle(styles)}
		<section class=${`accordion ${data.modifier}`}>
			<slot />
		</section>
    `;
};
