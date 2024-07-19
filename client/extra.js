<section className="vh-100" style={{ backgroundColor: "#eee" }}>
    <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px" }}>
                    <div className="card-body p-md-1" >
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5" style={{ border: "2px solid black" }} >

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-2 mt-4">Sign up</p>

                                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onchange} />
                                            <label className="form-label" for="form3Example1c">Your Name</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onchange} />
                                            <label className="form-label" for="form3Example3c">Your Email</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onchange} />
                                            <label className="form-label" for="form3Example4c">Password</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="text" className="form-control" name='location' value={credentials.location} onChange={onchange} />
                                            <label className="form-label" for="form3Example4cd">Location</label>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center mb-3'>
                                        <Link to="/login" className="form-check-label">Already a user</Link>
                                    </div>

                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Register</button>
                                    </div>

                                </form>

                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center" style={{ height: "100vh", border: "2px solid black" }}>

                                <img src={loginimg}
                                    className="img-fluid" alt="..." />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
