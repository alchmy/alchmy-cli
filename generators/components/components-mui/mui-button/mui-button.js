import { Element as PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/mui-button/mui-button.html"

export class MuiButton extends PolymerElement {
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

customElements.define("mui-button", MuiButton)
