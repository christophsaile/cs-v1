import Component from '@biotope/element';
import template from './template';

import { AccordionMainProps, AccordionMainState, AccordionMainMethods } from './defines';



class AccordionMain extends Component< AccordionMainProps, AccordionMainState > {
    static componentName = 'accordion-main';

    static attributes = [

    ];

    public methods: AccordionMainMethods = {

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

export default AccordionMain;
