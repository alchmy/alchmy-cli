import { Element as PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/mdc-grid-tile/mdc-grid-tile.html"

export class MdcGridTile extends PolymerElement {
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

customElements.define("mdc-grid-tile", MdcGridTile)
