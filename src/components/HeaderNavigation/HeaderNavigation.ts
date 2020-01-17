import Component, { createRef } from "@biotope/element";
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

	private refs = {
		menuRef: createRef<HTMLElement>(),
		menuBtnRef: createRef<HTMLElement>()
	};
	rendered() {
		this.refs.menuBtnRef.current.addEventListener(
			"click",
			this.toggleMenuBtn,
			false
		);
		this.refs.menuBtnRef.current.addEventListener(
			"click",
			this.toggleMenu,
			false
		);
	}
	public toggleMenuBtn = () => {
		this.setState({
			menuOpen: !this.state.menuOpen
		});
	};
	public toggleMenu = () => {
		this.setState({
			active: !this.state.active
		});
	};

	get defaultState() {
		return {
			menuOpen: false,
			active: false
		};
	}

	get defaultProps() {
		return {};
	}

	render() {
		return template(
			this.html,
			{ ...this.props, ...this.state, ...this.methods },
			this.refs,
			this.createStyle
		);
	}
}

export default HeaderNavigation;
