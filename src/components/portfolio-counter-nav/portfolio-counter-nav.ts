import Component, { createRef } from "@biotope/element";
import template from "./template";
import { toBoolean } from "../../resources/ts/converters";
import * as ScrollMagic from "scrollmagic";

import {
	PortfolioCounterNavProps,
	PortfolioCounterNavState,
	PortfolioCounterNavMethods
} from "./defines";

class PortfolioCounterNav extends Component<
	PortfolioCounterNavProps,
	PortfolioCounterNavState
> {
	static componentName = "portfolio-counter-nav";

	static attributes = [
		"current-page",
		"last-page",
		{ name: 'white-text', type: 'boolean' },
	];

	public methods: PortfolioCounterNavMethods = {};

	public counter: HTMLElement;

	private refs = {
		counterRef: createRef<HTMLElement>(),
		counterLastRef: createRef<HTMLElement>()
	};

	ready() {
		this.initScrollAnimation();
	}

	public initScrollAnimation() {
		const currentPage = this.refs.counterRef.current;
		const lastPage = this.refs.counterLastRef.current;

		let controller = new ScrollMagic.Controller();

		let intro = new ScrollMagic.Scene({
			triggerElement: "#intro",
			duration: document.querySelector("#intro").clientHeight
		})
			.addTo(controller)
			.on("enter", function() {
				currentPage.innerHTML = "01";
				currentPage.setAttribute("href", "#intro");
			});

		let aboutMe = new ScrollMagic.Scene({
			triggerElement: "#aboutMe",
			duration: document.querySelector("#aboutMe").clientHeight,
			triggerHook: 0.50
		})
			.addTo(controller)
			.on("enter", function() {
				currentPage.innerHTML = "02";
				currentPage.setAttribute("href", "#aboutMe");
			});

		let timeline = new ScrollMagic.Scene({
			triggerElement: "#timeline",
			duration: document.querySelector("#timeline").clientHeight,
			triggerHook: 0.50
		})
			.addTo(controller)
			.on("enter", function() {
				currentPage.innerHTML = "03";
				currentPage.setAttribute("href", "#timeline");
			});

		let contact = new ScrollMagic.Scene({
			triggerElement: "#contact",
			duration: document.querySelector("#contact").clientHeight,
			triggerHook: 0.50
		})
			.addTo(controller)
			.on("enter", function() {
				currentPage.innerHTML = "04";
				currentPage.setAttribute("href", "#contact");
			});
		let footer= new ScrollMagic.Scene({
			triggerElement: "#footer",
			duration: document.querySelector("#footer").clientHeight,
			triggerHook: 0.55
		})
			.setClassToggle(lastPage, "whiteTextScroll")
			.addTo(controller)
	}

	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			currentPage: null,
			whiteText: false,
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

export default PortfolioCounterNav;
