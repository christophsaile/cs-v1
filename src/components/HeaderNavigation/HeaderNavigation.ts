import Component from '@biotope/element';
import template from './template';

import { HeaderNavigationProps, HeaderNavigationState, HeaderNavigationMethods } from './defines';



class HeaderNavigation extends Component< HeaderNavigationProps, HeaderNavigationState > {
    static componentName = 'header-navigation';

    static attributes = [

    ];

    public methods: HeaderNavigationMethods = {

    };
   
    get defaultState() {
        return {

        }
    }
  
    get defaultProps() {
        return {

        }
    }

    render() {
        return template(this.html, { ...this.props, ...this.state, ...this.methods }, this.createStyle);
    }
}

export default HeaderNavigation;
