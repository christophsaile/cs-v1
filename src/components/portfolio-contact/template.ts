import { html, createStyle, HTMLFragment } from "@biotope/element";
import * as styles from "./styles.scss";

import {
	PortfolioContactProps,
	PortfolioContactState,
	PortfolioContactMethods
} from "./defines";

export const template = (
	data: PortfolioContactProps &
		PortfolioContactState &
    PortfolioContactMethods,
  refs:any
): HTMLFragment => {
	return html`
		<section class="contact">
			<div class="contact__content">
				<slot />
			</div>
			<picture class="contact__img" ref=${refs.aboutMeImgRef}>
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
			${createStyle(styles)}
		</section>
	`;
};
