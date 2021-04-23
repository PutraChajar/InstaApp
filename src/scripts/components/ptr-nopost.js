import feather from "feather-icons/dist/feather-sprite.svg";

class PtrNoPost extends HTMLElement {
    async connectedCallback() {
        await this.render();
    }

    render() {
        this.innerHTML = `
            <div class="nopost">
                <div class="circle">
                    <svg class="feather large">
                        <use xlink:href="${feather}#camera"/>
                    </svg>
                </div>
                <div class="text">
                    <p>No Posts Yet</p>
                </div>
            </div>
        `;
    }
}

customElements.define('ptr-nopost', PtrNoPost);