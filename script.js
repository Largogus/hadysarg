window.addEventListener('load', () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    preloader.classList.add('hidden');
    setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "block";
    }, 500)
});

const img_download = document.getElementById('img-touch');

img_download.addEventListener('click', () => {
    const link = document.createElement('a')
    link.href = 'img/dont-open.png';
    link.download = 'first step';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    window.location.replace('https://realhumanmade.ru') 
})