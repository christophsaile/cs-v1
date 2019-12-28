import * as styles from './styles.scss';

import { HeadingCompProps, HeadingCompState, HeadingCompMethods } from './defines';
import Component from '@biotope/element';

export default (render: Function, data: HeadingCompProps & HeadingCompState & HeadingCompMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
		${data.type === "h1" ? Component.wire()`
			<h1 class=${data.hasStyle ? "h1--styled" : ""}>${data.text}</h1>
		`: null}
		${data.type === "h2" ? Component.wire()`
			<h2 class=${data.hasStyle ? "h2--styled" : ""}>${data.text}</h2>
		`: null}
		${data.type === "h3" ? Component.wire()`
			<h3 class=${data.hasStyle ? "h3--styled" : ""}>${data.text}</h3>
		`: null}
		${data.type === "h4" ? Component.wire()`
			<h4 class=${data.hasStyle ? "h4--styled" : ""}>${data.text}</h4>
		`: null}
		${data.type === "h5" ? Component.wire()`
			<h5 class=${data.hasStyle ? "h5--styled" : ""}>${data.text}</h5>
		`: null}
    `;
}
