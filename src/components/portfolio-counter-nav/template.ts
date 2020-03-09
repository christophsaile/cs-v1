import * as styles from "./styles.scss";

import {
	PortfolioCounterNavProps,
	PortfolioCounterNavState,
	PortfolioCounterNavMethods
} from "./defines";

export default (
	render: Function,
	data: PortfolioCounterNavProps & PortfolioCounterNavState & PortfolioCounterNavMethods,
	refs: any,
	createStyle: Function
) => {
	return render`
		${createStyle(styles)}
		<nav class="counter">
			<ul class="counter__container">
				<li class="counter__item"> 
					<a class="counter__link counter__link--active" ref=${refs.counterRef}>01</a>
				</li>
				<li class="counter__item">
					<a class="counter__link" href="#contact">04</a>
				</li>
			</ul>
		</nav>
    `;
};
