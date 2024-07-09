function carregarIMGS() {
    fetch("../../Src/Json/data.json")
        .then(response => response.json())
        .then(imgs => {
            const container = document.querySelector("#container");

            imgs.map(img => {
                const card = document.createElement("div");
                card.classList.add("card");

                const image = document.createElement("img");
                image.src = img.imagem;
                card.appendChild(image);
                container.appendChild(card);
            });
        });
}

carregarIMGS();

const lupa = document.getElementById('lupa');

lupa.addEventListener('click', () => {
    lupa.style.scale = '0.7';

    setTimeout(() => {
        lupa.style.scale = '1';
    }, 150);
});

function active(){
    const menu = document.getElementById("menu-h")
    const element = document.querySelector(".header-links")

    if(menu .checked){
        element.style.transform = 'translateX(0%)';
    } else{
        element.style.transform = 'translateX(100%)';
    }
} // header 