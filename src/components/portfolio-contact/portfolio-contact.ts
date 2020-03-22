import Component, { HTMLFragment, createRef } from "@biotope/element";
import { template } from "./template";
import {
	PortfolioContactProps,
	PortfolioContactState,
	PortfolioContactMethods
} from "./defines";
import PortfolioHeadline from "../portfolio-headline/portfolio-headline";

import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class PortfolioContact extends Component<
	PortfolioContactProps,
	PortfolioContactState
> {
	public static componentName = "portfolio-contact";
	public static attributes = ["img-name", "img-alt"];

	public static dependencies = [PortfolioHeadline as typeof Component];

	protected readonly defaultProps: PortfolioContactProps = {
		imgName: "",
		imgAlt: ""
	};

	protected readonly defaultState: PortfolioContactState = {};

	public methods: PortfolioContactMethods = {};

	private refs = {
		contactContentRef: createRef<HTMLElement>(),
		contactImgRef: createRef<HTMLElement>()
	};

	ready() {
		this.initScrollAnimation();
	}

	public initScrollAnimation() {
		let controller = new ScrollMagic.Controller({});

		let parallaxText = new ScrollMagic.Scene({
			triggerElement: this.refs.contactContentRef.current,
			triggerHook: 0.9
		})
			.setTween(
				TweenMax.from(this.refs.contactContentRef.current, 1, {
					y: "-30%",
					autoAlpha: 0
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

export default PortfolioContact;
