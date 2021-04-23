import logo from '../../public/images/logo.png';

class PtrStory extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="story_item">
                <div class="story_circ">
                    <img src="${logo}" alt="story" />
                </div>
                <div class="story_name">
                    <p>Putra</p>
                </div>
            </div>
        `;
    }
}

customElements.define('ptr-story', PtrStory);