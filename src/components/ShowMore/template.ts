import * as styles from './styles.scss';

import { ShowMoreProps, ShowMoreState, ShowMoreMethods } from './defines';


export default (render: Function, data: ShowMoreProps & ShowMoreState & ShowMoreMethods , createStyle: Function) => {
    return render`
		${createStyle(styles)}
		<div class="showMore">
			<svg class="showMore__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
		</div>
    `;
}
