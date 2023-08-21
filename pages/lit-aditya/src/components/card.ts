import { LitElement, html } from 'lit';
import { customElement, property ,state} from 'lit/decorators.js';

@customElement('pw-card')
export class Card extends LitElement{
  @property() titleName: string = '';
  @property() description: string = '';
  @property() link: string = '';

  @state() stateLink: string = 'https://www.facebook.com';

  override createRenderRoot(){
    return this;
  }

  override render() {
    return html`
      <div>
            <h1>Card Component</h1>
            <div>
                Title: ${this.title}
            </div>
            <div>
                Description: ${this.description}
            </div>
            <a href=${this.link}>Prop Link Google: ${this.link}</a>
            <br />
            <a href=${this.stateLink}>State Link Facebook: ${this.stateLink}</a>
            <div>
                <slot></slot>
            </div>
      </div>
    `;
  }
}