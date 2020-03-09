import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { PortfolioNavigationProps, PortfolioNavigationState, PortfolioNavigationMethods } from './defines';
import PortfolioHeaderNav from '../portfolio-header-nav/portfolio-header-nav';
import PortfolioCounterNav from '../portfolio-counter-nav/portfolio-counter-nav';
import PortfolioArrowNav from '../portfolio-arrow-nav/portfolio-arrow-nav';

class PortfolioNavigation extends Component< PortfolioNavigationProps, PortfolioNavigationState > {
  public static componentName = 'portfolio-navigation';
  public static attributes = [];
  public static dependencies = [
    PortfolioHeaderNav as typeof Component,
    PortfolioCounterNav as typeof Component,
    PortfolioArrowNav as typeof Component,
  ]
  
  protected readonly defaultProps: PortfolioNavigationProps = {};
   
  protected readonly defaultState: PortfolioNavigationState = {};

  public methods: PortfolioNavigationMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}
export default PortfolioNavigation

