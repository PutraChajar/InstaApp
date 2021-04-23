import DataSource from "../data/data-source";
import Alert from "./alert-initiator";
import Comment from '../views/modal/comment';
import Lovers from '../views/modal/lovers';
import LinkInitiator from "./link-initiator";

const PostInitiator = {
    init({love, comment, modals, avatar, comment_all, likes, name, photo_ava}) {
        for (let i = 0; i < love.length; i++) {
            love[i].addEventListener('click', async function() {
                let idpost = this.getAttribute('idpost');
                let liked = this.getAttribute('liked');
                
                let form_data = {
                    idpost: idpost
                }
                
                if (liked == 0) {
                    try {
                        const data = await DataSource.lovePost(form_data);
                        if (data.status === 'success') {
                            const svg = this.children[0];
                            svg.classList.add('filled','red');
                        } else {
                            Alert.show('info', data.message);
                        }
                    } catch (error) {
                        Alert.show('error', error);
                    }
                } else {
                    try {
                        const data = await DataSource.unlovePost(form_data);
                        if (data.status === 'success') {
                            const svg = this.children[0];
                            svg.classList.remove('filled','red');
                        } else {
                            Alert.show('info', data.message);
                        }
                    } catch (error) {
                        Alert.show('error', error);
                    }
                }
            });
        };

        for (let i = 0; i < comment.length; i++) {
            comment[i].addEventListener('click', async function() {
                let idpost = this.getAttribute('idpost');

                modals.innerHTML = await Comment.render(avatar.src);
                await Comment.loadData(idpost);
                await Comment.actionHandler(idpost);
            });
        };

        for (let i = 0; i < comment_all.length; i++) {
            comment_all[i].addEventListener('click', async function() {
                let idpost = this.getAttribute('idpost');

                modals.innerHTML = await Comment.render(avatar.src);
                await Comment.loadData(idpost);
                await Comment.actionHandler(idpost);
            });
        };

        for (let i = 0; i < likes.length; i++) {
            likes[i].addEventListener('click', async function() {
                let idpost = this.getAttribute('idpost');

                modals.innerHTML = await Lovers.render();
                await Lovers.loadData(idpost);
                await Lovers.actionHandler();
            });
        };

        for (let i = 0; i < name.length; i++) {
            name[i].addEventListener('click', async function() {
                let username = this.getAttribute('uname');

                LinkInitiator.init(`profile/${username}`);
            });
        };

        for (let i = 0; i < photo_ava.length; i++) {
            photo_ava[i].addEventListener('click', async function() {
                let username = this.getAttribute('uname');

                LinkInitiator.init(`profile/${username}`);
            });
        };
    },
}

export default PostInitiator;