import { html, createStyle, HTMLFragment } from "@biotope/element";
import * as styles from "./styles.scss";

import {
	PortfolioTimelineItemProps,
	PortfolioTimelineItemState,
	PortfolioTimelineItemMethods
} from "./defines";

export const template = (
	data: PortfolioTimelineItemProps &
		PortfolioTimelineItemState &
		PortfolioTimelineItemMethods,
	refs: any
): HTMLFragment => {
	return html`
		<div class="timeline__content ${data.right ? "right" : ""}" ref=${refs.timelineContentRef}>
			<div class="timeline__scrollTrigger" ref=${refs.scrollTriggerRef}>
				<slot name="timeline__date" />
				<slot name="timeline__text" />
			</div>
		</div>
		${createStyle(styles)}
	`;
};
