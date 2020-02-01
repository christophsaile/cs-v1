import Component, { createRef } from "@biotope/element";
import template from "./template";

import {
	AccordionItemsProps,
	AccordionItemsState,
	AccordionItemsMethods
} from "./defines";

class AccordionItems extends Component<
	AccordionItemsProps,
	AccordionItemsState
> {
	static componentName = "accordion-items";

	static attributes = ["modifier"];

	public methods: AccordionItemsMethods = {};

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
		if(this.state.isOpen){
			console.log(this.classList.add)
		}
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

export default AccordionItems;
