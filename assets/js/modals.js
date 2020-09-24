class ModalsTake extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="modal fade" id="ModalTake" tabindex="-1" role="dialog"
        aria-labelledby="ModalTakeTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Confirmation</h5>
                </div>
                <div class="modal-body">
                    <p>Are you sure to take this course?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="cancel" data-dismiss="modal">Cancel</button>
                    <button type="button" class="confirms">OK</button>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}
      
class ModalsQuit extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="ModalQuit" tabindex="-1" role="dialog" aria-labelledby="ModalQuitTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Confirmation</h5>
                </div>
                <div class="modal-body">
                    <p>Are you sure to quit this course?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="cancel" data-dismiss="modal">Cancel</button>
                    <button type="button" class="confirms">OK</button>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}
customElements.define('modal-take', ModalsTake);
customElements.define('modal-quit', ModalsQuit);
