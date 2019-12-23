import * as styles from './styles.scss';

import { CardComponentProps, CardComponentState, CardComponentMethods } from './defines';


export default (render: Function, data: CardComponentProps & CardComponentState & CardComponentMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
        <article class="card">
			<div class="card__content">
				<div class="card__header">
					<img class="card__img" src="https://dummyimage.com/300x150/000/fff">
				</div>
				<section class="card__body">
					<h4>hello</h4>
					<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidu</p>
				</section>
			</div>
		</article>
    `;
}
