import * as styles from './styles.scss';

import { AccordionItemProps, AccordionItemState, AccordionItemMethods } from './defines';


export default (render: Function, data: AccordionItemProps & AccordionItemState & AccordionItemMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
    `;
}
