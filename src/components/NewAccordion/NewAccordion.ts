import Component from "@biotope/element";
import template from "./template";

import {
	NewAccordionProps,
	NewAccordionState,
	NewAccordionMethods
} from "./defines";

class NewAccordion extends Component<NewAccordionProps, NewAccordionState> {
	static componentName = "new-accordion";

	static attributes = ["modifier"];

	public methods: NewAccordionMethods = {};

	public accordionItems: NodeListOf<HTMLElement>;

	connectedCallback() {
		const accordionContainer = this.shadowRoot.querySelectorAll(
			".accordion"
		);
		accordionContainer.forEach((item: Element) => {
			item.innerHTML = this.innerHTML;
		});
		const accordionItems = this.shadowRoot.querySelectorAll(
			".accordion__item"
		);
		accordionItems.forEach((elem: HTMLElement) => {
			elem.firstElementChild.addEventListener("click", function() {
				if (this.parentElement.classList.contains("hidden")) {
					accordionItems.forEach((elem: HTMLElement) => {
						elem.classList.add("hidden");
					});
					this.parentElement.classList.remove("hidden");
				} else {
					this.parentElement.classList.add("hidden");
				}
			});
		});
	}
	
	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			modifier: null,
		};
	}

	render() {
		return template(
			this.html,
			{ ...this.props, ...this.state, ...this.methods },
			this.createStyle
		);
	}
}

export default NewAccordion;
