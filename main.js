import "./style.scss";

document.querySelector("#app").innerHTML = `
<main class="main">
<section class="main__logo">
    <h1 class="main__h1"><img class="main__img" src="img/logo.svg" alt="Alura Logo"></h1>
</section>
<section class="main__form">
    <textarea class="main__textarea" name="mensaje" id="mensaje" placeholder="Ingrese el texto aqui"></textarea>
    <div class="main__footer">
        <div class="main__small">
            <small>Solo letras minúsculas y sin acentos</small>
        </div>
        <div class="main__buttons">
            <button class="main__button main__button-primary" id="encriptar">Encriptar</button>
            <button class="main__button main__button-secondary" id="desencriptar">Desencriptar</button>
        </div>
    </div>
</section>
<aside class="aside">
    <section class="aside__content" id="ningunMensaje">
        <div class="aside__img">
            <img src="img/muneco.svg" alt="Ningun mensaje encontrado - imagen">
        </div>
        <div class="aside__text aside__none">
            <h2 class="aside__h2">Ningún mensaje fue encontrado</h2>
            <p class="aside__p">Ingresa el texto que desees encriptar o desencriptar</p>
        </div>
    </section>
    <section class="aside__content aside__content-between aside__content--none" id="mensajeEncontrado">
        <div class="aside__message">
            <p class="aside__encrypt" id="mensajeEncriptado">Hola</p>
        </div>
        <button class="aside__button bubbly-button" id="copiarMensaje">Copiar</button>
    </section>
</aside>
</main>

`;
