import * as styles from "./styles.scss";
import cn from "classnames";

import {
	PortfolioHeaderNavProps,
	PortfolioHeaderNavState,
	PortfolioHeaderNavMethods
} from "./defines";

export default (
	render: Function,
	data: PortfolioHeaderNavProps &
		PortfolioHeaderNavState &
		PortfolioHeaderNavMethods,
	refs: any,
	createStyle: Function
) => {
	const menuOpen = cn("navHeader", {
		"menuOpen": data.menuOpen
	});
	const menuClasses = cn("navHeader__menu", { active: data.active });

	return render`
		${createStyle(styles)}

		<nav class=${menuOpen}>
		<div class="navHeader__menu--toggle" ref=${refs.menuToggleRef}><span>Menu</span></div>
		<div class=${menuClasses} ref=${refs.menuRef}>	
			<ul ref=${refs.listRef}>
				<li class="navHeader__links"><a href="#"><span>Home</span></a></li>
				<li class="navHeader__links"><a href="#aboutMe"><span>About Me</span></a></li>
				<li class="navHeader__links"><a href="#timeline"><span>Timeline</span></a></li>
				<li class="navHeader__links"><a href="#contact"><span>Contact</span></a></li>
				<li class="navHeader__links"><a href="#credits"><span>Credits</span></a></li>
			</ul>
		</div>
		</nav>
    `;
};
