import CartForm from "../components/cart/CartForm";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="form-page-blur">
        <div className="cart-form-container">
          <CartForm />
        </div>
      </div>
    </div>
  );
};

export default Cart;
