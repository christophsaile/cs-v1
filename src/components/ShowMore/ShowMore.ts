import Component from '@biotope/element';
import template from './template';

import { ShowMoreProps, ShowMoreState, ShowMoreMethods } from './defines';



class ShowMore extends Component< ShowMoreProps, ShowMoreState > {
    static componentName = 'show-more';

    static attributes = [

    ];

    public methods: ShowMoreMethods = {

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

export default ShowMore;
