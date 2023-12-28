import { useRef, forwardRef, useImperativeHandle, ReactNode } from "react";
import { createPortal } from "react-dom";

interface InfoModalProps {
  children: ReactNode;
}

export interface InfoModalRef {
  open: () => void;
}

const Modal = forwardRef<InfoModalRef, InfoModalProps>(function Modal(
  { children },
  ref
) {
  const modal = useRef<HTMLDialogElement | null>(null);

  useImperativeHandle(ref, () => ({
    open() {
      if (modal.current) {
        modal.current.showModal();
      }
    },
  }));

  return createPortal(
    <dialog
      ref={modal}
      className="p-11 w-4/5 text-[12px] sm:text-[18px] sm:w-3/5 transition-transform ease-out duration-300 rounded-lg bg-white text-slate-700 backdrop:bg-stone-900/80 shadow-md "
    >
      {children}
      <form method="dialog">
        <button
          className="px-4 py-1.5 border-2 mt-4 bg-slate-700 text-white rounded-md hover:text-slate-800 hover:bg-white hover:border-2 hover:border-slate-800"
          onClick={() => modal.current?.close()}
        >
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal")!
  );
});

export default Modal;
