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
	static componentName = "accordion-items";

	static attributes = ["modifier"];

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
		console.log(this.state);
	}
	public clickHeading = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	get defaultState () {
		return {
			isOpen: false,
		};
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
			this.refs,
			this.createStyle
		);
	}
}

export default PortfolioAccordionItems;
