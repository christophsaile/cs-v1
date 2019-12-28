import Component from "@biotope/element";
import template from "./template";

import { MyVitaProps, MyVitaState, MyVitaMethods } from "./defines";

class MyVita extends Component<MyVitaProps, MyVitaState> {
	static componentName = "my-vita";

	static attributes = ["position", "theme"];

	public methods: MyVitaMethods = {};

	connectedCallback() {
		const vita = this.shadowRoot.querySelectorAll(".vita__container");
		vita.forEach((item: Element) => {
			item.innerHTML = this.innerHTML;
		});
	}

	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			position: null,
			theme: null
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

export default MyVita;
