import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { PortfolioTimelineProps, PortfolioTimelineState, PortfolioTimelineMethods } from './defines';

class PortfolioTimeline extends Component< PortfolioTimelineProps, PortfolioTimelineState > {
  public static componentName = 'portfolio-timeline';
	public static attributes = ["img-name", "img-alt"];
  
  protected readonly defaultProps: PortfolioTimelineProps = {
    imgName: "",
		imgAlt: ""
  };

  protected readonly defaultState: PortfolioTimelineState = {};

  public methods: PortfolioTimelineMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

export default PortfolioTimeline;
