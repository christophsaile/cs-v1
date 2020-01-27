import Component, { createRef } from "@biotope/element";
import { template } from "./template";
import {
	AccordionItemsProps,
	AccordionItemsState,
	AccordionItemsMethods
} from "./defines";

class AccordionItems extends Component<
	AccordionItemsProps,
	AccordionItemsState
> {
	public static componentName = "accordion-items";
	public static attributes = [];

	public refs = {
		accordionHeaderRef: createRef<HTMLElement>()
	};
	rendered() {
		console.log(this.refs);
	}
	get defaultState() {
		return {
			isOpen: false
		};
	}
	get defaultProps() {
		return {};
	}

	public methods: AccordionItemsMethods = {};

	public render() {
		return template(
			this.html,
			{ ...this.props, ...this.state, ...this.methods },
			this.createStyle
		);
	}
}

export default AccordionItems;
