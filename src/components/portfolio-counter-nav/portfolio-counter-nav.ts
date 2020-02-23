import Component, { createRef } from "@biotope/element";
import template from "./template";
import { debounce } from "../../resources/js/debounce";
import { toBoolean } from "../../resources/ts/converters";

import {
	PortfolioCounterNavProps,
	PortfolioCounterNavState,
	PortfolioCounterNavMethods
} from "./defines";

class PortfolioCounterNav extends Component<PortfolioCounterNavProps, PortfolioCounterNavState> {
	static componentName = "portfolio-counter-nav";

	static attributes = [
		{ name: "switch-sides", converter: toBoolean },
		"first-anchor",
		"second-anchor"
	];

	public methods: PortfolioCounterNavMethods = {};
	
	public counter: HTMLElement;

	private refs = {
		counterRef: createRef<HTMLElement>(),
		counterContainerRef: createRef<HTMLElement>()
	};


	rendered() {
		//Note: calculation based on height of FIRST section in the document!!!

		const section = document.querySelector("section");
		const sectionHeight = section.getBoundingClientRect().height;
		const counter = this.refs.counterRef.current;
		const counterContainer = this.refs.counterContainerRef.current;
		
		const counterContainerHeight = counterContainer.getBoundingClientRect()
			.top;
		const firstLink = counterContainer.firstElementChild;
		const lastLink = counterContainer.lastElementChild;
		const calc = sectionHeight - counterContainerHeight;

		//init event
		window.addEventListener(
			"scroll",
			debounce(() => {
				if (window.scrollY >= calc) {
					if (this.props.switchSides) {
						counter.classList.add("counter--left");
					}
					firstLink.firstElementChild.classList.remove(
						"counter__link--active"
					);
					lastLink.firstElementChild.classList.add(
						"counter__link--active"
					);
				} else {
					if (this.props.switchSides) {
						counter.classList.remove("counter--left");
					}
					lastLink.firstElementChild.classList.remove(
						"counter__link--active"
					);
					firstLink.firstElementChild.classList.add(
						"counter__link--active"
					);
				}
			}, 300)
		);
	}

	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			switchSides: false,
			firstAnchor: "#",
			secondAnchor: null
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
