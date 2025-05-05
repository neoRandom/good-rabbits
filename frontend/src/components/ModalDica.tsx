import coelhoConfuso from "../assets/coelhoConfuso.png";

const ModalDica = () => {
    return(
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex flex-col justify-center items-center">                     
                        <div className="flex justify-center items-center gap-2 relative">
                            <img src={coelhoConfuso} alt="" className="w-[45%] lg:w-2/5 shadow-md rounded-2xl"/>
                            <div className="flex flex-col justify-around items-center">
                                <h1 className="text-heading-2 font-bold sm:absolute sm:top-0">Dica Diária</h1>
                                <p className="text-detail-1 pt-4 ">Você sabia? Beber água aumenta sua quantidade máxima de pontos de vida!</p>
                            </div>
                        </div>
                        
                        <div className="modal-action w-1/4">
                            <form method="dialog" className="w-full">
                                <button className="app-bg-primary py-1 rounded-app-default shadow-app-neutral w-full">OK</button>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ModalDica