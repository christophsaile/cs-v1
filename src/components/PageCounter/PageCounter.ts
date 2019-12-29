import Component from '@biotope/element';
import template from './template';

import { PageCounterProps, PageCounterState, PageCounterMethods } from './defines';



class PageCounter extends Component< PageCounterProps, PageCounterState > {
    static componentName = 'page-counter';

    static attributes = [

    ];

    public methods: PageCounterMethods = {

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

export default PageCounter;
