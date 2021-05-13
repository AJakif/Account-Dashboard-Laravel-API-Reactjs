import React from "react";

const Cedit = () => {
	return (
		<>
			<section classname="content">
				<div classname="container-fluid">
					<div classname="row">
						<div classname="col-12">
							<div classname="card">
								<h5 classname="card-header">Edit Coupon</h5>
								<div classname="card-body">
									<form
										method="post"
										action="{{route('coupon.update',[$coupon->id])}}"
									>
										<div classname="form-group">
											<label htmlfor="inputTitle" classname="col-form-label">
												Coupon Code <span classname="text-danger">*</span>
											</label>
											<input
												id="inputTitle"
												type="text"
												name="code"
												placeholder="Enter Coupon Code"
												defaultvalue="{{$coupon->code}}"
												classname="form-control"
											/>
										</div>
										<div classname="form-group">
											<label htmlfor="type" classname="col-form-label">
												Type <span classname="text-danger">*</span>
											</label>
											<select name="type" classname="form-control">
												<option value="fixed">Fixed</option>
												<option value="percent">Percent</option>
											</select>
										</div>
										<div classname="form-group">
											<label htmlfor="inputTitle" classname="col-form-label">
												Value <span classname="text-danger">*</span>
											</label>
											<input
												id="inputTitle"
												type="number"
												name="value"
												placeholder="Enter Coupon value"
												defaultvalue="{{$coupon->value}}"
												classname="form-control"
											/>
										</div>
										<div classname="form-group">
											<label htmlfor="status" classname="col-form-label">
												Status <span classname="text-danger">*</span>
											</label>
											<select name="status" classname="form-control">
												<option value="active">Active</option>
												<option value="inactive">Inactive</option>
											</select>
										</div>
										<div classname="form-group mb-3">
											<button classname="btn btn-success" type="submit">
												Update
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Cedit;
