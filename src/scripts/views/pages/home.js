import '../../components/ptr-nav';
import '../../components/ptr-post';
import '../../components/ptr-menu';
import '../../components/ptr-suggestion';
import MenuInitiator from '../../utils/menu-initiator';
import PostInitiator from '../../utils/post-initiator';
import NavInitiator from '../../utils/nav-initiator';
import DataSource from '../../data/data-source';
import Alert from '../../utils/alert-initiator';

const Home = {
    async render() {
        return `
            <div id="home_page"></div>
        `;
    },

    async loadData() {
        const home_page = document.querySelector('#home_page');

        const NavElement = document.createElement('ptr-nav');
        home_page.appendChild(NavElement);

        try {
            const datas = await DataSource.loadPost();
            if (datas.length > 0) {
                datas.forEach( data => {
                    const PostElement = document.createElement('ptr-post');
                    PostElement.data = data;
                    home_page.appendChild(PostElement);
                });
            } else {
                const SuggestionElement = document.createElement('ptr-suggestion');
                home_page.appendChild(SuggestionElement);
            }
        } catch (error) {
            Alert.show('error', error);
        }

        const MenuElement = document.createElement('ptr-menu');
        home_page.appendChild(MenuElement);
    },

    async actionHandler() {
        NavInitiator.init({
            add_story: document.querySelector('#add_story'),
            logo: document.querySelector('#logo'),
            message: document.querySelector('#message')
        });

        PostInitiator.init({
            love: document.querySelectorAll('.love'),
            comment: document.querySelectorAll('.comment'),
            modals: document.querySelector('#modals'),
            avatar: document.querySelector('#avatar'),
            comment_all: document.querySelectorAll('.comment_all'),
            likes: document.querySelectorAll('.likes'),
            name: document.querySelectorAll('.name'),
            photo_ava: document.querySelectorAll('.photo_ava'),
        });

        MenuInitiator.init({
            home: document.querySelector('#home'),
            explore: document.querySelector('#explore'),
            posting: document.querySelector('#posting'),
            activity: document.querySelector('#activity'),
            profile: document.querySelector('#profile'),
            modals: document.querySelector('#modals')
        });
    },
}

export default Home;