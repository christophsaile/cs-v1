import { html, createStyle, HTMLFragment } from "@biotope/element";
import * as styles from "./styles.scss";

import {
	PortfolioAboutMeProps,
	PortfolioAboutMeState,
	PortfolioAboutMeMethods
} from "./defines";

export const template = (
	data: PortfolioAboutMeProps &
		PortfolioAboutMeState &
		PortfolioAboutMeMethods,
	refs: any
): HTMLFragment => {
	return html`
		<section class="aboutMe" ref=${refs.scrollTriggerRef}>
			<picture class="aboutMe__img">
				<source
					srcset="_assets/wide_${data.imgName}"
					media="(min-width: 768px)"
					alt=${data.imgAlt}
				/>
				<img
					src="_assets/${data.imgName}"
					alt=${data.imgAlt}
					ref=${refs.aboutMeImgRef}
				/>
			</picture>
			<div class="aboutMe__layer"></div>
			<article class="aboutMe__content">
				<slot />
			</article>
		</section>
		${createStyle(styles)}
	`;
};
