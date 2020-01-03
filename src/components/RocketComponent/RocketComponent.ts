import Component from "@biotope/element";
import template from "./template";
import { toBoolean } from "../../resources/ts/converters";

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

	static attributes = [{ name: "has-bounce", converter: toBoolean }];

	public methods: RocketComponentMethods = {};
	public rocket: HTMLElement;
	public rocketHeight: number;
	public scaledRocketHeight: number;
	public bodyLenght: number;
	public bodyLenghtWithRocket: number;
	public animationDuration: number;

	connectedCallback() {
		this.init();
		this.rocket.addEventListener("click", () => {
			this.setAttribute("has-bounce", "false"); //stop bounce effect while flying

			this.rocket.classList.remove("animated", "bounce");
			this.bodyLenght = document.body.scrollHeight;
			this.bodyLenghtWithRocket =
				this.bodyLenght + this.scaledRocketHeight;
			this.rocket.style.cssText =
				"transform: translateY(-" +
				this.bodyLenghtWithRocket +
				"px) scale(4.0);transition: all linear " +
				this.animationDuration +
				"ms";

			window.setTimeout(() => {
				this.rocket.style.cssText = "";
				this.setAttribute("has-bounce", "true"); //add bounce effect after flying
			}, this.animationDuration + 100);
		});
		this.bounceAnimation();
	}
	onPropsChanged() {
		if(this.getAttribute("has-bounce")){
			this.bounceAnimation();
		}
	}
	public init() {
		this.animationDuration = 3000;
		this.rocket = this.shadowRoot.querySelector(".rocket__icon");

		this.rocketHeight = this.rocket.getBoundingClientRect().height;
		this.scaledRocketHeight = this.rocketHeight * 5;
	}

	public bounceAnimation = () => {
		if (this.props.hasBounce === true) {
			this.rocket.classList.add("animated", "bounce", "delay-4s");
			this.rocket.addEventListener("animationend", () => {
				this.rocket.classList.remove("animated", "bounce", "delay-4s");
				window.setTimeout(() => {
					this.rocket.classList.add("animated", "bounce", "delay-4s");
				}, 100);
			});
		}
	};

	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			hasBounce: true
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

export default RocketComponent;
