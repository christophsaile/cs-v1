import Component from "@biotope/element";
import template from "./template";
import PortfolioHeadline from '../portfolio-headline/portfolio-headline';

import {
	PortfolioAccordionProps,
	PortfolioAccordionState,
	PortfolioAccordionMethods
} from "./defines";

class PortfolioAccordion extends Component<
	PortfolioAccordionProps,
	PortfolioAccordionState
> {
	static componentName = "portfolio-accordion";

	static attributes = [];
	public static dependencies = [
		PortfolioHeadline as typeof Component,
	]

	public methods: PortfolioAccordionMethods = {};

	rendered() {
		const allAccordionItems = this.querySelectorAll(
			"portfolio-accordion-items"
		);
		window.addEventListener("accordionOpened", (event: CustomEvent) => {
			const currentItem = event.target as HTMLElement;
			if (currentItem.parentElement === this) {
				if (event.detail) {
					currentItem.removeAttribute("is-open");
				} else {
					allAccordionItems.forEach(item => {
						item.removeAttribute("is-open");
					});
					currentItem.setAttribute("is-open", "true");
				}
			}
		});
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

export default PortfolioAccordion;
