import { Element as PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/mui-grid-fluid-6x1/mui-grid-fluid-6x1.html"

export class MuiGridFluid6x1 extends PolymerElement {
    static get observers(){}
	static get template(){
            return template_string
	}
	static get properties() {
    	return {
    	    name: String
	    }
	}
}

customElements.define("mui-grid-fluid-6x1", MuiGridFluid6x1)
