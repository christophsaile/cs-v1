import * as styles from "./styles.scss";
import {
	PortfolioHeadlineProps,
	PortfolioHeadlineState,
	PortfolioHeadlineMethods
} from "./defines";
import Component, { html } from "@biotope/element";

function checkClasses(data: PortfolioHeadlineProps) {
	let styled: string = "";
	let margin: string = "";

	if (data.hasStyle) {
		styled = "styled";
	}
	if (data.noMargin) {
		margin = "noMargin";
	}
	return styled + "" + margin;
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
		${
			data.type === "h5"
				? html`
						<h5 class=${checkClasses(data)}>
							<slot />
						</h5>
				  `
				: null
		}
    `;
};
