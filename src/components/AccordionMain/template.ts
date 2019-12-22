import * as styles from './styles.scss';

import { AccordionMainProps, AccordionMainState, AccordionMainMethods } from './defines';


export default (render: Function, data: AccordionMainProps & AccordionMainState & AccordionMainMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
        <div>Fill me</div>
    `;
}
