import Alert from '../../utils/alert-initiator.js';
import DataSource from '../../data/data-source.js';

const Posting = {
    async render(image) {
        return `
            <div class="modal show" id="modal">
                <div class="modal_card">
                    <div class="header">
                        <span class="title">New Post</span>
                        <span class="close" id="close_modal"><i class="fa fa-times"></i></span>
                    </div>
                    <div class="body">
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <img id="photo" src="${image}" alt="photo" style="width: 100px; height: 100px;" />
                        </div>
                        <div class="form-group">
                            <label for="caption">Caption</label>
                            <textarea id="caption" cols="5" rows="5" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="footer">
                        <button class="btn" id="save">Save</button>
                    </div>
                </div>
            </div>
        `;
    },

    async actionHandler() {
        const modal = document.querySelector('#modal');
        const close_modal = document.querySelector('#close_modal');
        const photo = document.querySelector('#photo');
        const caption = document.querySelector('#caption');
        const save = document.querySelector('#save');

        close_modal.addEventListener('click', () => {
            modal.remove();
        });

        save.addEventListener('click', async () => {
            let src = photo.src.split(';base64,');
            let str = photo.src.substring(photo.src.indexOf(":")+1, photo.src.indexOf(";"));
            let ext = str.split('/');
            let form_data = {
                photo: src[1],
                ext: ext[1],
                caption: caption.value
            }
    
            try {
                const data = await DataSource.savePost(form_data);
                if (data.status === 'success') {
                    Alert.show('success', data.message);
                    location.reload();
                } else {
                    Alert.show('info', data.message);
                }
            } catch (error) {
                Alert.show('error', error);
            }
        });
    },

};

export default Posting;