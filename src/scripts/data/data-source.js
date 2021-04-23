import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class DataSource {
    static async signup(form_data) {
        const options = {
            method: "POST",
            body: JSON.stringify(form_data)
        }
 
        const response = await fetch(API_ENDPOINT.SIGNUP, options);
        const responseJson = await response.json();
        return responseJson;
    }

    static async checkEmail(form_data) {
        const options = {
            method: "POST",
            body: JSON.stringify(form_data)
        }
 
        const response = await fetch(API_ENDPOINT.CHECK_EMAIL, options);
        const responseJson = await response.json();
        return responseJson;
    }

    static async checkUsername(form_data) {
        const options = {
            method: "POST",
            body: JSON.stringify(form_data)
        }
 
        const response = await fetch(API_ENDPOINT.CHECK_USERNAME, options);
        const responseJson = await response.json();
        return responseJson;
    }

    static async signin(form_data) {
        const options = {
            method: "POST",
            body: JSON.stringify(form_data)
        }
 
        const response = await fetch(API_ENDPOINT.SIGNIN, options);
        const responseJson = await response.json();
        return responseJson;
    }

    static async loadProfile(form_data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": CONFIG.TOKEN
            },
            body: JSON.stringify(form_data)
        }

        const response = await fetch(API_ENDPOINT.PROFILE, options);
        const responseJson = await response.json();
        return responseJson.data;
    }

    static async loadPostProfile(form_data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": CONFIG.TOKEN
            },
            body: JSON.stringify(form_data)
        }

        const response = await fetch(API_ENDPOINT.POST_PROFILE, options);
        const responseJson = await response.json();
        return responseJson.data;
    }

    static async savePost(form_data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": CONFIG.TOKEN
            },
            body: JSON.stringify(form_data)
        }

        const response = await fetch(API_ENDPOINT.SAVE_POST, options);
        const responseJson = await response.json();
        return responseJson;
    }

    static async loadPost(form_data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": CONFIG.TOKEN
            },
            body: JSON.stringify(form_data)
        }

        const response = await fetch(API_ENDPOINT.POSTS, options);
        const responseJson = await response.json();
        return responseJson.data;
    }

    static async lovePost(form_data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": CONFIG.TOKEN
            },
            body: JSON.stringify(form_data)
        }

        const response = await fetch(API_ENDPOINT.LOVE_POST, options);
        const responseJson = await response.json();
        return responseJson;
    }

    static async unlovePost(form_data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": CONFIG.TOKEN
            },
            body: JSON.stringify(form_data)
        }

        const response = await fetch(API_ENDPOINT.UNLOVE_POST, options);
        const responseJson = await response.json();
        return responseJson;
    }

    static async loadComment(form_data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": CONFIG.TOKEN
            },
            body: JSON.stringify(form_data)
        }

        const response = await fetch(API_ENDPOINT.COMMENT, options);
        const responseJson = await response.json();
        return responseJson.data;
    }

    static async saveComment(form_data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": CONFIG.TOKEN
            },
            body: JSON.stringify(form_data)
        }

        const response = await fetch(API_ENDPOINT.SAVE_COMMENT, options);
        const responseJson = await response.json();
        return responseJson;
    }

    static async loadLovers(form_data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": CONFIG.TOKEN
            },
            body: JSON.stringify(form_data)
        }

        const response = await fetch(API_ENDPOINT.LOVERS, options);
        const responseJson = await response.json();
        return responseJson.data;
    }

    static async saveAvatar(form_data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": CONFIG.TOKEN
            },
            body: JSON.stringify(form_data)
        }

        const response = await fetch(API_ENDPOINT.SAVE_AVATAR, options);
        const responseJson = await response.json();
        return responseJson;
    }

    static async loadSuggest() {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": CONFIG.TOKEN
            }
        }

        const response = await fetch(API_ENDPOINT.SUGGEST, options);
        const responseJson = await response.json();
        return responseJson.data;
    }

    static async follow(form_data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": CONFIG.TOKEN
            },
            body: JSON.stringify(form_data)
        }

        const response = await fetch(API_ENDPOINT.FOLLOW, options);
        const responseJson = await response.json();
        return responseJson;
    }

    static async unfollow(form_data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": CONFIG.TOKEN
            },
            body: JSON.stringify(form_data)
        }

        const response = await fetch(API_ENDPOINT.UNFOLLOW, options);
        const responseJson = await response.json();
        return responseJson;
    }
}

export default DataSource;