import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";



function Modal() {
  const dispatch = useDispatch()
  return (
    <main className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn" onClick={()=>{dispatch(clearCart())
          dispatch(closeModal())}}>
            confirm
          </button>
          <button className="btn clear-btn" type="button" onClick={()=>dispatch(closeModal())}>
            cancel
          </button>
        </div>
      </div>
    </main>
  );
}

export default Modal;
