import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { PortfolioContactProps, PortfolioContactState, PortfolioContactMethods } from './defines';


export const template = ( data: PortfolioContactProps & PortfolioContactState & PortfolioContactMethods ): HTMLFragment => {
  return html`
    <section class="contact">
      <div class="contact__content">
        <slot/>
      </div>
      <div class="contact__img">
        <img src="../../_assets/telephone_booth.jpg" alt="telephone booth">
      </div>
    ${createStyle(styles)}
  `;
}
