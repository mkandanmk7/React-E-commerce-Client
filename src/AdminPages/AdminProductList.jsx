import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AdminNav from "../AdminComponents/AdminNav";
import { DataGrid } from "@material-ui/data-grid";

import { DeleteOutline, Edit } from "@material-ui/icons";
import Footer from "../components/Footer";

//styled comp

const MainContainer = styled.div``;
const Container = styled.div``;
const Header = styled.div``;
const AddContainer = styled.div``;
const Button = styled.div``;
const GridContainer = styled.div``;

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
`;

const AdminProductList = () => {
  const [products, setProducts] = useState([]);
  //    const user=useSelector(state=>state.user)
  const [loading, setLoading] = useState(false);

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
            <ProductImg
              src="https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076"
              // {params.row.image_link}
              alt=""
            />
            {/* {params.row.name} */}
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
            <Link to={"/adminproductedit/" + 1}>
              <Edit />
            </Link>
            <DeleteOutline
              style={{ color: "red", cursor: "pointer", marginLeft: "15px" }}
              /* onClick={() => handleDelete(params.row._id)} */
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
    </>
  );
};

export default AdminProductList;
