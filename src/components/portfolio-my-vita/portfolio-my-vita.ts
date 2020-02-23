import Component, { createRef } from "@biotope/element";
import template from "./template";
import * as ScrollMagic from "scrollmagic";

import { PortfolioMyVitaProps, PortfolioMyVitaState, PortfolioMyVitaMethods } from "./defines";

class PortfolioMyVita extends Component<PortfolioMyVitaProps, PortfolioMyVitaState> {
	static componentName = "portfolio-my-vita";

	static attributes = ["scroll-animation", "position", "theme"];

	public methods: PortfolioMyVitaMethods = {};

	public animation: HTMLElement;

	private refs = {
		scrollTriggerRef: createRef<HTMLElement>(),
		animationRef: createRef<HTMLElement>()
	};

	rendered() {
		this.initAnimation();
	}
	public initAnimation() {
		let controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: "onEnter"
			}
		});
		this.animation = this.refs.animationRef.current;
		this.fadeInRight(controller);
		this.fadeInLeft(controller);
	}
	public fadeInLeft(controller) {
		if (this.props.scrollAnimation === "left") {
			let animationSceneLeft = new ScrollMagic.Scene({
				triggerElement: this.refs.scrollTriggerRef.current
			})
				.setClassToggle(this.animation, "fadeInLeft")
				.addTo(controller);
		}
	}
	public fadeInRight(controller) {
		if (this.props.scrollAnimation === "right") {
			let animationSceneRight = new ScrollMagic.Scene({
				triggerElement: this.refs.scrollTriggerRef.current
			})
				.setClassToggle(this.animation, "fadeInRight")
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
			this.refs,
			this.createStyle
		);
	}
}

export default PortfolioMyVita;
