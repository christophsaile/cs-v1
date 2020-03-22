import Component, { createRef } from "@biotope/element";
import template from "./template";
import * as ScrollMagic from "scrollmagic";
import { debounce } from "../../resources/js/debounce";

import {
	PortfolioCounterNavProps,
	PortfolioCounterNavState,
	PortfolioCounterNavMethods
} from "./defines";

class PortfolioCounterNav extends Component<
	PortfolioCounterNavProps,
	PortfolioCounterNavState
> {
	static componentName = "portfolio-counter-nav";

	static attributes = [
		"current-page",
		"last-page",
		{ name: "menu-open", type: "boolean" }
	];

	public methods: PortfolioCounterNavMethods = {};

	public counter: HTMLElement;

	private refs = {
		counterRef: createRef<HTMLElement>(),
		counterFirstItemRef: createRef<HTMLElement>(),
		counterLastItemRef: createRef<HTMLElement>()
	};

	public allPages: NodeListOf<HTMLElement>;

	ready() {
		this.allPages = document.querySelectorAll(".fullpage");
		this.setLastPageNumber();
		this.initScrollAnimation();
		this.changeColor();
	}

	public setLastPageNumber = () => {
		const allPagesNumber = this.allPages.length.toString();
		this.refs.counterLastItemRef.current.innerHTML = "0" + allPagesNumber;
	};

	public initScrollAnimation() {
		const currentPage = this.refs.counterFirstItemRef.current;
		const lastPage = this.refs.counterLastItemRef.current;

		let controller = new ScrollMagic.Controller();

		this.allPages.forEach((element, index) => {
			let scene = new ScrollMagic.Scene({
				triggerElement: element,
				duration: "100%",
				triggerHook: 0.5
			})
				.addTo(controller)
				.on("enter", function() {
					currentPage.innerHTML = "0" + (index + 1);
					currentPage.setAttribute("href", element.id);
				});
		});

		let footer = new ScrollMagic.Scene({
			triggerElement: "#footer",
			duration: "100%",
			triggerHook: 0.55
		})
			.setClassToggle(lastPage, "changeColor")
			.addTo(controller);
	}

	public changeColor = () => {
		let controller = new ScrollMagic.Controller();
		let scene = null;
		const colorChangeSections = document.querySelectorAll(
			".colorChangeSection"
		);

		if (window.innerWidth < 768) {
			colorChangeSections.forEach(section => {
				scene = new ScrollMagic.Scene({
					triggerElement: section,
					triggerHook: 0.5,
					duration: "100%"
				})
					.setClassToggle(
						this.refs.counterLastItemRef.current,
						"changeColorScroll"
					)
					.addTo(controller);
			});
		}

		window.addEventListener(
			"resize",
			debounce(() => {
				if (window.innerWidth > 768) {
					if (scene) {
						scene.destroy(true);
						scene = null;
						controller.destroy(true);
						controller = null;
					}
				} else {
					if (!controller) {
						controller = new ScrollMagic.Controller();
					}
					colorChangeSections.forEach(section => {
						scene = new ScrollMagic.Scene({
							triggerElement: section,
							triggerHook: 0.5,
							duration: "100%"
						})
							.setClassToggle(
								this.refs.counterLastItemRef.current,
								"changeColorScroll"
							)
							.addTo(controller);
					});
				}
			}, 250)
		);
	};

	get defaultState() {
		return {};
	}

	get defaultProps() {
		return {
			currentPage: null,
			menuOpen: false
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

export default PortfolioCounterNav;
