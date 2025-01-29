import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactCard = (props) => {
  const { actions } = useContext(Context);
  let item = props.item;
  return (
    <>
      <div className="col-auto">
        <img
          src="https://img.freepik.com/fotos-premium/mejores-gafas-hombre-mejores-lentes_759095-27098.jpg"
          className="rounded-circle"
          alt="Descrizione immagine"
          width="300"
        />
      </div>
      <div className="userInfo col">
        <div className="fs-1">{item.name}</div>
        <div className="fs-3 text-secondary d-flex">
          <i className="fa-solid fa-location-dot"></i> {item.address}
        </div>
        <div className="fs-3 text-secondary d-flex">
          <i className="fa-solid fa-phone"></i> {item.phone}
        </div>
        <div className="fs-3 text-secondary d-flex">
          <i className="fa-solid fa-envelope"></i> {item.email}
        </div>
      </div>
      <div className="mt-4 col-auto">
        <Link to="/">
          <span
            className="pencil"
            onClick={() => actions.modifyContact(item.id, index)}
          >
            <i className="fa-solid fa-pencil"></i>
          </span>
        </Link>
        <span className="trush">
          <i
            className="fa-solid fa-trash"
            onClick={() => actions.deleteItem(item.id)}
          ></i>
        </span>
      </div>
    </>
  );
};

export default ContactCard;
