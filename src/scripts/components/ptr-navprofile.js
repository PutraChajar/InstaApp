import img from '../../public/images/instaapp.png';
import feather from "feather-icons/dist/feather-sprite.svg";
import CONFIG from '../globals/config';
import UrlParser from '../routes/url-parser';

class PtrNavProfile extends HTMLElement {
    constructor() {
        super();
    }

    set data(value) {
        this._data = value;
        console.log(value);
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        url.id === CONFIG.USERNAME ? this.renderOwner() : this.renderGuest();
    }

    renderOwner() {
        this.innerHTML = `
            <nav class="navprofile">
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
                <div class="profile">
                    <div class="name">
                        <p>${this._data.name}</p>
                    </div>
                    <div class="info">
                        <div class="info_item">
                            <p class="value">${this._data.follower}</p>
                            <p class="note">Followers</p>
                        </div>
                        <div class="info_item">
                            <p class="value">${this._data.posts}</p>
                            <p class="note">Posts</p>
                        </div>
                        <div class="info_item">
                            <p class="value">${this._data.following}</p>
                            <p class="note">Following</p>
                        </div>
                    </div>
                    <div class="fitur">
                        <button class="btn" id="signout">Sign out</button>
                        <div class="photo">
                            <img src="${CONFIG.PROFILE_URL + this._data.photo}" alt="photo" />
                        </div>
                        <button class="btn" id="edit_profile">Edit Profile</button>
                    </div>
                </div>
            </nav>
        `;
    }

    renderGuest() {
        this.innerHTML = `
            <nav class="navprofile">
                <div class="navbar">
                    <div class="menu_item" id="back">
                        <svg class="feather">
                            <use xlink:href="${feather}#arrow-left"/>
                        </svg>
                    </div>
                    <img src="${img}" alt="logo" class="logo" id="logo">
                    <div class="menu_item" id="more">
                        <svg class="feather">
                            <use xlink:href="${feather}#more-vertical"/>
                        </svg>
                    </div>
                </div>
                <div class="profile">
                    <div class="name">
                        <p>${this._data.name}</p>
                    </div>
                    <div class="info">
                        <div class="info_item">
                            <p class="value">${this._data.follower}</p>
                            <p class="note">Followers</p>
                        </div>
                        <div class="info_item">
                            <p class="value">${this._data.posts}</p>
                            <p class="note">Posts</p>
                        </div>
                        <div class="info_item">
                            <p class="value">${this._data.following}</p>
                            <p class="note">Following</p>
                        </div>
                    </div>
                    <div class="fitur">
                        <button class="btn" id="message">Message</button>
                        <div class="photo">
                            <img src="${CONFIG.PROFILE_URL + this._data.photo}" alt="photo" />
                        </div>
                        <button class="btn" id="follow" iduser=${this._data.id_user}>Follow</button>
                        <button class="btn" id="unfollow" iduser=${this._data.id_user} style="display: none;">Unfollow</button>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('ptr-navprofile', PtrNavProfile);