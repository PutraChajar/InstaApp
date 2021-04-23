import './ptr-story';
import img from '../../public/images/instaapp.png';
import feather from "feather-icons/dist/feather-sprite.svg";

class PtrNav extends HTMLElement {
    async connectedCallback() {
        await this.render();
        await this.afterRender();
    }

    render() {
        this.innerHTML = `
            <nav>
                <div class="navbar">
                    <div class="menu_item" id="add_story">
                        <svg class="feather">
                            <use xlink:href="${feather}#camera"/>
                        </svg>
                    </div>
                    <img src="${img}" alt="logo" class="logo" id="logo">
                    <div class="menu_item" id="message">
                        <svg class="feather">
                            <use xlink:href="${feather}#send"/>
                        </svg>
                    </div>
                </div>
                <div class="story" id="story_list"></div>
            </nav>
        `;
    }

    afterRender() {
        const story_list = document.querySelector('#story_list');

        for (let i = 0; i < 8; i++) {
            const StoryElement = document.createElement('ptr-story');
            story_list.appendChild(StoryElement);
        }
    }
}

customElements.define('ptr-nav', PtrNav);