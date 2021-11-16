import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useParams } from "react-router";

const Product = () => {
  //states
  let [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  let [shadeIn, setShade] = React.useState("");
  let [quantity, setQuantity] = React.useState(1);
  const id = useParams().productId;
  // const dispatch=useDispatch()
  const [alert, setAlert] = useState(true);
  const [error, setError] = useState(false);

  return (
    <>
      {alert && (
        <ToastContainer postion="botton-end">
          <Toast
            bg={"success"}
            style={{ width: "15rem", height: "3rem", padding: "5px" }}
            onClose={() => setAlert(false)}
            show={alert}
            delay={3000}
            autohide
          >
            Your item is added to cart
          </Toast>
        </ToastContainer>
      )}
    </>
  );
};

export default Product;
