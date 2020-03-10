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
		"last-page"
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

		let controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 0.5
			}
		});

		let landingpage = new ScrollMagic.Scene({
			triggerElement: "#landingpage",
			duration: document.querySelector("#landingpage").clientHeight
		})
			.addTo(controller)
			.on("enter", function() {
				currentPage.innerHTML = "01";
				currentPage.setAttribute("href", "#landingpage");
			});

		let aboutMe = new ScrollMagic.Scene({
			triggerElement: "#aboutMe",
			duration: document.querySelector("#aboutMe").clientHeight
		})
			.addTo(controller)
			.on("enter", function() {
				currentPage.innerHTML = "02";
				currentPage.setAttribute("href", "#aboutMe");
			});

		let timeline = new ScrollMagic.Scene({
			triggerElement: "#timeline",
			duration: document.querySelector("#timeline").clientHeight
		})
			.addTo(controller)
			.on("enter", function() {
				currentPage.innerHTML = "03";
				currentPage.setAttribute("href", "#timeline");
			});

		let contact = new ScrollMagic.Scene({
			triggerElement: "#contact",
			duration: document.querySelector("#contact").clientHeight
		})
			.addTo(controller)
			.on("enter", function() {
				currentPage.innerHTML = "04";
				currentPage.setAttribute("href", "#contact");
			});
		let footer= new ScrollMagic.Scene({
			triggerElement: "#footer",
			duration: document.querySelector("#footer").clientHeight
		})
			.setClassToggle(lastPage, "whiteText")
			.addTo(controller)
	}

	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			currentPage: null
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
