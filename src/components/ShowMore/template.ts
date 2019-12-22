import * as styles from './styles.scss';

import { ShowMoreProps, ShowMoreState, ShowMoreMethods } from './defines';


export default (render: Function, data: ShowMoreProps & ShowMoreState & ShowMoreMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
        <div>Fill me with content</div>
    `;
}
