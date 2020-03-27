import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { PortfolioLoaderProps, PortfolioLoaderState, PortfolioLoaderMethods } from './defines';

class PortfolioLoader extends Component< PortfolioLoaderProps, PortfolioLoaderState > {
  public static componentName = 'portfolio-loader';
  public static attributes = [];
  
  protected readonly defaultProps: PortfolioLoaderProps = {};
   
  protected readonly defaultState: PortfolioLoaderState = {};

  public methods: PortfolioLoaderMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

export default PortfolioLoader;
