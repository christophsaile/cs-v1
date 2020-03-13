import Component, { HTMLFragment, createRef } from "@biotope/element";
import { template } from "./template";
import {
	PortfolioNavigationProps,
	PortfolioNavigationState,
	PortfolioNavigationMethods
} from "./defines";
import PortfolioHeaderNav from "../portfolio-header-nav/portfolio-header-nav";
import PortfolioCounterNav from "../portfolio-counter-nav/portfolio-counter-nav";
import PortfolioArrowNav from "../portfolio-arrow-nav/portfolio-arrow-nav";

class PortfolioNavigation extends Component<
	PortfolioNavigationProps,
	PortfolioNavigationState
> {
	public static componentName = "portfolio-navigation";
	public static attributes = [];
	public static dependencies = [
		PortfolioHeaderNav as typeof Component,
		PortfolioCounterNav as typeof Component,
		PortfolioArrowNav as typeof Component
	];

	protected readonly defaultProps: PortfolioNavigationProps = {};

	protected readonly defaultState: PortfolioNavigationState = {};

	public methods: PortfolioNavigationMethods = {};

	private refs = {
		navRef: createRef<HTMLElement>(),
		counterRef: createRef<HTMLElement>(),
		arrowRef: createRef<HTMLElement>()
	};

	ready() {
		this.refs.navRef.current.addEventListener(
			"isNavOpen",
			(event: CustomEvent) => {
				if (
					this.refs.counterRef.current.shadowRoot.querySelector(
						".whiteTextScroll"
					) === null
				) {
					event.detail
						? this.refs.counterRef.current.setAttribute(
								"white-text",
								"true"
						  )
						: this.refs.counterRef.current.setAttribute(
								"white-text",
								"false"
						  );
				}
				if (
					this.refs.arrowRef.current.shadowRoot.querySelector(
						".whiteTextScroll"
					) === null
				) {
					event.detail
						? this.refs.arrowRef.current.setAttribute(
								"white-text",
								"true"
						  )
						: this.refs.arrowRef.current.setAttribute(
								"white-text",
								"false"
						  );
				}
			}
		);
	}

	public render(): HTMLFragment {
		return template(
			{ ...this.props, ...this.state, ...this.methods },
			this.refs
		);
	}
}
export default PortfolioNavigation;
