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
	const menuBtnClasses = cn("navHeader__menu--toggle", {
		"menu-open": data.menuOpen
	});
	const menuClasses = cn("navHeader__menu", { active: data.active });

	return render`
		${createStyle(styles)}
		<!-- <a> will be replaced by <a> component -->
		<nav class="navHeader"}>
		<div class=${menuBtnClasses} ref=${refs.menuBtnRef}><span>Menu</span></div>
			<ul class=${menuClasses} ref=${refs.menuRef}>
				<li class="navHeader__links"><a href="/#"><span>Home</span></a></li>
				<li class="navHeader__links"><a href="/#aboutMe"><span>About Me</span></a></li>
				<li class="navHeader__links"><a href="/#timeline"><span>Timeline</span></a></li>
				<li class="navHeader__links"><a href="/#contact"><span>Contact</span></a></li>
				<li class="navHeader__links"><a href="/#credits"><span>Credits</span></a></li>
			</ul>
		</nav>
    `;
};
