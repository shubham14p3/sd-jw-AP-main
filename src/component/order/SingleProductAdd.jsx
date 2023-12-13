import React, { useEffect, useState } from "react";
import imgProfile from "../../assets/img/profile-side.png";
import coverImg from "../../assets/img/side-cover.png";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  createSingleProduct,
  uploadAdminProfileCoverImage,
  uploadAdminProfileImage,
} from "../../redux/features/authActions";
import { notifySuccess, notifyError } from "../../utils/toast";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FileUploader } from "react-drag-drop-files";

const SingleProductAddForm = () => {
  const user = useSelector((state) => state.auth.loggedinUser);

  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState("");
  const [dataType, setDataType] = useState(null);
  const [file, setFile] = useState(null);
  const formik = useFormik({
    initialValues: {
      // Set initial values based on your newProduct structure
      brand: {
        name: "Deepcool",
        id: "64154ee693b3f0f2c7ec7ff8",
      },
      category: {
        name: "CPU Heat Pipes",
        id: "6419723bd7dc5155c04350d5",
      },
      sku: "",
      img: "https://i.ibb.co/wYZr4k6/cpu-1.png",
      title: "",
      slug: "",
      unit: "15pcs",
      imageURLs: [
        {
          color: {
            name: "Black",
            clrCode: "#565656",
          },
          img: "https://i.ibb.co/wYZr4k6/cpu-1.png",
          sizes: [],
          _id: "653e2f7869c14643f3ea13fc",
        },
      ],
      parent: "CPU Heat Pipes",
      children: "CPU Cooler",
      price: 0,
      discount: 0,
      quantity: 0,
      status: "in-stock",
      reviews: [],
      productType: "electronics",
      description: "",
      additionalInformation: [
        {
          key: "",
          value: "",
        },
      ],
      tags: [],
      sizes: [],
      featured: false,
    },
    // validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const result = await dispatch(createSingleProduct(values));
      if (result?.payload?.status == 200) {
        notifySuccess(`${result?.payload?.message}`);
      } else {
        notifyError("Unable to update . Try Again");
        // formik.resetForm();
      }
    },
  });
  const handleCancel = () => {
    formik.resetForm();
  };

  return (
    <div className="tab-pane fade show active">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="crancy-ptabs__separate">
              <div className="crancy-ptabs__form-main">
                <div className="crancy__item-group">
                  <div className="crancy__item-form--group">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="crancy__item-form--group mg-top-form-20">
                          <label className="crancy__item-label">Title </label>

                          <input
                            className="crancy__item-input"
                            placeholder={formik.values.title}
                            type="text"
                            id="title"
                            name="title"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                          />

                          {formik.touched.title && formik.errors.title ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.title}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="crancy__item-form--group mg-top-form-20">
                          <label className="crancy__item-label">Slug </label>

                          <input
                            className="crancy__item-input"
                            placeholder={formik.values.slug}
                            type="text"
                            id="slug"
                            name="slug"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.slug}
                          />

                          {formik.touched.slug && formik.errors.slug ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.slug}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="crancy__item-form--group mg-top-form-20">
                    <label className="crancy__item-label">Description</label>
                    <input
                      className="crancy__item-input"
                      placeholder={formik.values.description}
                      type="text"
                      id="description"
                      name="description"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.description}
                    />{" "}
                    {formik.touched.description && formik.errors.description ? (
                      <div style={{ color: "red" }}>
                        {formik.errors.description}
                      </div>
                    ) : null}
                  </div>
                  <div className="crancy__item-form--group">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="crancy__item-form--group mg-top-form-20">
                          <label className="crancy__item-label">Quantity</label>

                          <input
                            className="crancy__item-input"
                            placeholder={formik.values.quantity}
                            type="number"
                            id="quantity"
                            name="quantity"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.quantity}
                          />

                          {formik.touched.quantity && formik.errors.quantity ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.quantity}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="crancy__item-form--group mg-top-form-20">
                          <label className="crancy__item-label">Price</label>

                          <input
                            className="crancy__item-input"
                            placeholder={formik.values.price}
                            type="number"
                            id="price"
                            name="price"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.price}
                          />

                          {formik.touched.price && formik.errors.price ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.price}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="crancy__item-form--group">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="crancy__item-form--group mg-top-form-20">
                          <label className="crancy__item-label">Discount</label>

                          <input
                            className="crancy__item-input"
                            placeholder={formik.values.discount}
                            type="number"
                            id="discount"
                            name="discount"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.discount}
                          />

                          {formik.touched.discount && formik.errors.discount ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.discount}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="crancy__item-form--group mg-top-form-20">
                          <label className="crancy__item-label">Quantity</label>

                          <input
                            className="crancy__item-input"
                            placeholder={formik.values.quantity}
                            type="number"
                            id="quantity"
                            name="quantity"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.quantity}
                          />

                          {formik.touched.quantity && formik.errors.quantity ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.quantity}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="crancy__item-button--group crancy__item-button--group--fix crancy__ptabs-bottom">
          <button
            className="crancy-btn crancy-btn__nostyle crancy-color4 p-0"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="crancy-btn crancy-color8__bg"
            type="submit"
            disabled={!formik.dirty || !formik.isValid}
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleProductAddForm;
