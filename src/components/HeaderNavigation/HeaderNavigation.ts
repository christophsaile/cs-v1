import Component from "@biotope/element";
import template from "./template";

import {
	HeaderNavigationProps,
	HeaderNavigationState,
	HeaderNavigationMethods
} from "./defines";

class HeaderNavigation extends Component<
	HeaderNavigationProps,
	HeaderNavigationState
> {
	static componentName = "header-navigation";

	static attributes = [];

	public methods: HeaderNavigationMethods = {};

	public menu: HTMLElement;
	public menuBtn: HTMLElement;

	connectedCallback() {
		this.menu = this.shadowRoot.querySelector(".navHeader__menu");
		this.menuBtn = this.shadowRoot.querySelector(".navHeader__menu--toggle");

		this.menuBtn.addEventListener("click", this.toggleMenuBtn, false);
		this.menuBtn.addEventListener("click", this.toggleMenu, false);
	}
	public toggleMenuBtn = () => {
		this.menuBtn.classList.toggle("menu-open");
	};
	public toggleMenu = () => {
		this.menu.classList.toggle("active");
	};

	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {};
	}

	render() {
		return template(
			this.html,
			{ ...this.props, ...this.state, ...this.methods },
			this.createStyle
		);
	}
}

export default HeaderNavigation;
