import SessionIdb from '../data/session-idb.js';
import CONFIG from '../globals/config.js';
import LinkInitiator from './link-initiator.js';

const ProfileOwnerInitiator = {
    init({add_story, logo, message, signout, edit_profile}) {
        add_story.addEventListener('click', () => {
            // alert('add_story');
        });

        logo.addEventListener('click', () => {
            LinkInitiator.init(`home`);
        });

        message.addEventListener('click', () => {
            // alert('message');
        });

        signout.addEventListener('click', async () => {
            await SessionIdb.deleteData(CONFIG.USERNAME);
            location.reload();
        });

        edit_profile.addEventListener('click', () => {
            // alert('edit_profile');
        });
    },
}

export default ProfileOwnerInitiator;