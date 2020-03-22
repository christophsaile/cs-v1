import { html, createStyle, HTMLFragment } from "@biotope/element";
import * as styles from "./styles.scss";

import {
	PortfolioTimelineProps,
	PortfolioTimelineState,
	PortfolioTimelineMethods
} from "./defines";

export const template = (
	data: PortfolioTimelineProps &
		PortfolioTimelineState &
		PortfolioTimelineMethods
): HTMLFragment => {
	return html`
		<section class="timeline">
			<span class="timeline__line"></span>
			<slot />
		</section>
		<picture class="timeline__background">
			<source
				srcset="_assets/wide_${data.imgName}"
				media="(min-width: 768px)"
				alt=${data.imgAlt}
			/>
			<img
				src="_assets/${data.imgName}"
				alt=${data.imgAlt}
			/>
		</picture>
		${createStyle(styles)}
	`;
};
