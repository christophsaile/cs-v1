import * as styles from './styles.scss';

import { HeaderNavigationProps, HeaderNavigationState, HeaderNavigationMethods } from './defines';


export default (render: Function, data: HeaderNavigationProps & HeaderNavigationState & HeaderNavigationMethods , createStyle: Function) => {
    return render`
		${createStyle(styles)}
		<!-- <a> will be replaced by <a> component -->
		<nav class="navHeader">
		<div class="navHeader__menu--toggle"><span>Menu</span></div>
			<ul class="navHeader__menu">
				<li class="navHeader__links"><a href="/01site.01master.html"><span>Home</span></a></li>
				<li class="navHeader__links"><a href="/01site.02portfolio.html"><span>Portfolio</span></a></li>
				<li class="navHeader__links"><a href="/01site.03contact.html"><span>Contact</span></a></li>
				<li class="navHeader__links"><a href="#"><span>Impressum</span></a></li>
			</ul>
		</nav>
    `;
}
