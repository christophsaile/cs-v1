import * as styles from "./styles.scss";

import { ShowMoreProps, ShowMoreState, ShowMoreMethods } from "./defines";

export default (
	render: Function,
	data: ShowMoreProps & ShowMoreState & ShowMoreMethods,
	createStyle: Function
) => {
	return render`
		${createStyle(styles)}
		<div class="showMore">
				<svg  class="showMore__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/>
				</svg>
				<span class="showMore__text">Learn more</span>
		</div>
    `;
};
