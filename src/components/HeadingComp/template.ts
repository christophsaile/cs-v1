import * as styles from './styles.scss';

import { HeadingCompProps, HeadingCompState, HeadingCompMethods } from './defines';
import Component from '@biotope/element';

export default (render: Function, data: HeadingCompProps & HeadingCompState & HeadingCompMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
		${data.type === "h1" ? Component.wire()`
		<h1 class=${`h1 ${data.hasStyle ? "h1--styled" : ""}`}>
			${data.text} 
			<br> 
			${data.secondLine}
		</h1>
		`: null}
		${data.type === "h2" ? Component.wire()`
			<h2 class=${`h2 ${data.hasStyle ? "h2--styled" : ""}`}>
				${data.text} 
				<br> 
				${data.secondLine}
			</h2>
		`: null}
		${data.type === "h3" ? Component.wire()`
			<h3 class=${`h3 ${data.hasStyle ? "h3--styled" : ""}`}>
				${data.text} 
				<br> 
				${data.secondLine}
			</h3>
		`: null}
		${data.type === "h4" ? Component.wire()`
			<h4 class=${`h4 ${data.hasStyle ? "h4--styled" : ""}`}>
				${data.text} 
				<br> 
				${data.secondLine}
			</h4>
		`: null}
		${data.type === "h5" ? Component.wire()`
			<h5 class=${`h5 ${data.hasStyle ? "h5--styled" : ""}`}>
				${data.text} 
				<br> 
				${data.secondLine}
			</h5>
		`: null}
    `;
}
