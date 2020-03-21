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

	static attributes = ["text", { name: "white-text", type: "boolean" }];

	public methods: PortfolioArrowNavMethods = {};

	private refs = {
		showMoreRef: createRef<HTMLElement>(),
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
			.setClassToggle(this.refs.showMoreRef.current, "showText")
			.addTo(controller);

		let contact = new ScrollMagic.Scene({
			triggerElement: "#contact",
			triggerHook: 0.5
		})
			.setClassToggle(this.refs.showMoreRef.current, "arrowUp")
			.addTo(controller);

		let footer = new ScrollMagic.Scene({
			triggerElement: "#footer",
			triggerHook: 1
		})
			.setClassToggle(this.refs.showMoreRef.current, "whiteTextScroll")
			.addTo(controller);
	}

	public changeColor = () => {
		let controller = new ScrollMagic.Controller();
		let scene = null;

		if (window.innerWidth < 768) {
			scene = new ScrollMagic.Scene({
				triggerElement: "#aboutMe",
				triggerHook: 1,
				duration: "100%"
			})
				.setClassToggle(this.refs.showMoreRef.current, "whiteText")
				.addTo(controller);
		}
		console.log(controller);

		window.onresize = () => {
			console.log(window.innerWidth);
			if (window.innerWidth > 768) {
				if (scene) {
					console.log("fire");
					scene.destroy(true);
					scene = null;
					controller.destroy(true);
					controller = null;
				}
			} else {
				if (!controller) {
					controller = new ScrollMagic.Controller();
				}
				scene = new ScrollMagic.Scene({
					triggerElement: "#aboutMe",
					triggerHook: 1,
					duration: "100%"
				})
					.setClassToggle(this.refs.showMoreRef.current, "whiteText")
					.addTo(controller);
			}

			console.log("resize controller", controller);
			console.log("resize scene", scene);
		};
	};

	// public changeColorAnimation = (controller, scene) => {
	// 	controller = new ScrollMagic.Controller();
	// 	scene = new ScrollMagic.Scene({
	// 		triggerElement: "#aboutMe",
	// 		triggerHook: 1,
	// 		duration: "100%"
	// 	})
	// 		.setClassToggle(this.refs.showMoreRef.current, "whiteText")
	// 		.addTo(controller);
	// 	return controller;
	// }

	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			text: null,
			whiteText: false
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
