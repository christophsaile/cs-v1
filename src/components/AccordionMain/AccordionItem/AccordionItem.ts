import Component from '@biotope/element';
import template from './template';

import { AccordionItemProps, AccordionItemState, AccordionItemMethods } from './defines';



class AccordionItem extends Component< AccordionItemProps, AccordionItemState > {
    static componentName = 'accordion-item';

    static attributes = [

    ];

    public methods: AccordionItemMethods = {

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

export default AccordionItem;
