import * as styles from './styles.scss';

import { ButtonLinkProps, ButtonLinkState, ButtonLinkMethods } from './defines';


export default (render: Function, data: ButtonLinkProps & ButtonLinkState & ButtonLinkMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
        <a 	href="${data.href}" class="${`btn ${data.modifier}`}">${data.title}</a>
    `;
}
