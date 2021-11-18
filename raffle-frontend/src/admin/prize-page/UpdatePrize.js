import React from "react";

function UpdatePrize() {

    return (
        <div>
            <div className="bgcolor prize">
                <h2 className="title-style">Update Prize</h2>
            </div>
            <div className="main-content-inner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-xlg-3 col-md-5">
                            <div className="card rounded">
                                <div className="card-body profile-card">
                                    <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" alt="img" />
                                    <br /><br />
                                    <h4 className="card-title m-t-10">Mouse</h4>
                                    <br />
                                    <h6 className="card-subtitle">Date added: 11-11-21</h6>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-xlg-9 col-md-7">
                            <div className="card-body profile card">
                                <form className="form-horizontal form-material">
                                    <div className="form-group">
                                        <label className="col-md-12 mb-0">Prize Name</label>
                                        <div className="col-md-12">
                                            <input type="text"
                                                className="form-control pl-0 form-control-line" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label className="col-md-12 mb-0">Description</label>
                                        <div className="col-md-12">
                                            <input type="text"
                                                className="form-control pl-0 form-control-line" />
                                        </div>
                                    </div>
                                    <br /><br />
                                    <input type="submit" name="update" value="Update" className="btn btn-warning" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UpdatePrize;