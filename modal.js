import "./style.scss";

document.querySelector("#mod").innerHTML = `
<div class="modal" id="modal">
        <div class="modal__container">
            <div class="modal__header">
                <h3 class="modal__title">Error</h3>
            </div>
            <div class="modal__body">
                <p class="modal__p">El texto no puede contener mayusculas y/o caracteres especiales</p>
            </div>
            <div class="modal__footer">
                <button class="modal__button" id="modalButton">Entendido</button>
            </div>
        </div>
    </div>`;
