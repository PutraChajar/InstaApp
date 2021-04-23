const AlertInitiator = {
    show(status, text) {
        const div = document.createElement('div');
        div.classList.add('alerts');
        div.classList.add(status);
        const span1 = document.createElement('span');
        span1.classList.add('alerts_icon');
        const icon = document.createElement('i');
        icon.classList.add('fa');
        if (status == 'success') {
            icon.classList.add('fa-check');
        } else if (status == 'error') {
            icon.classList.add('fa-times');
        } else if (status == 'info') {
            icon.classList.add('fa-info');
        }
        const span2 = document.createElement('span');
        span2.classList.add('alerts_text');
        span2.innerHTML = text;
        span1.appendChild(icon);
        div.appendChild(span1);
        div.appendChild(span2);
        document.body.insertBefore(div, document.body.firstChild);
        setTimeout(() => {
            div.classList.add('hilang');
        }, 2000);
        setTimeout(() => {
            div.remove();
        }, 4000);
    },
};

export default AlertInitiator;