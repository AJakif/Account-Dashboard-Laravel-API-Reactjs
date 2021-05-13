import React from "react";

const Ccreate = () => {
	return (
		<>
			<div className="card">
				<h5 className="card-header">Add Coupon</h5>
				<div className="card-body">
					<form method="post" action="{{route('coupon.store')}}">
						{"{"}
						{"{"}csrf_field(){"}"}
						{"}"}
						<div className="form-group">
							<label htmlFor="inputTitle" className="col-form-label">
								Coupon Code <span className="text-danger">*</span>
							</label>
							<input
								id="inputTitle"
								type="text"
								name="code"
								placeholder="Enter Coupon Code"
								defaultValue="{{old('code')}}"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="type" className="col-form-label">
								Type <span className="text-danger">*</span>
							</label>
							<select name="type" className="form-control">
								<option value="fixed">Fixed</option>
								<option value="percent">Percent</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="inputTitle" className="col-form-label">
								Value <span className="text-danger">*</span>
							</label>
							<input
								id="inputTitle"
								type="number"
								name="value"
								placeholder="Enter Coupon value"
								defaultValue="{{old('value')}}"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="status" className="col-form-label">
								Status <span className="text-danger">*</span>
							</label>
							<select name="status" className="form-control">
								<option value="active">Active</option>
								<option value="inactive">Inactive</option>
							</select>
						</div>
						<div className="form-group mb-3">
							<button type="reset" className="btn btn-warning">
								Reset
							</button>
							<button className="btn btn-success" type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default Ccreate;
