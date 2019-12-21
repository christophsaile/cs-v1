import * as styles from './styles.scss';

import { HeaderNavigationProps, HeaderNavigationState, HeaderNavigationMethods } from './defines';


export default (render: Function, data: HeaderNavigationProps & HeaderNavigationState & HeaderNavigationMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
        <div>navigatoin header</div>
    `;
}
