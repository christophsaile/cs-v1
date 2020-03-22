import Component, { createRef } from "@biotope/element";
import template from "./template";
import * as ScrollMagic from "scrollmagic";

import {
	PortfolioArrowNavProps,
	PortfolioArrowNavState,
	PortfolioArrowNavMethods
} from "./defines";

class PortfolioArrowNav extends Component<
	PortfolioArrowNavProps,
	PortfolioArrowNavState
> {
	static componentName = "portfolio-arrow-nav";

	static attributes = ["text", { name: "menu-open", type: "boolean" }];

	public methods: PortfolioArrowNavMethods = {};

	private refs = {
		showMoreRef: createRef<HTMLElement>(),
		showMoreIconRef: createRef<HTMLElement>(),
		showMoreTextRef: createRef<HTMLElement>()
	};
	ready() {
		this.initScrollAnimation();
		this.changeColor();

		this.refs.showMoreRef.current.addEventListener("click", () => {
			if (this.refs.showMoreRef.current.classList.contains("arrowUp")) {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth"
				});
			} else {
				window.scrollBy({
					top: window.innerHeight,
					left: 0,
					behavior: "smooth"
				});
			}
		});
	}

	public initScrollAnimation() {
		let controller = new ScrollMagic.Controller();

		let intro = new ScrollMagic.Scene({
			triggerElement: "#intro",
			triggerHook: 0.9,
			duration: document.querySelector("#intro").clientHeight
		})
			.setClassToggle(this.refs.showMoreTextRef.current, "showText")
			.addTo(controller);

		let contact = new ScrollMagic.Scene({
			triggerElement: "#contact",
			triggerHook: 0.5
		})
			.setClassToggle(this.refs.showMoreIconRef.current, "arrowUp")
			.addTo(controller);

		let footer = new ScrollMagic.Scene({
			triggerElement: "#footer",
			triggerHook: 1
		})
			.setClassToggle(this.refs.showMoreIconRef.current, "changeColor")
			.addTo(controller);
	}

	public changeColor = () => {
		let controller = new ScrollMagic.Controller();
		let scene = null;
		const colorChangeSections = document.querySelectorAll('.colorChangeSection');

		if (window.innerWidth < 768) {
			colorChangeSections.forEach(section => {
				scene = new ScrollMagic.Scene({
					triggerElement: section,
					triggerHook: 0.9,
					duration: "100%"
				})
					.setClassToggle(this.refs.showMoreIconRef.current, "changeColorScroll")
					.addTo(controller);
			});
		}

		window.onresize = () => {
			if (window.innerWidth > 768) {
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
						triggerHook: 0.9,
						duration: "100%"
					})
						.setClassToggle(this.refs.showMoreIconRef.current, "changeColorScroll")
						.addTo(controller);
				});
			}
		};
	};

	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			text: null,
			menuOpen: false
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
