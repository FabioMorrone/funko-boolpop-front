import { Link } from "react-router-dom"

export default function JumboUi({ productList, slideIndex, setIndex }) {
    return (
        <>

            <div className="jumbo_slide">

                <div className="row h-100 w-100 m-0 align-items-center">
                    {/* Colonna immagine */}
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <Link className="img_jumbo_container" to={`/${productList[slideIndex].slug}`}>
                            <img className="jumbo_img" src={`http://localhost:3000/${productList[slideIndex].banner}`} alt="" />
                        </Link>
                    </div>

                    {/* Colonna testo */}
                    <div className="col-12 col-lg-6">
                        <div className="jumbo_info text-center">
                            <h1 className="jumbo-title">{productList[slideIndex].name}</h1>
                            <strong><p className="jumbo-p pb-4 fs-6">{productList[slideIndex].description}</p></strong>
                        </div>
                    </div>
                </div>
                <div className="dots">
                    <ul className="list-unstyled">
                        {productList.map((dot, i) => (
                            <li key={dot.item_number}>
                                {i == slideIndex ? (
                                    <>
                                        <button className="dot_btn" onClick={() => setIndex(i)}>
                                            <i className="bi bi-circle-fill"></i>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button className="dot_btn" onClick={() => setIndex(i)}>
                                            <i className="bi bi-circle"></i>
                                        </button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

