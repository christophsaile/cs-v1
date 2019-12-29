import * as styles from './styles.scss';

import { PageCounterProps, PageCounterState, PageCounterMethods } from './defines';


export default (render: Function, data: PageCounterProps & PageCounterState & PageCounterMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
        <div>Fill me</div>
    `;
}
