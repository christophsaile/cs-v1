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

	public navHeaderItems: HTMLElement;
	public navHeaderMenuBtn: HTMLElement;

	connectedCallback() {
		this.navHeaderItems = this.shadowRoot.querySelector(
			".navHeader__items"
		);
		this.navHeaderMenuBtn = this.shadowRoot.querySelector(
			".navHeader__menuBtn"
		);
		this.navHeaderMenuBtn.addEventListener("click", () => {
			this.navHeaderItems.classList.toggle("navHeader__items--show");
		});
	}

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
