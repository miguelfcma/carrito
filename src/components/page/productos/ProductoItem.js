import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "context/DataProvider";

export const ProductoItem = ({title, image, category, price, id}) => {

  const value = useContext(DataContext); /**consumir datos dentro del contexto */
  const addCarrito = value.addCarrito;



  return (
    
    <div key={id} className="producto">
      <Link to={`/producto/${id}`}>
      <div className="icon">
       
        <box-icon name="image"></box-icon>
      </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
        <div>
        <Link to={`/producto/${id}`} className="btn">Vista</Link>
        </div>
      </div>
    </div>
  );
};
