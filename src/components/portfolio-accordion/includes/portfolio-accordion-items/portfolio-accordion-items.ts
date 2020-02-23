import Component, { createRef } from "@biotope/element";
import template from "./template";

import {
	PortfolioAccordionItemsProps,
	PortfolioAccordionItemsState,
	PortfolioAccordionItemsMethods
} from "./defines";

class PortfolioAccordionItems extends Component<
	PortfolioAccordionItemsProps,
	PortfolioAccordionItemsState
> {
	static componentName = "portfolio-accordion-items";

	static attributes = [
		"modifier",
		{ name: 'is-open', type: 'boolean' },
	];

	public methods: PortfolioAccordionItemsMethods = {};

	private refs = {
		accordionHeaderRef: createRef<HTMLElement>(),
		accordionBodyRef: createRef<HTMLElement>()
	};
	
	rendered() {
		this.refs.accordionHeaderRef.current.addEventListener(
			"click",
			this.clickHeading,
			false
		);
	}
	public clickHeading = () => {
		this.emit('accordionOpened', this.props.isOpen, false)
	};

	get defaultState () {
		return {};
	}

	get defaultProps() {
		return {
			modifier: null,
			isOpen: null,
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

export default PortfolioAccordionItems;
