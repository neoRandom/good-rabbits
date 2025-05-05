import roleta from "../assets/roletaCoelho.png";

const ModalRoleta = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-heading-2 font-bold">Pé de Coelho</h1>
            <div className="flex justify-center items-center w-11/12 my-[-1rem]">
              <img src={roleta} alt="" className="w-full" />
            </div>
            <p className="text-detail-1 pb-4">
              Tente sua sorte na roleta Pé de Coelho
            </p>
            <button type="button" className="btn">
              Girar
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalRoleta;
