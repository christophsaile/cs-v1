import * as styles from "./styles.scss";

import { PortfolioArrowNavProps, PortfolioArrowNavState, PortfolioArrowNavMethods } from "./defines";

export default (
	render: Function,
	data: PortfolioArrowNavProps & PortfolioArrowNavState & PortfolioArrowNavMethods,
	refs: any,
	createStyle: Function
) => {
	return render`
		${createStyle(styles)}
		<div>
			<div class="showMore" ref=${refs.showMoreRef}>
				<span class="showMore__text">${data.text}</span>
				<svg class="showMore__icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
			</div>
		</div>
    `;
};
