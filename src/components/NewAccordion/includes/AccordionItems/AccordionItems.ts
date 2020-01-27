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

	private refs = {
		accordionHeaderRef: createRef<HTMLElement>(),
		accordionBodyRef: createRef<HTMLElement>()
	};
	ready() {
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
			this.refs,
			this.createStyle
		);
	}
}

export default AccordionItems;
