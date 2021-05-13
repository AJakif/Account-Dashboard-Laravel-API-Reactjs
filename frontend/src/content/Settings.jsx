import React from "react";

const Settings = () => {
	return (
		<>
			<div className="card">
				<h5 className="card-header">Edit Post</h5>
				<div className="card-body">
					<form
						method="post"
						action="/ "
						encType="multipart/form-data"
					>
						<div className="form-group">
							<label htmlFor="short_des" className="col-form-label">
								Short Description <span className="text-danger">*</span>
							</label>
							<textarea
								className="form-control"
								id="quote"
								name="short_des"
								defaultValue={"{{$data->short_des}}"}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="description" className="col-form-label">
								Description <span className="text-danger">*</span>
							</label>
							<textarea
								className="form-control"
								id="description"
								name="description"
								defaultValue={"{{$data->description}}"}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="inputPhoto" className="col-form-label">
								Logo <span className="text-danger">*</span>
							</label>
							<div className="input-group">
								<input
									id="customFile"
									className="form-control form-file-input"
									type="file"
									name="logo"
									defaultValue="{{$data->logo}}"
								/>
							</div>
							<div id="holder1" style={{ marginTop: 15, maxHeight: 100 }} />
						</div>
						<div className="form-group">
							<label htmlFor="inputPhoto" className="col-form-label">
								Photo <span className="text-danger">*</span>
							</label>
							<div className="input-group">
								<input
									id="customFile"
									className="form-control form-file-input"
									type="file"
									name="photo"
									defaultValue="{{$data->photo}}"
								/>
							</div>
							<div id="holder" style={{ marginTop: 15, maxHeight: 100 }} />
						</div>
						<div className="form-group">
							<label htmlFor="address" className="col-form-label">
								Address <span className="text-danger">*</span>
							</label>
							<input
								type="text"
								className="form-control"
								name="address"
								required
								defaultValue="{{$data->address}}"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email" className="col-form-label">
								Email <span className="text-danger">*</span>
							</label>
							<input
								type="email"
								className="form-control"
								name="email"
								required
								defaultValue="{{$data->email}}"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="phone" className="col-form-label">
								Phone Number <span className="text-danger">*</span>
							</label>
							<input
								type="text"
								className="form-control"
								name="phone"
								required
								defaultValue="{{$data->phone}}"
							/>
						</div>
						<div className="form-group mb-3">
							<button className="btn btn-success" type="submit">
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default Settings;
