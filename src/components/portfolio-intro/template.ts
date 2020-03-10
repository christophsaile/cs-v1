import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { PortfolioIntroProps, PortfolioIntroState, PortfolioIntroMethods } from './defines';


export const template = ( data: PortfolioIntroProps & PortfolioIntroState & PortfolioIntroMethods ): HTMLFragment => {
  return html`
		<img class="intro__img" src="../_assets/abstract_fade.jpg" alt="abstract_colors">
		<portfolio-headline half type="h1" data-resources="[{paths: ['components/portfolio-headline/index.js']}]">
			Chris <br>
			toph <br>
			saile
		</portfolio-headline>
    ${createStyle(styles)}
  `;
}
