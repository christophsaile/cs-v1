import * as styles from "./styles.scss";
import {
	PortfolioHeadlineProps,
	PortfolioHeadlineState,
	PortfolioHeadlineMethods
} from "./defines";
import Component, { html } from "@biotope/element";

function checkClasses(data: PortfolioHeadlineProps) {
	let half: string = "";
	let halfInline: string = "";
	let vertical: string = "";

	if (data.half) {
		half = "half";
	}
	if (data.halfInline) {
		halfInline = "halfInline";
	}
	if (data.vertical) {
		vertical = "vertical";
	}
	return half + " " + halfInline + " " + vertical;
}

export default (
	render: Function,
	data: PortfolioHeadlineProps &
		PortfolioHeadlineState &
		PortfolioHeadlineMethods,
	createStyle: Function
) => {
	return render`
        ${createStyle(styles)}
		${
			data.type === "h1"
				? html`
						<h1 class=${checkClasses(data)}>
							<slot />
						</h1>
				  `
				: null
		}
		${
			data.type === "h2"
				? html`
						<h2 class=${checkClasses(data)}>
							<slot />
						</h2>
				  `
				: null
		}
		${
			data.type === "h3"
				? html`
						<h3 class=${checkClasses(data)}>
							<slot />
						</h3>
				  `
				: null
		}
		${
			data.type === "h4"
				? html`
						<h4 class=${checkClasses(data)}>
							<slot />
						</h4>
				  `
				: null
		}
    `;
};
