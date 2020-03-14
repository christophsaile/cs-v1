import Component from "@biotope/element";
import template from "./template";

import {
	PortfolioAccordionVerticalProps,
	PortfolioAccordionVerticalState,
	PortfolioAccordionVerticalMethods
} from "./defines";

class PortfolioAccordionVertical extends Component<
	PortfolioAccordionVerticalProps,
	PortfolioAccordionVerticalState
> {
	static componentName = "portfolio-accordion-vertical";

	static attributes = [];

	public methods: PortfolioAccordionVerticalMethods = {};

	public accordionItems: NodeListOf<HTMLElement>;

	renderd() {
		const accordionContainer = this.shadowRoot.querySelectorAll(
			".accordion"
		);
		accordionContainer.forEach((item: Element) => {
			item.innerHTML = this.innerHTML;
		});

		this.accordionItems = this.shadowRoot.querySelectorAll(
			".accordion__item"
		);
		this.accordionItems.forEach(item => {
			item.addEventListener("click", (e: Event) =>
				this.checkIfExpanded(e)
			);
		});
	}
	public checkIfExpanded = (click: Event) => {
		this.accordionItems.forEach(elem => {
			if (elem.classList.contains("expand")) {
				elem.classList.remove("expand");
				(click.currentTarget as HTMLElement).classList.add("expand");
			} else {
				(click.currentTarget as HTMLElement).classList.add("expand");
			}
		});
	};

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

export default PortfolioAccordionVertical;
