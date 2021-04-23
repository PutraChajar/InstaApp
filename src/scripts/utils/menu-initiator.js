import LinkInitiator from './link-initiator';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import CONFIG from '../globals/config';
import Posting from '../views/modal/posting';
defineCustomElements(window);

const MenuInitiator = {
    init({home, explore, posting, activity, profile, modals}) {
        home.addEventListener('click', () => {
            LinkInitiator.init(`home`);
        });

        explore.addEventListener('click', () => {
            // alert('explore');
        });

        posting.addEventListener('click', async () => {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.DataUrl
            });
            
            modals.innerHTML = await Posting.render(image.dataUrl);
            await Posting.actionHandler();
        });

        activity.addEventListener('click', () => {
            // alert('activity');
        });

        profile.addEventListener('click', () => {
            LinkInitiator.init(`profile/${CONFIG.USERNAME}`);
        });
    },
}

export default MenuInitiator;