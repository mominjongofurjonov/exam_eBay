import { Link } from "react-router-dom";
import "./Modal.scss";
import { FaArrowRight } from "react-icons/fa6";
import { Product } from "../../types";
import { useSelector } from 'react-redux'
import { State } from "../../types";



const Modal = () => {



  const likedata = useSelector((  state: State) => state.actions.likes);

  
  return (
  <>
     <div
      className="search-panel-wrapper"
      // onClick={() => {
      //   setisModalActive(false);
      // }}
    >
      <h1 className="modal_heading">
        <Link className="modal_link" to="/watchlist">
          View all items you are watching <FaArrowRight />
        </Link>
      </h1>
      
      <div className="modal_wishlist">
      {likedata.length > 0 ? likedata.slice(0, 6).map((product: Product) => (
          <div key={product.id} className="modal_wishlist_wrapper">
            <Link to={`/product/${product.id}`}><img src={product.thumbnail} width={150} alt="" /></Link>
            <h2 style={{textAlign: 'center'}}>{product.title}</h2>
          </div>
        )) : <h1 className="modal_informer">No items found</h1>}
      </div>
      </div>
    
     

  </>
  );
};

export default Modal;
