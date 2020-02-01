import Component from "@biotope/element";
import template from "./template";

import {
	NewAccordionProps,
	NewAccordionState,
	NewAccordionMethods
} from "./defines";

class NewAccordion extends Component<NewAccordionProps, NewAccordionState> {
	static componentName = "new-accordion";

	static attributes = [];

	public methods: NewAccordionMethods = {};
	
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

export default NewAccordion;
