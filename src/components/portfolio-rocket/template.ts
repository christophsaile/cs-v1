import * as styles from "./styles.scss";

import {
	PortfolioRocketProps,
	PortfolioRocketState,
	PortfolioRocketMethods
} from "./defines";

export default (
	render: Function,
	data: PortfolioRocketProps & PortfolioRocketState & PortfolioRocketMethods,
	refs: any,
	createStyle: Function
) => {
	return render`
		${createStyle(styles)}
		<div class="rocket">
			<span class="rocket__text">Fly back<br>to the top</span>
			<a class="rocket__link" href="#">
				<img class="rocket__icon" ref=${refs.rocketIconRef} src="_assets/rocket.svg" alt="Rocket">
			</a>
		</div>
    `;
};
