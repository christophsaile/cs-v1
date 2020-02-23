import Component, { createRef } from "@biotope/element";
import template from "./template";

import {
	PortfolioHeaderNavProps,
	PortfolioHeaderNavState,
	PortfolioHeaderNavMethods
} from "./defines";

class PortfolioHeaderNav extends Component<
	PortfolioHeaderNavProps,
	PortfolioHeaderNavState
> {
	static componentName = "portfolio-header-nav";

	static attributes = [];

	public methods: PortfolioHeaderNavMethods = {};

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

export default PortfolioHeaderNav;
