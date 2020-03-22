import Component, { createRef } from "@biotope/element";
import template from "./template";
import * as ScrollMagic from "scrollmagic";
import { debounce } from "../../resources/js/debounce";

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
		menuToggleRef: createRef<HTMLElement>(),
		listRef: createRef<HTMLElement>()
	};

	ready() {
		this.changeColor();

		this.refs.menuToggleRef.current.addEventListener(
			"click",
			this.toggleMenuBtn,
			false
		);

		this.refs.listRef.current.addEventListener(
			"click",
			this.closeMenu,
			false
		);
	}

	public toggleMenuBtn = () => {
		this.setState({
			menuOpen: !this.state.menuOpen,
			active: !this.state.active
		});
		this.emit("isNavOpen", this.state.active);
	};

	public closeMenu = () => {
		this.setState({
			menuOpen: false,
			active: false
		});
		this.emit("isNavOpen", this.state.active);
	};

	public changeColor = () => {
		let controller = new ScrollMagic.Controller();
		let scene = null;
		const colorChangeSections = document.querySelectorAll(
			".colorChangeSection"
		);

		if (window.innerWidth < 768) {
			colorChangeSections.forEach(section => {
				scene = new ScrollMagic.Scene({
					triggerElement: section,
					triggerHook: 0.05,
					duration: "100%"
				})
					.setClassToggle(
						this.refs.menuToggleRef.current,
						"changeColorScroll"
					)
					.addTo(controller);
			});
		}

		window.addEventListener(
			"resize",
			debounce(() => {
				if (window.innerWidth >= 768) {
					if (scene) {
						scene.destroy(true);
						scene = null;
						controller.destroy(true);
						controller = null;
					}
				} else {
					if (!controller) {
						controller = new ScrollMagic.Controller();
					}
					colorChangeSections.forEach(section => {
						scene = new ScrollMagic.Scene({
							triggerElement: section,
							triggerHook: 0.05,
							duration: "100%"
						})
							.setClassToggle(
								this.refs.menuToggleRef.current,
								"changeColorScroll"
							)
							.addTo(controller);
					});
				}
			}, 250)
		);
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
