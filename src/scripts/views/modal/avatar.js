import Alert from '../../utils/alert-initiator.js';
import DataSource from '../../data/data-source.js';
import Ava from '../../../public/images/avatar.png';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import SessionIdb from '../../data/session-idb.js';
defineCustomElements(window);

const Avatar = {
    async render() {
        return `
            <div class="modal show" id="modal">
                <div class="modal_card">
                    <div class="header">
                        <span class="title">Upload Avatar</span>
                        <span class="close" id="close_modal"><i class="fa fa-times"></i></span>
                    </div>
                    <div class="body">
                        <div class="con_avatar">
                            <div class="frame_avatar">
                                <img id="photo" src="${Ava}" alt="photo" />
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <button class="btn" id="save">Save</button>
                    </div>
                </div>
            </div>
        `;
    },

    async actionHandler(iduser, username) {
        const modal = document.querySelector('#modal');
        const close_modal = document.querySelector('#close_modal');
        const photo = document.querySelector('#photo');
        const save = document.querySelector('#save');

        close_modal.addEventListener('click', () => {
            modal.remove();
        });

        photo.addEventListener('click', async () => {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.DataUrl
            });
            photo.src = image.dataUrl;
        });

        save.addEventListener('click', async () => {
            let src = photo.src.split(';base64,');
            let str = photo.src.substring(photo.src.indexOf(":")+1, photo.src.indexOf(";"));
            let ext = str.split('/');
            let form_data = {
                iduser: iduser,
                username: username,
                photo: src[1],
                ext: ext[1]
            }
    
            try {
                const data = await DataSource.saveAvatar(form_data);
                if (data.status === 'success') {
                    let session_data = {
                        id: data.username,
                        token: data.jwt
                    }
                    await SessionIdb.putData(session_data);
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                } else {
                    Alert.show('info', data.message);
                }
            } catch (error) {
                Alert.show('error', error);
            }
        });
    },

};

export default Avatar;