const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const frontcard = document.getElementById('front-card');
    const backcard = document.getElementById('back-card');
    
    document.getElementById('btn-continue').classList.remove('hidden');
});