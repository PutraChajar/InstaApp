import DataSource from '../data/data-source';
import Alert from './alert-initiator';
import LinkInitiator from './link-initiator';

const ProfileGuestInitiator = {
    init({logo, message, back, more, follow, unfollow}) {
        logo.addEventListener('click', () => {
            LinkInitiator.init(`home`);
        });

        message.addEventListener('click', () => {
            // alert('message');
        });

        back.addEventListener('click', () => {
            window.history.back();
        });

        more.addEventListener('click', () => {
            // alert('more');
        });

        follow.addEventListener('click', async function() {
            let iduser = this.getAttribute('iduser');
            let form_data = {
                iduser: iduser
            }

            try {
                const data = await DataSource.follow(form_data);
                if (data.status === 'success') {
                    location.reload();
                } else {
                    Alert.show('info', data.message);
                }
            } catch (error) {
                Alert.show('error', error);
            }
        });

        unfollow.addEventListener('click', async function() {
            let iduser = this.getAttribute('iduser');
            let form_data = {
                iduser: iduser
            }

            try {
                const data = await DataSource.unfollow(form_data);
                if (data.status === 'success') {
                    location.reload();
                } else {
                    Alert.show('info', data.message);
                }
            } catch (error) {
                Alert.show('error', error);
            }
        });
    },
}

export default ProfileGuestInitiator;