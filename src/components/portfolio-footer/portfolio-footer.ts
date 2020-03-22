import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { PortfolioFooterProps, PortfolioFooterState, PortfolioFooterMethods } from './defines';

class PortfolioFooter extends Component< PortfolioFooterProps, PortfolioFooterState > {
  public static componentName = 'portfolio-footer';
  public static attributes = [];
  
  protected readonly defaultProps: PortfolioFooterProps = {};
   
  protected readonly defaultState: PortfolioFooterState = {};

  public methods: PortfolioFooterMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

export default PortfolioFooter;
