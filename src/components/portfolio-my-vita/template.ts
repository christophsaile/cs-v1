import * as styles from "./styles.scss";

import { PortfolioMyVitaProps, PortfolioMyVitaState, PortfolioMyVitaMethods } from "./defines";

export default (
	render: Function,
	data: PortfolioMyVitaProps & PortfolioMyVitaState & PortfolioMyVitaMethods,
	refs: any,
	createStyle: Function
) => {
	return render`
        ${createStyle(styles)}
        <div class="vita">
			<div class="scroll-trigger" ref=${refs.scrollTriggerRef}>
				<article class=${`vita__container animated ${data.position} ${data.theme}`} ref=${refs.animationRef}>
					<slot />	
				</article>
			</div>
		</div>
    `;
};
