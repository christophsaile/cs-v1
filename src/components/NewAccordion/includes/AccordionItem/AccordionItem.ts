import Component, { HTMLFragment, createRef } from '@biotope/element';
import { template } from './template';
import { AccordionItemProps, AccordionItemState, AccordionItemMethods } from './defines';

class AccordionItem extends Component< AccordionItemProps, AccordionItemState > {
  public static componentName = 'accordion-item';
  public static attributes = [];
  
  protected readonly defaultProps: AccordionItemProps = {};
   
  protected readonly defaultState: AccordionItemState = {
	  isOpen: false
  };

  public methods: AccordionItemMethods = {};

  public refs = {
	accordionHeaderRef: createRef<HTMLElement>()
  }
  rendered(){
	console.log(this.refs);

  }

  public render(): HTMLFragment {
	return template( { ...this.props, ...this.state, ...this.methods });
  }
}

export default AccordionItem;
