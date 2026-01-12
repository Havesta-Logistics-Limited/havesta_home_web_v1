import { useModal } from "../contexts/ModalContext";

const MobileToggle = () => {
  const { modalOpen, toggleModal } = useModal();

  return (
    <button
      onClick={toggleModal}
      className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300 group hover:bg-harvestaYellow/10"
    >
      <div className="w-5 h-4 sm:w-6 sm:h-5 flex flex-col justify-between">
        <span className={`h-0.5 bg-harvestaYellow rounded-full transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:bg-white ${modalOpen ? 'rotate-45 translate-y-1.5 w-5 sm:w-6' : 'w-5 sm:w-6 group-hover:w-6'}`} />
        <span className={`h-0.5 bg-harvestaYellow rounded-full transition-all duration-300 group-hover:bg-white ${modalOpen ? 'opacity-0 scale-0' : 'opacity-100 w-4 sm:w-5 group-hover:w-5 group-hover:translate-x-1'}`} />
        <span className={`h-0.5 bg-harvestaYellow rounded-full transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:bg-white ${modalOpen ? '-rotate-45 -translate-y-1.5 w-5 sm:w-6' : 'w-3 sm:w-4 group-hover:w-5'}`} />
      </div>
    </button>
  );
};

export default MobileToggle;