import * as styles from "./styles.scss";

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
	createStyle: Function
) => {
	return render`
		${createStyle(styles)}
		<nav class="navHeader">
		<ul class="navHeader__default">
				<li class="navHeader__links"><a href="/01site.01master.html"><span>Home</span></a></li>
				<li class="navHeader__links"><a href="/01site.02portfolio.html"><span>Portfolio</span></a></li>
				<li class="navHeader__links"><a href="/01site.03contact.html"><span>Contact</span></a></li>
			</ul>
		<div class="navHeader__menu--toggle"><span>Menu</span></div>
			<ul class="navHeader__menu">
				<li class="navHeader__links"><a href="/01site.01master.html"><span>Home</span></a></li>
				<li class="navHeader__links"><a href="/01site.01master.html#aboutMe"><span>About Me</span></a></li>
				<li class="navHeader__links"><a href="/01site.02portfolio.html"><span>Portfolio</span></a></li>
				<li class="navHeader__links"><a href="/01site.02portfolio.html#cg"><span>3D - Animation</span></a></li>
				<li class="navHeader__links"><a href="/01site.02portfolio.html#prog"><span>Programming</span></a></li>
				<li class="navHeader__links"><a href="/01site.03contact.html"><span>Contact</span></a></li>
			</ul>
		</nav>
    `;
};
