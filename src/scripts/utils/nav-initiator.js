import LinkInitiator from './link-initiator.js';

const NavInitiator = {
    init({add_story, logo, message}) {
        add_story.addEventListener('click', () => {
            // alert('add_story');
        });

        logo.addEventListener('click', () => {
            LinkInitiator.init(`home`);
        });

        message.addEventListener('click', () => {
            // alert('message');
        });
    },
}

export default NavInitiator;