import * as styles from "./styles.scss";
import cn from "classnames";

import {
	HeaderNavigationProps,
	HeaderNavigationState,
	HeaderNavigationMethods
} from "./defines";

export default (
	render: Function,
	data: HeaderNavigationProps &
		HeaderNavigationState &
		HeaderNavigationMethods,
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
  				<li class="navHeader__links"><a href="https://christoph-saile.netlify.com/"><span>Home</span></a></li>
				<li class="navHeader__links"><a href="https://christoph-saile.netlify.com/#aboutMe"><span>About Me</span></a></li>
				<li class="navHeader__links"><a href="https://christoph-saile.netlify.com/portfolio.html"><span>Portfolio</span></a></li>
				<li class="navHeader__links"><a href="https://christoph-saile.netlify.com/portfolio.html#cg"><span>3D - Animation</span></a></li>
				<li class="navHeader__links"><a href="https://christoph-saile.netlify.com/portfolio.html#prog"><span>Programming</span></a></li>
				<li class="navHeader__links"><a href="https://christoph-saile.netlify.com/contact.html"><span>Contact</span></a></li>
			</ul>
		</nav>
    `;
};
