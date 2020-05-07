import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {getProduct} from "../store/actions/productsActions";
import {addToCart} from "../store/actions/cartActions";

export default function ProductDetails() {
  const dispatch = useDispatch();

  const {id} = useParams();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const product = useSelector((state) => state.products.product);

  const add = () => {
    const theProduct = {...product, quantity: 1};
    dispatch(addToCart(theProduct));
  };

  return (
    <div className="container my-5 py-5 z-depth-1">
      {/* <!--Section: Content--> */}
      <section className="text-center">
        {/* <!-- Section heading --> */}
        <h3 className="font-weight-bold mb-5">Produktinformation</h3>

        <div className="row">
          <div className="col-lg-6">
            {/* <!--Carousel Wrapper--> */}
            <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
              {/* <!--Slides--> */}
              <div className="carousel-inner text-center text-md-left" role="listbox">
                <div className="carousel-item active">
                  <img src={product.image} alt="First slide" className="img-fluid" />
                </div>
                <div className="carousel-item">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/18.jpg" alt="Second slide" className="img-fluid" />
                </div>
                <div className="carousel-item">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/19.jpg" alt="Third slide" className="img-fluid" />
                </div>
              </div>
              {/* <!--/.Slides--> */}

              {/* <!--Thumbnails--> */}
              <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
              {/* <!--/.Thumbnails--> */}
            </div>
            {/* <!--/.Carousel Wrapper--> */}
          </div>

          <div className="col-lg-5 text-center text-md-left">
            <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
              <strong>{product.name}</strong>
            </h2>
            <span className="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span>
            <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
              <span className="red-text font-weight-bold">
                <strong>{product.price}</strong>
              </span>
            </h3>

            {/* <!--Accordion wrapper--> */}
            <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
              {/* <!-- Accordion card --> */}
              <div className="card">
                {/* <!-- Card header --> */}
                <div className="card-header" role="tab" id="headingOne1">
                  <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                    <h5 className="mb-0">
                      Description
                      <i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>

                {/* <!-- Card body --> */}
                <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                  <div className="card-body">{product.description}</div>
                </div>
              </div>
              {/* <!-- Accordion card --> */}

              {/* <!-- Accordion card --> */}
              <div className="card">
                {/* <!-- Card header --> */}
                <div className="card-header" role="tab" id="headingTwo2">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                    <h5 className="mb-0">
                      Details
                      <i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>

                {/* <!-- Card body --> */}
                <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                  <div className="card-body">{product.details}</div>
                </div>
              </div>
              {/* <!-- Accordion card --> */}

              {/* <!-- Accordion card --> */}
              <div className="card">
                {/* <!-- Card header --> */}
                <div className="card-header" role="tab" id="headingThree3">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                    <h5 className="mb-0">
                      Shipping
                      <i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>

                {/* <!-- Card body --> */}
                <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx">
                  <div className="card-body">{product.shipping}</div>
                </div>
              </div>
              {/* <!-- Accordion card --> */}
            </div>
            {/* <!--/.Accordion wrapper--> */}

            {/* <!-- Add to Cart --> */}
            <section className="color">
              <div className="mt-5">
                <div className="row mt-3">
                  <div className="col-md-12 text-center text-md-left text-md-right">
                    <button className="btn btn-primary btn-rounded" onClick={add}>
                      <i className="fas fa-cart-plus mr-2" aria-hidden="true"></i>Lägg till i varukorgen
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- /.Add to Cart --> */}
          </div>
        </div>
      </section>
      {/* <!--Section: Content--> */}
    </div>
  );
}
