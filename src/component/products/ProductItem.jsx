import React from "react";
import dotIcon from "../../assets/img/dots.svg";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  console.log(product);

  const { id, img, title, createdAt, price, payment, status, brand } = product;

  return (
    <tr>
      <td className="crancy-table__column-1 crancy-table__data-1">
        <div className="crancy-table__customer">
          <div className="crancy-wc__checkbox">
            <input
              className="crancy-wc__form-check"
              id="checkbox"
              name="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" className="crancy-table__customer-img">
              <img src={img} alt="#" />
              <h4 className="crancy-table__product-title">{title}</h4>
            </label>
          </div>
        </div>
      </td>
      <td className="crancy-table__column-2 crancy-table__data-2">
        <h4 className="crancy-table__product-title">{brand.name}</h4>
      </td>
      <td className="crancy-table__column-2 crancy-table__data-2">
        <h4 className="crancy-table__product-title">{createdAt}</h4>
      </td>
      <td className="crancy-table__column-3 crancy-table__data-3">
        <h4 className="crancy-table__product-title">{price}</h4>
      </td>
      <td className="crancy-table__column-4 crancy-table__data-4">
        <div
          className={`crancy-table__status ${
            payment === "Paid"
              ? "crancy-table__status--paid"
              : "crancy-table__status--unpaid"
          }`}
        >
          {payment}
        </div>
      </td>
      <td className="crancy-table__column-5 crancy-table__data-5">
        <div className="crancy-table__actions crancy-table__actions--between">
          <div
            className={`crancy-table__status ${
              status === "Cancelled"
                ? "crancy-table__status--delete"
                : "crancy-table__status--paid"
            }`}
          >
            {status}
          </div>
          <div className="crancy-table__action">
            <Link to="#">
              <img src={dotIcon} alt="" />
            </Link>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default ProductItem;
