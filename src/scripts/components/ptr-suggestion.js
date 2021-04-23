import DataSource from "../data/data-source";
import Alert from "../utils/alert-initiator";
import SuggestInitiator from "../utils/suggest-initiator";
import './ptr-suggest';

class PtrSuggestion extends HTMLElement {
    async connectedCallback() {
        await this.render();
        await this.afterRender();
        await this.actionHandler();
    }

    render() {
        this.innerHTML = `
            <div class="suggestion">
                <div class="title">
                    <p>Suggestions for You</p>
                    <a href="">See All</a>
                </div>
                <div class="list" id="suggest_list"></div>
            </div>
        `;
    }

    async afterRender() {
        const suggest_list = document.querySelector('#suggest_list');

        try {
            const datas = await DataSource.loadSuggest();
            datas.forEach( data => {
                const SuggestElement = document.createElement('ptr-suggest');
                SuggestElement.data = data;
                suggest_list.appendChild(SuggestElement);
            });
        } catch (error) {
            Alert.show('error', error);
        }
    }

    actionHandler() {
        SuggestInitiator.init({
            photo: document.querySelectorAll('.photo'),
            name: document.querySelectorAll('.name'),
            follow: document.querySelectorAll('.follow_suggest')
        });
    }
}

customElements.define('ptr-suggestion', PtrSuggestion);