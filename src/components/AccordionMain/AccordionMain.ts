import Component from "@biotope/element";
import template from "./template";

import {
	AccordionMainProps,
	AccordionMainState,
	AccordionMainMethods
} from "./defines";

class AccordionMain extends Component<AccordionMainProps, AccordionMainState> {
	static componentName = "accordion-main";

	static attributes = [];

	public methods: AccordionMainMethods = {};

	public accordionItems: NodeListOf<HTMLElement>;

	connectedCallback() {
		this.accordionItems = this.shadowRoot.querySelectorAll(
			".accordion__item"
		);
		this.accordionItems.forEach(item => {
			console.log(item);
			item.addEventListener("click", (e: Event) =>
				this.checkIfExpanded(e)
			);
		});
	}
	public checkIfExpanded = (click: Event) => {
		console.log(click);
		console.log(click.target);
		console.log(click.currentTarget);
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

export default AccordionMain;
