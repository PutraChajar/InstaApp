import feather from "feather-icons/dist/feather-sprite.svg";

class PtrMenu extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="menu">
                <div class="submenu">
                    <div class="menu_item">
                        <svg class="feather" id="home">
                            <use xlink:href="${feather}#home"/>
                        </svg>
                    </div>
                    <div class="menu_item" id="explore">
                        <svg class="feather">
                            <use xlink:href="${feather}#search"/>
                        </svg>
                    </div>
                    <div class="menu_item menu_main" id="posting">
                        <svg class="feather large">
                            <use xlink:href="${feather}#plus"/>
                        </svg>
                    </div>
                    <div class="menu_item" id="activity">
                        <svg class="feather">
                            <use xlink:href="${feather}#heart"/>
                        </svg>
                    </div>
                    <div class="menu_item" id="profile">
                        <svg class="feather">
                            <use xlink:href="${feather}#user"/>
                        </svg>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('ptr-menu', PtrMenu);