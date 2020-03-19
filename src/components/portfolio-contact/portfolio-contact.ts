import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { PortfolioContactProps, PortfolioContactState, PortfolioContactMethods } from './defines';
import PortfolioHeadline from '../portfolio-headline/portfolio-headline';

class PortfolioContact extends Component< PortfolioContactProps, PortfolioContactState > {
  public static componentName = 'portfolio-contact';
  public static attributes = [];
  public static dependencies = [
		PortfolioHeadline as typeof Component,
	]
  
  protected readonly defaultProps: PortfolioContactProps = {};
   
  protected readonly defaultState: PortfolioContactState = {};

  public methods: PortfolioContactMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

export default PortfolioContact;
