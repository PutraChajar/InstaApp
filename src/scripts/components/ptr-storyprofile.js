import './ptr-story';

class PtrStoryProfile extends HTMLElement {
    async connectedCallback() {
        await this.render();
        await this.afterRender();
    }

    render() {
        this.innerHTML = `
            <div class="storyprofile" id="storyprofile"></div>
        `;
    }

    afterRender() {
        const storyprofile = document.querySelector('#storyprofile');

        for (let i = 0; i < 8; i++) {
            const StoryElement = document.createElement('ptr-story');
            storyprofile.appendChild(StoryElement);
        }
    }
}

customElements.define('ptr-storyprofile', PtrStoryProfile);