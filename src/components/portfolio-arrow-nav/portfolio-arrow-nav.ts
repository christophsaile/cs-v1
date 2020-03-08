import Component, { createRef } from "@biotope/element";
import template from "./template";
import * as ScrollMagic from "scrollmagic";

import { PortfolioArrowNavProps, PortfolioArrowNavState, PortfolioArrowNavMethods } from "./defines";

class PortfolioArrowNav extends Component<PortfolioArrowNavProps, PortfolioArrowNavState> {
	static componentName = "portfolio-arrow-nav";

	static attributes = ["text"];

	public methods: PortfolioArrowNavMethods = {};

	private refs = {
		showMoreRef: createRef<HTMLElement>(),
		showMoreTextRef: createRef<HTMLElement>(),
	};
	ready() {
		this.initScrollAnimation();
		this.refs.showMoreRef.current.addEventListener("click", () => {
			window.scrollBy({
				top: window.innerHeight,
				left: 0,
				behavior: "smooth"
			});
		});
	}

	public initScrollAnimation() {
		let controller = new ScrollMagic.Controller();

		let landingPage = new ScrollMagic.Scene({
			triggerElement: this.refs.showMoreRef.current
		})
			.setPin(this.refs.showMoreRef.current)
			.addTo(controller)
		let contact = new ScrollMagic.Scene({
			triggerElement: "#contact",
			triggerHook: 0.5,
			duration: document.querySelector("#contact").clientHeight
		})
			.setClassToggle(this.refs.showMoreRef.current, "arrowUp")
			.addTo(controller)
	}
	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			text: null
		};
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

export default PortfolioArrowNav;
