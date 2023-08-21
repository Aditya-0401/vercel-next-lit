import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('pw-button')
class PWButton extends LitElement {
    override createRenderRoot() {
        return this; // Attach template to the Light DOM for child component
    }

    constructor() {
        super();
        console.log(this);
    }

    override render() {
        return html`
            <button>btn</button>
        `;
    }
}
  
export default PWButton
