//@ts-nocheck
const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request'); 

// Open request modal
requestLink.addEventListener('click', () => {
    requestModal.classList.add('open');
});

requestModal.addEventListener('click', e => {
    e.target.classList.contains('new-request') && requestModal.classList.remove('open');
});