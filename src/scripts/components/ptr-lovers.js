import CONFIG from "../globals/config";

class PtrLovers extends HTMLElement {
    constructor() {
        super();
    }

    set data(value) {
        this._data = value;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="lovers_item">
                <img src="${CONFIG.PROFILE_URL + this._data.photo}" alt="avatar" />
                <div class="lovers_name">
                    <p class="username">${this._data.username}</p>
                    <p class="name">${this._data.name}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('ptr-lovers', PtrLovers);