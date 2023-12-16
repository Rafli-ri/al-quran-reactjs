import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const InfoModal = forwardRef(function InfoModal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="p-11 w-4/5 text-[12px] sm:text-[18px] sm:w-3/5 transition-transform ease-out duration-300 rounded-lg bg-white text-slate-700 backdrop:bg-stone-900/80 shadow-md"
    >
      {children}
      <form method="dialog">
        <button className="px-4 py-1.5 border-2 mt-4 bg-slate-700 text-white rounded-md hover:text-slate-800 hover:bg-white hover:border-2 hover:border-slate-800">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default InfoModal;
