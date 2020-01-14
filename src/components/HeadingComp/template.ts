import * as styles from './styles.scss';

import { HeadingCompProps, HeadingCompState, HeadingCompMethods } from './defines';
import Component from '@biotope/element';

export default (render: Function, data: HeadingCompProps & HeadingCompState & HeadingCompMethods , createStyle: Function) => {
    return render`
        ${createStyle(styles)}
		${data.type === "h1" ? Component.wire()`
			<h1 class=${` ${data.hasStyle ? "styled" : ""} ${data.noMargin ? "noMargin" : ""}`}>
				<slot/>
			</h1>
		`: null}
		${data.type === "h2" ? Component.wire()`
			<h2 class=${` ${data.hasStyle ? "styled" : ""} ${data.noMargin ? "noMargin" : ""} `}>
				<slot/>
			</h2>
		`: null}
		${data.type === "h3" ? Component.wire()`
			<h3 class=${` ${data.hasStyle ? "styled" : ""} ${data.noMargin ? "noMargin" : ""}`}>
				<slot/>
			</h3>
		`: null}
		${data.type === "h4" ? Component.wire()`
			<h4 class=${` ${data.hasStyle ? "styled" : ""} ${data.noMargin ? "noMargin" : ""}`}>
				<slot/>
			</h4>
		`: null}
		${data.type === "h5" ? Component.wire()`
			<h5 class=${` ${data.hasStyle ? "styled" : ""} ${data.noMargin ? "noMargin" : ""}`}>
				<slot/>
			</h5>
		`: null}
    `;
}
