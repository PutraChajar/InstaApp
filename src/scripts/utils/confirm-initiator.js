const ConfirmInitiator = {
    show(text, ya, tidak) {
        const confirms = document.createElement('div');
        confirms.classList.add('confirms');

        const confirms_header = document.createElement('div');
        confirms_header.classList.add('confirms_header');

        const confirms_icon = document.createElement('div');
        confirms_icon.classList.add('confirms_icon');

        const icon = document.createElement('i');
        icon.classList.add('fa');
        icon.classList.add('fa-question');
        icon.classList.add('fa-3x');

        const confirms_text = document.createElement('div');
        confirms_text.classList.add('confirms_text');
        confirms_text.innerHTML = text;

        const confirms_footer = document.createElement('div');
        confirms_footer.classList.add('confirms_footer');

        const buttonya = document.createElement('button');
        buttonya.classList.add('btn');
        buttonya.innerHTML = 'Ya';
        buttonya.addEventListener('click', () => {
            confirms.classList.add('hilang');
            setTimeout(() => {
                confirms.remove();
            }, 2000);
            ya();
        });

        const buttontidak = document.createElement('button');
        buttontidak.classList.add('btn');
        buttontidak.classList.add('btn-second');
        buttontidak.innerHTML = 'Tidak';
        buttontidak.addEventListener('click', () => {
            confirms.classList.add('hilang');
            setTimeout(() => {
                confirms.remove();
            }, 2000);
            tidak();
        });
        
        confirms_icon.appendChild(icon);
        confirms_header.appendChild(confirms_icon);
        confirms_header.appendChild(confirms_text);
        confirms.appendChild(confirms_header);
        confirms_footer.appendChild(buttonya);
        confirms_footer.appendChild(buttontidak);
        confirms.appendChild(confirms_footer);

        document.body.insertBefore(confirms, document.body.firstChild);
    },
};

export default ConfirmInitiator;