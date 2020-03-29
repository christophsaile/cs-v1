import Component, { HTMLFragment, createRef } from "@biotope/element";
import { template } from "./template";
import {
	PortfolioAboutMeProps,
	PortfolioAboutMeState,
	PortfolioAboutMeMethods
} from "./defines";

import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class PortfolioAboutMe extends Component<
	PortfolioAboutMeProps,
	PortfolioAboutMeState
> {
	public static componentName = "portfolio-about-me";
	public static attributes = ["img-name", "img-alt"];

	protected readonly defaultProps: PortfolioAboutMeProps = {
		imgName: "",
		imgAlt: ""
	};

	protected readonly defaultState: PortfolioAboutMeState = {};

	public methods: PortfolioAboutMeMethods = {};
	private refs = {
		scrollTriggerRef: createRef<HTMLElement>(),
		aboutMeImgRef: createRef<HTMLElement>(),
		aboutMeContentRef: createRef<HTMLElement>()
	};

	ready() {
		this.initScrollAnimation();
	}

	public initScrollAnimation() {
		let controller = new ScrollMagic.Controller({});

		let parallaxImg = new ScrollMagic.Scene({
			triggerElement: "#aboutMe",
			triggerHook: 1,
			duration: "200%"
		})
			.setTween(
				TweenMax.from(this.refs.aboutMeImgRef.current, 1, {
					y: "-30%"
				})
			)
			.addTo(controller);

		let fadeInImg = new ScrollMagic.Scene({
			triggerElement: "#aboutMe",
			triggerHook: 1,
			duration: "200%"
		})
			.setTween(
				TweenMax.from(this.refs.aboutMeImgRef.current, 1, {
					autoAlpha: 0,
					repeat: 1,
					yoyo: true,
					repeatDelay: 1
				})
			)
			.addTo(controller);

		let parallaxText = new ScrollMagic.Scene({
			triggerElement: this.refs.aboutMeContentRef.current,
			triggerHook: 1,
			duration: "150%"
		})
			.setTween(
				TweenMax.from(this.refs.aboutMeContentRef.current, 1, {
					autoAlpha: 0,
					repeat: 1,
					yoyo: true,
					repeatDelay: 1
				})
			)
			.addTo(controller);
	}

	public render(): HTMLFragment {
		return template(
			{ ...this.props, ...this.state, ...this.methods },
			this.refs
		);
	}
}

export default PortfolioAboutMe;
