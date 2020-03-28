import Component, { HTMLFragment } from "@biotope/element";
import { template } from "./template";
import {
	PortfolioIntroProps,
	PortfolioIntroState,
	PortfolioIntroMethods
} from "./defines";

class PortfolioIntro extends Component<
	PortfolioIntroProps,
	PortfolioIntroState
> {
	public static componentName = "portfolio-intro";
	public static attributes = [];

	protected readonly defaultProps: PortfolioIntroProps = {};

	protected readonly defaultState: PortfolioIntroState = {};

	public methods: PortfolioIntroMethods = {};

	public paths: NodeListOf<SVGPathElement>;

	ready() {
		this.paths = this.shadowRoot.querySelectorAll("svg path");
		this.paths.forEach(element => {
      let length = element.getTotalLength();
      element.style.cssText = "stroke-dasharray:"+length+"; stroke-dashoffset:"+length;
		});
	}

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state, ...this.methods });
	}
}

export default PortfolioIntro;
