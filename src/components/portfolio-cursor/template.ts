import { html, createStyle, HTMLFragment } from "@biotope/element";
import * as styles from "./styles.scss";

import {
	PortfolioCursorProps,
	PortfolioCursorState,
	PortfolioCursorMethods
} from "./defines";

export const template = (
	data: PortfolioCursorProps & PortfolioCursorState & PortfolioCursorMethods,
	refs: any
): HTMLFragment => {
	return html`
		<div ref=${refs.innerCursorRef} class="cursor cursor--small"></div>
		<canvas ref=${refs.canvasRef} class="cursor cursor--canvas" resize></canvas>
		${createStyle(styles)}
	`;
};
