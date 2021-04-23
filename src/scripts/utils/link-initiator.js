const LinkInitiator = {
    init(link) {
        const a = document.createElement('a');
        a.setAttribute('href', `#/${link}`);
        a.click();
    },
};

export default LinkInitiator;