import Alert from '../../utils/alert-initiator.js';
import DataSource from '../../data/data-source.js';
import '../../components/ptr-lovers';

const Lovers = {
    async render() {
        return `
            <div class="modal show" id="modal">
                <div class="modal_card">
                    <div class="header">
                        <span class="title">Likes</span>
                        <span class="close" id="close_modal"><i class="fa fa-times"></i></span>
                    </div>
                    <div class="body like_list" id="like_list">
                        
                    </div>
                </div>
            </div>
        `;
    },

    async loadData(idpost) {
        const like_list = document.querySelector('#like_list');

        let form_data = {
            idpost: idpost
        }

        try {
            const datas = await DataSource.loadLovers(form_data);
            datas.forEach( data => {
                const LoversElement = document.createElement('ptr-lovers');
                LoversElement.data = data;
                like_list.appendChild(LoversElement);
            });
        } catch (error) {
            Alert.show('error', error);
        }
    },

    async actionHandler() {
        const modal = document.querySelector('#modal');
        const close_modal = document.querySelector('#close_modal');
        
        close_modal.addEventListener('click', () => {
            modal.remove();
        });
    },

};

export default Lovers;