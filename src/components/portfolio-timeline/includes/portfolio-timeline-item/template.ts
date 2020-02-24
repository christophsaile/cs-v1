import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { PortfolioTimelineItemProps, PortfolioTimelineItemState, PortfolioTimelineItemMethods } from './defines';


export const template = ( data: PortfolioTimelineItemProps & PortfolioTimelineItemState & PortfolioTimelineItemMethods ): HTMLFragment => {
  return html`
    <div class="timeline__content">
      <slot name="timeline__date"/>
      <slot name="timeline__text"/>
    </div>
    ${createStyle(styles)}
  `;
}
