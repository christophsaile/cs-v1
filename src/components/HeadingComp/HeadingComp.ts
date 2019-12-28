import Component from "@biotope/element";
import template from "./template";
import { toBoolean } from "../../resources/ts/converters";

import {
	HeadingCompProps,
	HeadingCompState,
	HeadingCompMethods
} from "./defines";

class HeadingComp extends Component<HeadingCompProps, HeadingCompState> {
	static componentName = "heading-comp";

	static attributes = [
		"type",
		"text",
		"second-line",
		{ name: "has-style", converter: toBoolean }
	];

	public methods: HeadingCompMethods = {};

	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			type: null,
			text: null,
			secondLine: null,
			hasStyle: false
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

export default HeadingComp;
