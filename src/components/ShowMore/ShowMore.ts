import Component from "@biotope/element";
import template from "./template";

import { ShowMoreProps, ShowMoreState, ShowMoreMethods } from "./defines";

class ShowMore extends Component<ShowMoreProps, ShowMoreState> {
	static componentName = "show-more";

	static attributes = [];

	public methods: ShowMoreMethods = {};
	public showMore: HTMLElement;
	public showMoreHeight: number;
	public prevScrollPos: number;
	public currentScrollPos: number;

	connectedCallback() {
		this.showMore = this.shadowRoot.querySelector(".showMore");
		this.showMoreHeight = this.showMore.offsetHeight;
		this.prevScrollPos = window.innerHeight / 10;

		this.scrollDown();
	}
	public scrollDown() {
		window.onscroll = () => {
			this.currentScrollPos = window.pageYOffset;			
			if (this.prevScrollPos > this.currentScrollPos) {
				this.showMore.classList.remove("showMore--scrollActive");
				this.showMore.style.bottom = "";
			} else {
				this.showMore.classList.add("showMore--scrollActive");
				this.showMore.style.bottom = "-"+this.showMoreHeight+"px";
			}
		};
		this.showMore.addEventListener("click", () => {
			window.scrollBy({
				top: window.innerHeight,
				left: 0,
				behavior: "smooth"
			});
		});
	}
	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {};
	}

	render() {
		return template(
			this.html,
			{ ...this.props, ...this.state, ...this.methods },
			this.createStyle
		);
	}
}

export default ShowMore;
