import Alert from '../../utils/alert-initiator.js';
import DataSource from '../../data/data-source.js';
import '../../components/ptr-comment';

const Comment = {
    async render(avatar) {
        return `
            <div class="modal show" id="modal">
                <div class="modal_card">
                    <div class="header">
                        <span class="title">Comment</span>
                        <span class="close" id="close_modal"><i class="fa fa-times"></i></span>
                    </div>
                    <div class="body comment_list" id="comment_list">
                        
                    </div>
                    <div class="footer">
                        <div class="field_comment">
                            <img src="${avatar}" alt="avatar" />
                            <div class="field_group">
                                <input type="text" id="incomment" placeholder="Add a comment..." autocomplete="off">
                                <a href="" id="post">Post<a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    async loadData(idpost) {
        const comment_list = document.querySelector('#comment_list');

        let form_data = {
            idpost: idpost
        }

        try {
            const datas = await DataSource.loadComment(form_data);
            datas.forEach( data => {
                const CommentElement = document.createElement('ptr-comment');
                CommentElement.data = data;
                comment_list.appendChild(CommentElement);
            });
        } catch (error) {
            Alert.show('error', error);
        }
    },

    async actionHandler(idpost) {
        const comment_list = document.querySelector('#comment_list');
        const modal = document.querySelector('#modal');
        const close_modal = document.querySelector('#close_modal');
        const incomment = document.querySelector('#incomment');
        const post = document.querySelector('#post');

        close_modal.addEventListener('click', () => {
            modal.remove();
        });

        post.addEventListener('click', async (e) => {
            e.preventDefault();
            
            let form_data = {
                idpost: idpost,
                comment: incomment.value
            }

            try {
                const data = await DataSource.saveComment(form_data);
                if (data.status === 'success') {
                    comment_list.innerHTML = '';
                    incomment.value = '';
                    Comment.loadData(idpost);
                } else {
                    Alert.show('info', data.message);
                }
            } catch (error) {
                Alert.show('error', error);
            }
        });
    },

};

export default Comment;