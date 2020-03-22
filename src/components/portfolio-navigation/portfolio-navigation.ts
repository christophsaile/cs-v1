import Component, { HTMLFragment, createRef } from "@biotope/element";
import { template } from "./template";
import { debounce } from "../../resources/js/debounce";
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
		this.isNavOpen();
		this.colorChange();

		window.addEventListener(
			"resize",
			debounce(() => {
				this.colorChange();
			}, 250)
		);
	}

	private colorChange = () => {
		const colorChangeSections = ["#aboutMe", "#contact"];

		colorChangeSections.forEach(section => {
			document.querySelector(section).classList.add("colorChangeSection");
		});
	};

	private isNavOpen = () => {
		this.refs.navRef.current.addEventListener(
			"isNavOpen",
			(event: CustomEvent) => {
				let array = [
					this.refs.counterRef.current,
					this.refs.arrowRef.current
				];
				array.forEach(element => {
					event.detail
						? element.setAttribute("menu-open", "true")
						: element.setAttribute("menu-open", "false");
				});
			}
		);
	};
	
	public render(): HTMLFragment {
		return template(
			{ ...this.props, ...this.state, ...this.methods },
			this.refs
		);
	}
}
export default PortfolioNavigation;
