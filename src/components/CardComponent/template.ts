import * as styles from './styles.scss';

import { CardComponentProps, CardComponentState, CardComponentMethods } from './defines';


export default (render: Function, data: CardComponentProps & CardComponentState & CardComponentMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
        <div>Fill me</div>
    `;
}
