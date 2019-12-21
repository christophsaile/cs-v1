import * as styles from './styles.scss';

import { HeaderNavigationProps, HeaderNavigationState, HeaderNavigationMethods } from './defines';


export default (render: Function, data: HeaderNavigationProps & HeaderNavigationState & HeaderNavigationMethods , createStyle: Function) => {
    return render`
		${createStyle(styles)}
		<!-- <a> will be replaced by <a> component -->
		<nav class="navHeader">
		<div class="navHeader__menu-toggle"><span>Menu</span></div>
			<ul class="navHeader__menu">
				<li class="navHeader__links"><a href="#"><span>Home</span></a></li>
				<li class="navHeader__links"><a href="#"><span>Learn More</span></a></li>
				<li class="navHeader__links"><a href="#"><span>Get Involved</span></a></li>
				<li class="navHeader__links"><a href="#"><span>Have Some Fun</span></a></li>
				<li class="navHeader__links"><a href="#"><span>Don't Miss Out</span></a></li>
				<li class="navHeader__links"><a href="#"><span>Get The Gear</span></a></li>
			</ul>
		</nav>
    `;
}
