import Component, { HTMLFragment, toBoolean } from "@biotope/element";
import { template } from "./template";
import {
	PortfolioTimelineItemProps,
	PortfolioTimelineItemState,
	PortfolioTimelineItemMethods
} from "./defines";

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

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state, ...this.methods });
	}
}

export default PortfolioTimelineItem;
