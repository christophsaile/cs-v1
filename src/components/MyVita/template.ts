import * as styles from './styles.scss';

import { MyVitaProps, MyVitaState, MyVitaMethods } from './defines';


export default (render: Function, data: MyVitaProps & MyVitaState & MyVitaMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
        <div class="vita">
			<article class=${`vita__container ${data.position} ${data.theme}`}>
				<slot/>
			</article>
		</div>
    `;
}
