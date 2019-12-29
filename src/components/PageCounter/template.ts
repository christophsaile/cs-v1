import * as styles from "./styles.scss";

import {
	PageCounterProps,
	PageCounterState,
	PageCounterMethods
} from "./defines";

export default (
	render: Function,
	data: PageCounterProps & PageCounterState & PageCounterMethods,
	createStyle: Function
) => {
	return render`
		${createStyle(styles)}
		<nav class="counter">
			<ul class="counter__container">
				<li class="counter__item"> 
					<a class="counter__link counter__link--active" href="#">01</a>
				</li>
				<li class="counter__item">
					<a class="counter__link" href="#aboutMe">02</a>
				</li>
			</ul>
		</nav>
    `;
};
