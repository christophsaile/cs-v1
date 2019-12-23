import Component from '@biotope/element';
import template from './template';

import { CardComponentProps, CardComponentState, CardComponentMethods } from './defines';



class CardComponent extends Component< CardComponentProps, CardComponentState > {
    static componentName = 'card-component';

    static attributes = [

    ];

    public methods: CardComponentMethods = {

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

export default CardComponent;
