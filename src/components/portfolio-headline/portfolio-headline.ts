import Component from "@biotope/element";
import template from "./template";
import { toBoolean } from "../../resources/ts/converters";

import {
	PortfolioHeadlineProps,
	PortfolioHeadlineState,
	PortfolioHeadlineMethods
} from "./defines";

class PortfolioHeadline extends Component<PortfolioHeadlineProps, PortfolioHeadlineState> {
	static componentName = "portfolio-headline";

	static attributes = [
		"type",
		{ name: "half", converter: toBoolean },
		{ name: "half-inline", converter: toBoolean },
		{ name: "vertical", converter: toBoolean }
	];

	public methods: PortfolioHeadlineMethods = {};

	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			type: null,
			half: false,
			halfInline: false,
			vertical: false
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

export default PortfolioHeadline;
