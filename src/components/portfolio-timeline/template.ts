import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { PortfolioTimelineProps, PortfolioTimelineState, PortfolioTimelineMethods } from './defines';


export const template = ( data: PortfolioTimelineProps & PortfolioTimelineState & PortfolioTimelineMethods ): HTMLFragment => {
  return html`
    <section class="timeline">
      <span class="timeline__line"></span>
      <slot/>
    </section>
    ${createStyle(styles)}
  `;
}
