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
	public rocketHeight: number;
	public scaledRocketHeight: number;
	public bodyLenght: number;
	public bodyLenghtWithRocket: number;
	public animationDuration: number;

	connectedCallback() {
		this.animationDuration = 3000;
		this.rocket = this.shadowRoot.querySelector(".rocket__icon");

		this.rocketHeight = this.rocket.getBoundingClientRect().height;
		this.scaledRocketHeight = this.rocketHeight * 5;

		this.bodyLenght = document.body.scrollHeight;
		this.bodyLenghtWithRocket = this.bodyLenght + this.scaledRocketHeight;

		this.rocket.addEventListener("click", () => {
			this.rocket.style.cssText =
				"transform: translateY(-" +
				this.bodyLenghtWithRocket +
				"px) scale(4.0);transition: all linear "+this.animationDuration+"ms";
			window.setTimeout(() => {
				this.rocket.style.cssText = "";
			}, this.animationDuration+100);
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
