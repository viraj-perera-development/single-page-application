import React from 'react'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <div>
        <footer className="footer bg-black py-4">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-6 col-md-3">
                        <p className="text-light">il tuo logo</p>
                        {/* <img src={logo} className="img-fluid" alt="logo"/> */}
                    </div>
                    <div className="mt-4 col-md-3 text-light">
                        <p className="m-0 fw-bold text-default">lorem ipsum</p>
                        <p className="m-0">lorem ipsum</p>
                        <p className="m-0">lorem ipsum</p>
                        <p className="m-0">lorem ipsum</p>
                        <p className="m-0">lorem ipsum</p>
                    </div>
                    <div className="mt-3 col-md-2">
                        <p className="m-0 fw-bold text-default fs-6">lorem ipsum</p>
                        <ul className="list-unstyled">
                            <li className="" >
                                <Link className="text-light text-decoration-none" to="/">lorem ipsum</Link>
                            </li>
                            <li className="">
                                <Link className="text-light text-decoration-none" to="/">lorem ipsum</Link>
                            </li>
                            <li className="">
                                <Link className="text-light text-decoration-none" to="/">lorem ipsum</Link>
                            </li>
                            <li className="">
                                <Link className="text-light text-decoration-none" to="/">lorem ipsum</Link>
                            </li>
                            <li className="">
                                <Link className="text-light text-decoration-none" to="/">lorem ipsum</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-3 col-md-2">
                        <p className="m-0 fw-bold text-default fs-6">lorem ipsum</p>
                        <ul className="list-unstyled">
                            <li className="" >
                                <Link className="text-light text-decoration-none" to="/">lorem ipsum</Link>
                            </li>
                            <li className="">
                                <Link className="text-light text-decoration-none" to="/">lorem ipsum</Link>
                            </li>
                            <li className="">
                                <Link className="text-light text-decoration-none" to="/">lorem ipsum</Link>
                            </li>
                            <li className="">
                                <Link className="text-light text-decoration-none" to="/">lorem ipsum</Link>
                            </li>
                            <li className="">
                                <Link className="text-light text-decoration-none" to="/">lorem ipsum</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-3 col-md-2">
                        <p className="m-0 fw-bold text-default fs-6">lorem ipsum</p>
                        <ul className="list-unstyled">
                            <li className="" >
                                <Link className="text-light text-decoration-none" to="/">lorem ipsum</Link>
                            </li>
                            <li className="">
                                <Link className="text-light text-decoration-none" to="/">lorem ipsum</Link>
                            </li>
                            <li className="">
                                <Link className="text-light text-decoration-none" to="/">lorem ipsum</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 my-3 mt-md-5">
                    <p className="mb-3 fw-bold text-default fs-6">SEGUICI SU</p>
                        <a className="btn btn-dark btn-social mx-2" href="/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-md-3 text-lg-end">
                        <a className="link-light text-decoration-none me-3" href="/">Privacy Policy</a>
                        <a className="link-light text-decoration-none" href="/">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
