import * as styles from './styles.scss';

import { HeaderNavigationProps, HeaderNavigationState, HeaderNavigationMethods } from './defines';


export default (render: Function, data: HeaderNavigationProps & HeaderNavigationState & HeaderNavigationMethods , createStyle: Function) => {
    return render`
		${createStyle(styles)}
		<!-- <a> will be replaced by <a> component -->
		<nav class="navHeader">
			<ul class="navHeader__logo">
				<li class="navHeader__links"><a href="#">LINK NAME</a></li>
			</ul>
			<div class="navHeader__menuBtn">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
			</div>
			<ul class="navHeader__items">
				<li class="navHeader__links"><a href="#">LINK NAME</a></li>
				<li class="navHeader__links"><a href="#">LINK NAME</a></li>
			</ul>
		</nav>
    `;
}
