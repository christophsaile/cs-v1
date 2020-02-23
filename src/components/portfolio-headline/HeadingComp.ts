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
		{ name: "no-margin", converter: toBoolean },
		{ name: "has-style", converter: toBoolean }
	];

	public methods: HeadingCompMethods = {};

	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			type: null,
			hasStyle: false,
			noMargin: false,
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
