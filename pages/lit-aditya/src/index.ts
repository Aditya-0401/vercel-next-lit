import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/button";
import "./components/demoElement";
import "./components/input";
import "./components/form";
import "./components/card";

@customElement("my-app")
class MyApp extends LitElement {
  override createRenderRoot() {
    return this; // Attach template to the Light DOM for child component
  }

  // override render() {
  //   return html`

  //     <hr/>

  //     <my-element></my-element>
  //     <hr/>

  //     <pw-button>PW Button</pw-button>
  //     <hr/>

  //     <name-tag></name-tag>
  //     <hr/>

  //     <my-form></my-form>
  //   `;
  // }


  override render() {
    return html`
      <div>

        <div>
          <my-form><my-form>
        </div>

        <div>
          <pw-card 
          title="I am tilte" 
          description="I am description" 
          link="https://www.google.com">
          <a href="https://www.linkedin.com">Slot Link: LinkedIn</a>
          </pw-card>
        </div>
      </div>
    `;
  }
}

export default MyApp;
