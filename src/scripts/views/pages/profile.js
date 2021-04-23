import '../../components/ptr-navprofile';
import '../../components/ptr-storyprofile';
import '../../components/ptr-postprofile';
import '../../components/ptr-menu';
import MenuInitiator from '../../utils/menu-initiator';
import ProfileOwnerInitiator from '../../utils/profileowner-initiator';
import ProfileGuestInitiator from '../../utils/profileguest-initiator';
import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import Alert from '../../utils/alert-initiator';
import CONFIG from '../../globals/config';

const Profile = {
    async render() {
        return `
            <div id="profile_page"></div>
        `;
    },

    async loadData() {
        const profile_page = document.querySelector('#profile_page');
        const url = UrlParser.parseActiveUrlWithoutCombiner();

        let form_data = {
            username: url.id
        }

        try {
            const datas = await DataSource.loadProfile(form_data);
            datas.forEach( data => {
                const NavElement = document.createElement('ptr-navprofile');
                NavElement.data = data;
                profile_page.appendChild(NavElement);
            });
        } catch (error) {
            Alert.show('error', error);
        }

        const StoryElement = document.createElement('ptr-storyprofile');
        profile_page.appendChild(StoryElement);

        const PostElement = document.createElement('ptr-postprofile');
        profile_page.appendChild(PostElement);

        const MenuElement = document.createElement('ptr-menu');
        profile_page.appendChild(MenuElement);
    },

    async actionHandler() {
        MenuInitiator.init({
            home: document.querySelector('#home'),
            explore: document.querySelector('#explore'),
            posting: document.querySelector('#posting'),
            activity: document.querySelector('#activity'),
            profile: document.querySelector('#profile'),
            modals: document.querySelector('#modals')
        });

        const url = UrlParser.parseActiveUrlWithoutCombiner();
        if (url.id === CONFIG.USERNAME) {
            ProfileOwnerInitiator.init({
                add_story: document.querySelector('#add_story'),
                logo: document.querySelector('#logo'),
                message: document.querySelector('#message'),
                signout: document.querySelector('#signout'),
                edit_profile: document.querySelector('#edit_profile')
            });
        } else {
            ProfileGuestInitiator.init({
                logo: document.querySelector('#logo'),
                message: document.querySelector('#message'),
                back: document.querySelector('#back'),
                more: document.querySelector('#more'),
                follow: document.querySelector('#follow'),
                unfollow: document.querySelector('#unfollow')
            });
        }
    },
}

export default Profile;