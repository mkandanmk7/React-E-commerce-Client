import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AdminNav from "../AdminComponents/AdminNav";
import { DataGrid } from "@material-ui/data-grid";

import { DeleteOutline, Edit } from "@material-ui/icons";
import Footer from "../components/Footer";
import { publicRequest } from "../axiosMethod";
import { useSelector } from "react-redux";
import { large } from "../responsive";

//styled comp

const MainContainer = styled.div`
  background-color: whitesmoke;
`;
const Container = styled.div`
  margin: 2rem 8rem;
  ${large({ margin: "2rem 1rem" })}
`;
const GridContainer = styled.div`
  background-color: white;
  height: 100vh;
`;

const ProductDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin: 1rem;
  height: 100%;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  margin: 2rem 0;
  width: 100%;
`;

const AddContainer = styled.div`
  width: 100%;
  text-align: right;
  height: 3rem;
`;

const AdminProductList = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.user);
  console.log("user in products", user);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await publicRequest.get(`/product`);
      setProducts(res.data);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  let deleteId;
  const deleteProduct = (id) => {
    deleteId = id;
  };

  const handleDelete = async () => {
    try {
      console.log("in product delete");
      const res = await publicRequest.delete(`/product/${deleteId}`, {
        headers: {
          token: user.currentUser.token,
        },
      });
      console.log(res);
      getProducts();
    } catch (err) {
      console.log("err in ");
      console.log(err);
    }
  };

  //details
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <ProductDiv>
            <ProductImg src={params.row.image_link} alt="product_image" />
            {params.row.name}
          </ProductDiv>
        );
      },
    },
    {
      field: "price",
      headerName: "Price in $",
      width: 150,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/adminproductedit/${params.row._id}`}>
              <Edit />
            </Link>
            <DeleteOutline
              data-toggle="modal"
              data-target="#deletemodal"
              style={{ color: "red", cursor: "pointer", marginLeft: "15px" }}
              onClick={() => deleteProduct(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <MainContainer>
        <AdminNav />
        {loading ? (
          <div className="d-flex justify-content-center m-5">
            <Loader type="TailSpin" color="#25283D" height={100} width={100} />
          </div>
        ) : (
          <Container>
            <Header>
              <div style={{ width: "20rem" }}>
                <h3>Product Details</h3>
              </div>
              <AddContainer>
                <Link to="/adminproductadd">
                  <Button className="bg-primary">Add New </Button>
                </Link>
              </AddContainer>
            </Header>
            <GridContainer>
              <DataGrid
                rows={products}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                checkboxSelection
              />
            </GridContainer>
          </Container>
        )}
      </MainContainer>

      {!loading && <Footer />}

      <div className="modal  fade" id="deletemodal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              Are you sure, You want to delete product?
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button className="btn btn-info" data-dismiss="modal">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProductList;
