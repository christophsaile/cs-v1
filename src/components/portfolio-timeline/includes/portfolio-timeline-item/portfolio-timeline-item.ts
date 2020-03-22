import Component, { HTMLFragment, toBoolean, createRef } from "@biotope/element";
import { template } from "./template";
import {
	PortfolioTimelineItemProps,
	PortfolioTimelineItemState,
	PortfolioTimelineItemMethods
} from "./defines";
import * as ScrollMagic from "scrollmagic";

class PortfolioTimelineItem extends Component<
	PortfolioTimelineItemProps,
	PortfolioTimelineItemState
> {
	public static componentName = "portfolio-timeline-item";
	public static attributes = [{ name: "right", converter: toBoolean }];

	protected readonly defaultProps: PortfolioTimelineItemProps = {
		right: null
	};

	protected readonly defaultState: PortfolioTimelineItemState = {};

	public methods: PortfolioTimelineItemMethods = {};

	private refs = {
		scrollTriggerRef: createRef<HTMLElement>(),
		timelineContentRef: createRef<HTMLElement>()
	};

	ready() {
		this.initScrollAnimation();
	}

	public initScrollAnimation() {
		let controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 0.9
			}
		});
		let animationScene = new ScrollMagic.Scene({
			triggerElement: this.refs.scrollTriggerRef.current,
			duration: "100%"
		})
			.setClassToggle(this.refs.timelineContentRef.current, "visible")
			.addTo(controller);
	}
	public render(): HTMLFragment {
		return template(
			{ ...this.props, ...this.state, ...this.methods },
			this.refs
		);
	}
}

export default PortfolioTimelineItem;
