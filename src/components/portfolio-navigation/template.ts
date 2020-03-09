import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { PortfolioNavigationProps, PortfolioNavigationState, PortfolioNavigationMethods } from './defines';



export const template = ( data: PortfolioNavigationProps & PortfolioNavigationState & PortfolioNavigationMethods ): HTMLFragment => {
  return html`
    <div class="navigation">
      <portfolio-header-nav data-resources="[{paths: ['components/portfolio-header-nav/index.js']}]"></portfolio-header-nav>
      <portfolio-counter-nav></portfolio-counter-nav>
      <portfolio-arrow-nav text="Show More" data-resources="[{paths: ['components/portfolio-arrow-nav/index.js']}]"></portfolio-arrow-nav>
    </div>
    ${createStyle(styles)}
  `;
}
