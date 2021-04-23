import DataSource from "../data/data-source";
import Alert from "./alert-initiator";
import LinkInitiator from "./link-initiator";

const SuggestInitiator = {
    init({photo, name, follow}) {
        for (let i = 0; i < photo.length; i++) {
            photo[i].addEventListener('click', function() {
                let username = this.getAttribute('uname');
                LinkInitiator.init(`profile/${username}`);
            });
        };

        for (let i = 0; i < name.length; i++) {
            name[i].addEventListener('click', function() {
                let username = this.getAttribute('uname');
                LinkInitiator.init(`profile/${username}`);
            });
        };

        for (let i = 0; i < follow.length; i++) {
            follow[i].addEventListener('click', async function(e) {
                let iduser = this.getAttribute('iduser');
                let form_data = {
                    iduser: iduser
                }

                try {
                    const data = await DataSource.follow(form_data);
                    if (data.status === 'success') {
                        let parent1 = this.parentNode;
                        let parent2 = parent1.parentNode;
                        parent2.remove();
                    } else {
                        Alert.show('info', data.message);
                    }
                } catch (error) {
                    Alert.show('error', error);
                }
            });
        };
    },
}

export default SuggestInitiator;