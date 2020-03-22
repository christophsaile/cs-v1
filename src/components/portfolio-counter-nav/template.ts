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
			<ul ref=${refs.counterRef} class="counter__container ${data.menuOpen ? 'menuOpen': ''}">
				<li class="counter__item"> 
					<a ref=${refs.counterFirstItemRef} class="counter__link counter__link--active">01</a>
				</li>
				<li class="counter__item">
					<a ref=${refs.counterLastItemRef} class="counter__link" href="#contact">04</a>
				</li>
			</ul>
		</nav>
    `;
};
