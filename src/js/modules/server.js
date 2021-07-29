import {closeModal, openModal} from './modalWindow';
import {postData} from '../services/services';

function server(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector,);

    const message = {
        loading: 'icons/form/spinner.svg',
        success: 'Спасибо! Скоро мы свами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText=`
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);   
           
            // request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');
           
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));             

            postData('http://localhost:3000/requests', json)
            .then(data =>{
                console.log(data);
                showThanksModal(message.success);                                       
                statusMessage.remove();                
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });           
            
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div    class="modal__content">
                <div data-close class="modal__close">×</div>
                <div class="modal__title">${message}</div> 
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

}

export default server;