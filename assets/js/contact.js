const boton = document.getElementById("boton");

boton.addEventListener('click', () => {
    // Guarda el contenido de los campos antes de mostrar el modal
    const nombre = document.getElementById("formGroupExampleInput").value;
    const email = document.getElementById("formGroupExampleInput2").value;
    const mensaje = document.getElementById("exampleFormControlTextarea1").value;

    const modalHTML = crearModal();
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Activar el modal después de agregarlo al DOM
    const nuevoModal = document.getElementById('exampleModalToggle');
    const modal = new bootstrap.Modal(nuevoModal);
    modal.show();

    // Limpia los campos de entrada después de mostrar el modal
    document.getElementById("formGroupExampleInput").value = '';
    document.getElementById("formGroupExampleInput2").value = '';
    document.getElementById("exampleFormControlTextarea1").value = '';
});

function crearModal() {
    return `<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Data sent</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        Your data has been sent correctly
        </div>
      </div>
    </div>
  </div>`;
}
