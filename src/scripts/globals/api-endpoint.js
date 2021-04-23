import CONFIG from './config';

const API_ENDPOINT = {
    SIGNUP: `${CONFIG.API_URL}signup`,
    CHECK_EMAIL: `${CONFIG.API_URL}check_email`,
    CHECK_USERNAME: `${CONFIG.API_URL}check_username`,
    SIGNIN: `${CONFIG.API_URL}signin`,
    PROFILE: `${CONFIG.API_URL}load_profile`,
    POST_PROFILE: `${CONFIG.API_URL}load_post_profile`,
    SAVE_POST: `${CONFIG.API_URL}save_post`,
    POSTS: `${CONFIG.API_URL}load_posts`,
    LOVE_POST: `${CONFIG.API_URL}love_post`,
    UNLOVE_POST: `${CONFIG.API_URL}unlove_post`,
    COMMENT: `${CONFIG.API_URL}load_comment`,
    SAVE_COMMENT: `${CONFIG.API_URL}save_comment`,
    LOVERS: `${CONFIG.API_URL}load_lovers`,
    SAVE_AVATAR: `${CONFIG.API_URL}save_avatar`,
    SUGGEST: `${CONFIG.API_URL}load_suggest`,
    FOLLOW: `${CONFIG.API_URL}follow`,
    UNFOLLOW: `${CONFIG.API_URL}unfollow`,
};

export default API_ENDPOINT;