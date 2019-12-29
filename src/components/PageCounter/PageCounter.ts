import Component from "@biotope/element";
import template from "./template";
import { debounce } from "../../resources/js/debounce";

import {
	PageCounterProps,
	PageCounterState,
	PageCounterMethods
} from "./defines";

class PageCounter extends Component<PageCounterProps, PageCounterState> {
	static componentName = "page-counter";

	static attributes = [];

	public methods: PageCounterMethods = {};

	connectedCallback() {
		const section = document.querySelector("section");
		const sectionHeight = section.getBoundingClientRect().height;
		const counterContainer = this.shadowRoot.querySelector(
			".counter__container"
		);
		const counterContainerHeight = counterContainer.getBoundingClientRect()
			.top;
		const calc = sectionHeight - counterContainerHeight;

		window.addEventListener(
			"scroll",
			debounce(function() {
				if (window.scrollY >= calc) {
					counterContainer.firstElementChild.firstElementChild.classList.remove(
						"counter__link--active"
					);
					counterContainer.lastElementChild.firstElementChild.classList.add(
						"counter__link--active"
					);
				} else {
					counterContainer.lastElementChild.firstElementChild.classList.remove(
						"counter__link--active"
					);
					counterContainer.firstElementChild.firstElementChild.classList.add(
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

export default PageCounter;
