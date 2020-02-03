import * as styles from "./styles.scss";

import {
	PageCounterProps,
	PageCounterState,
	PageCounterMethods
} from "./defines";

export default (
	render: Function,
	data: PageCounterProps & PageCounterState & PageCounterMethods,
	refs: any,
	createStyle: Function
) => {
	return render`
		${createStyle(styles)}
		<nav class="counter" ref=${refs.counterRef}>
			<ul class="counter__container" ref=${refs.counterContainerRef}>
				<li class="counter__item"> 
					<a class="counter__link counter__link--active" href=${data.firstAnchor}>01</a>
				</li>
				<li class="counter__item">
					<a class="counter__link" href=${data.secondAnchor}>02</a>
				</li>
			</ul>
		</nav>
    `;
};
