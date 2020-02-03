import Component, { createRef } from "@biotope/element";
import template from "./template";
import { debounce } from "../../resources/js/debounce";

import { ShowMoreProps, ShowMoreState, ShowMoreMethods } from "./defines";

class ShowMore extends Component<ShowMoreProps, ShowMoreState> {
	static componentName = "show-more";

	static attributes = ["text"];

	public methods: ShowMoreMethods = {};
	public showMore: HTMLElement;
	public showMoreHeight: number;
	public prevScrollPos: number;
	public currentScrollPos: number;

	private refs = {
		showMoreRef: createRef<HTMLElement>(),
	};
	rendered() {
		this.showMore = this.refs.showMoreRef.current;
		this.showMoreHeight = this.showMore.offsetHeight;
		this.prevScrollPos = window.innerHeight / 10;

		this.scrollDown();
	}
	public scrollDown() {
		window.addEventListener(
			"scroll",
			debounce(() => {
				this.currentScrollPos = window.pageYOffset;
				if (this.prevScrollPos > this.currentScrollPos) {
					this.showMore.classList.remove("showMore--scrollActive");
					this.showMore.style.bottom = "";
				} else {
					this.showMore.classList.add("showMore--scrollActive");
					this.showMore.style.bottom =
						"-" + this.showMoreHeight + "px";
				}
			}, 300)
		);

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
		return {
			text: null
		};
	}

	render() {
		return template(
			this.html,
			{ ...this.props, ...this.state, ...this.methods },
			this.refs,
			this.createStyle
		);
	}
}

export default ShowMore;
