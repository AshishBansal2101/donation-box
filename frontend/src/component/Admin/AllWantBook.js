import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminWantBook,
  //   deleteWantBook,
} from "../../actions/wantBookAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_WANTBOOK_RESET } from "../../constants/wantBookConstants";

const ProductList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, wantBook } = useSelector((state) => state.wantBook);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.wantBook
  );

  const deleteProductHandler = (id) => {
    // dispatch(deleteWantBook(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Request Deleted Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: DELETE_WANTBOOK_RESET });
    }

    dispatch(getAdminWantBook());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);
  const columns = [
    { field: "id", headerName: "Request ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    // {
    //   field: "stock",
    //   headerName: "F.Income",
    //   type: "number",
    //   minWidth: 150,
    //   flex: 0.3,
    // },

    // {
    //   field: "price",
    //   headerName: "Amount",
    //   type: "number",
    //   minWidth: 270,
    //   flex: 0.5,
    // },

    // {
    //   field: "actions",
    //   flex: 0.3,
    //   headerName: "Actions",
    //   minWidth: 150,
    //   type: "number",
    //   sortable: false,
    //   renderCell: (params) => {
    //     return (
    //       <Fragment>
    //         {/* <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
    //           <EditIcon />
    //         </Link> */}

    //         {/* <Button
    //           onClick={() =>
    //             deleteProductHandler(params.getValue(params.id, "id"))
    //           }
    //         >
    //           <DeleteIcon />
    //         </Button> */}
    //       </Fragment>
    //     );
    //   },
    // },
  ];

  const rows = [];

  wantBook &&
    wantBook.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        category: item.category,
        description: item.description,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL BOOK REQUESTS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">BOOK REQUESTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
