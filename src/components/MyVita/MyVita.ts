import Component from "@biotope/element";
import template from "./template";
import * as ScrollMagic from "scrollmagic";

import { MyVitaProps, MyVitaState, MyVitaMethods } from "./defines";

class MyVita extends Component<MyVitaProps, MyVitaState> {
	static componentName = "my-vita";

	static attributes = ["scroll-animation", "position", "theme"];

	public methods: MyVitaMethods = {};

	rendered() {
		const vita = this.shadowRoot.querySelectorAll(".vita__container");
		vita.forEach((item: Element) => {
			item.innerHTML = this.innerHTML;
		});
		this.initAnimation();
	}
	public initAnimation() {
		let controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: "onEnter"
			}
		});
		this.fadeInRight(controller);
		this.fadeInLeft(controller);
	}
	public fadeInLeft(controller) {
		const animationFadeInLeft: HTMLElement = this.shadowRoot.querySelector(
			".animation-fade-in-left"
		);
		if (animationFadeInLeft) {
			let animationSceneLeft = new ScrollMagic.Scene({
				triggerElement: this.shadowRoot.querySelector(".scroll-trigger")
			})
				.setClassToggle(animationFadeInLeft, "fadeInLeft")
				.addTo(controller);
		}
	}
	public fadeInRight(controller) {
		const animationFadeInRight: HTMLElement = this.shadowRoot.querySelector(
			".animation-fade-in-right"
		);
		if (animationFadeInRight) {
			let animationSceneRight = new ScrollMagic.Scene({
				triggerElement: this.shadowRoot.querySelector(".scroll-trigger")
			})
				.setClassToggle(animationFadeInRight, "fadeInRight")
				.addTo(controller);
		}
	}
	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			position: null,
			theme: null,
			scrollAnimation: null
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
