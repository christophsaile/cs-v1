import Component from '@biotope/element';
import template from './template';

import { ButtonLinkProps, ButtonLinkState, ButtonLinkMethods } from './defines';



class ButtonLink extends Component< ButtonLinkProps, ButtonLinkState > {
    static componentName = 'button-link';

    static attributes = [

    ];

    public methods: ButtonLinkMethods = {

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

export default ButtonLink;
