import feather from "feather-icons/dist/feather-sprite.svg";
import CONFIG from '../globals/config';

class PtrPost extends HTMLElement {
    constructor() {
        super();
    }

    set data(value) {
        this._data = value;
        this._love = (value.love == 0 ? 'style="display: none;"' : '');
        this._comment = (value.comment == 0 ? 'style="display: none;"' : '');
        this._caption = (value.caption == '' ? 'style="display: none;"' : '');
        this._liked = (value.liked == 1 ? 'filled red' : '');
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="post">
                <div class="header">
                    <div class="account">
                        <div class="photo_ava" uname="${this._data.username}">
                            <img src="${CONFIG.PROFILE_URL + this._data.photo_profile}" alt="avatar" id="avatar" />
                        </div>
                        <div class="name" uname="${this._data.username}">
                            <p>${this._data.username}</p>
                        </div>
                    </div>
                    <div class="option">
                        <svg class="feather">
                            <use xlink:href="${feather}#more-vertical"/>
                        </svg>
                    </div>
                </div>
                <div class="photo">
                    <img src="${CONFIG.POST_URL + this._data.photo}" alt="photo" />
                </div>
                <div class="features">
                    <div class="love_comment">
                        <div class="features_item love" idpost="${this._data.id_post}" liked="${this._data.liked}">
                            <svg class="feather ${this._liked}">
                                <use xlink:href="${feather}#heart"/>
                            </svg>
                        </div>
                        <div class="features_item comment" idpost="${this._data.id_post}">
                            <svg class="feather">
                                <use xlink:href="${feather}#message-circle"/>
                            </svg>
                        </div>
                        <div class="features_item message">
                            <svg class="feather">
                                <use xlink:href="${feather}#send"/>
                            </svg>
                        </div>
                    </div>
                    <div class="bookmark">
                        <svg class="feather">
                            <use xlink:href="${feather}#bookmark"/>
                        </svg>
                    </div>
                </div>
                <div class="likes" ${this._love} idpost="${this._data.id_post}">
                    <p>${this._data.love} likes</p>
                </div>
                <div class="caption" ${this._caption}>
                    <p><b>${this._data.username}</b> ${this._data.caption}</p>
                </div>
                <div class="comment_all" ${this._comment} idpost="${this._data.id_post}">
                    <p>View all ${this._data.comment} comments</p>
                </div>
                <div class="times">
                    <p>${this._data.date_post}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('ptr-post', PtrPost);