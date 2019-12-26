import Component from "@biotope/element";
import template from "./template";

import {
	RocketComponentProps,
	RocketComponentState,
	RocketComponentMethods
} from "./defines";

class RocketComponent extends Component<
	RocketComponentProps,
	RocketComponentState
> {
	static componentName = "rocket-component";

	static attributes = [];

	public methods: RocketComponentMethods = {};
	public rocket: HTMLElement;
	public lengthOfAnimation: any;

	connectedCallback() {
		this.rocket = this.shadowRoot.querySelector(".rocket__icon");
		this.lengthOfAnimation = document.body.scrollHeight;
		this.rocket.addEventListener("click", () => {
			this.rocket.style.cssText =
				"transform: translateY(-" +
				this.lengthOfAnimation +
				"px) scale(5.0);transition: all linear 1s";
			window.setTimeout(() => {
				this.rocket.style.cssText = "";
			}, 1000);
		});
	}

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

export default RocketComponent;
