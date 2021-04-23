import feather from "feather-icons/dist/feather-sprite.svg";
import CONFIG from "../globals/config";

class PtrPhoto extends HTMLElement {
    constructor() {
        super();
    }

    set data(value) {
        this._data = value;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="post_photo">
                <div class="photo">
                    <img src="${CONFIG.POST_URL + this._data.photo}" alt="photo" />
                </div>
                <div class="info">
                    <span class="info_like">
                        <svg class="feather filled white">
                            <use xlink:href="${feather}#heart"/>
                        </svg>
                        <p>${this._data.love}</p>
                    </span>
                    <span class="info_comment">
                        <svg class="feather filled white">
                            <use xlink:href="${feather}#message-circle"/>
                        </svg>
                        <p>${this._data.comment}</p>
                    </span>
                </div>
            </div>
        `;
    }
}

customElements.define('ptr-photo', PtrPhoto);