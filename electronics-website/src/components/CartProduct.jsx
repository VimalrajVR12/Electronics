import React from "react";

const buttonStyle = {
  borderRadius: "50%",
  border: "1px solid #e7e7e8",
  backgroundColor: "transparent",
  padding: "10px",
  marginRight: "5px",
};
const CartProduct = ({
  productData,
  changeQuantity,
  handleDelete,
  handleTransfer,
}) => {
  // console.log(productData);
  return (
    <div
      style={{
        // border: "1px solid black",
        margin: "10px",
        padding: "10px",
        display: "flex",
        columnGap: "20px",
        backgroundColor: "white",
        borderRadius: "12px",
      }}
    >
      <div>
        <img src={productData.image} alt="" width="100" />
      </div>
      <div style={{ width: "50%" }}>
        <h3>{productData.title}</h3>
        <p>
          ₹{productData.price}{" "}
          <span style={{ textDecoration: "line-through", opacity: "0.5" }}>
            ₹{productData.MRP}
          </span>
        </p>
        <div style={{ display: "flex", columnGap: "50px" }}>
          <div>
            <button
              style={buttonStyle}
              disabled={productData.quantity == 5}
              onClick={() => {
                changeQuantity(+1, productData.id);
              }}
            >
              +
            </button>
            <button style={buttonStyle}>{productData.quantity}</button>
            <button
              style={buttonStyle}
              disabled={productData.quantity == 1}
              onClick={() => {
                changeQuantity(-1, productData.id);
              }}
            >
              -
            </button>
          </div>
          <div>
            <button
              style={buttonStyle}
              onClick={() => {
                handleDelete(productData.id);
              }}
            >
              Remove
            </button>
            <button
              style={buttonStyle}
              onClick={() => {
                handleTransfer(productData.id);
              }}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
