import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { PortfolioLoaderProps, PortfolioLoaderState, PortfolioLoaderMethods } from './defines';


export const template = ( data: PortfolioLoaderProps & PortfolioLoaderState & PortfolioLoaderMethods ): HTMLFragment => {
  return html`
    <div class="loader">
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
    </div>
    ${createStyle(styles)}
  `;
}
