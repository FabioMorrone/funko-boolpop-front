import { Link } from "react-router-dom"

export default function JumboUi({ productList, slideIndex, setIndex }) {
    return (
        <>

            <div className="jumbo_slide">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        {/* Colonna immagine */}
                        <div className="col-12 col-lg-6">
                            <Link className="img_jumbo_container" to={`/${productList[slideIndex].slug}`}>
                                <img className="jumbo_img" src={`http://localhost:3000/${productList[slideIndex].banner}`} alt="" />
                            </Link>
                        </div>

                        {/* Colonna testo */}
                        <div className="col-12 col-lg-6">
                            <div className="jumbo_info">
                                <h1 className="jumbo-title">{productList[slideIndex].name}</h1>
                                <p className="pb-4 me-1 fs-6">{productList[slideIndex].description}</p>
                            </div>
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

