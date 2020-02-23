import Component from "@biotope/element";
import template from "./template";

import {
	PortfolioAccordionProps,
	PortfolioAccordionState,
	PortfolioAccordionMethods
} from "./defines";

class PortfolioAccordion extends Component<PortfolioAccordionProps, PortfolioAccordionState> {
	static componentName = "portfolio-accordion";

	static attributes = [];

	public methods: PortfolioAccordionMethods = {};
	
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
