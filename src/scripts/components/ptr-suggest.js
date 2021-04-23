import CONFIG from '../globals/config';

class PtrSuggest extends HTMLElement {
    constructor() {
        super();
    }

    set data(value) {
        this._data = value;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="item">
                <div class="photo" uname="${this._data.username}">
                    <img src="${CONFIG.PROFILE_URL + this._data.photo}" alt="photo" />
                </div>
                <div class="name" uname="${this._data.username}">
                    <p>${this._data.name}</p>
                </div>
                <div class="follow">
                    <button class="btn follow_suggest" iduser="${this._data.id_user}">Follow</button>
                </div>
            </div>
        `;
    }
}

customElements.define('ptr-suggest', PtrSuggest);