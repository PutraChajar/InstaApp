import CONFIG from "../globals/config";

class PtrComment extends HTMLElement {
    constructor() {
        super();
    }

    set data(value) {
        this._data = value;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="comment_item">
                <img src="${CONFIG.PROFILE_URL + this._data.photo}" alt="avatar" />
                <p><b>${this._data.username}</b> ${this._data.comment}</p>
            </div>
        `;
    }
}

customElements.define('ptr-comment', PtrComment);