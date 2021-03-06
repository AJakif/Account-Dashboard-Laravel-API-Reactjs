import React from "react";

const CreateBlog = () => {
	
	return (
		<>
			<div className="card">
				<h5 className="card-header">Add Blog</h5>
				<div className="card-body">
					
						<div className="form-group">
							<label htmlFor="inputTitle" className="col-form-label">
								Title <span className="text-danger">*</span>
							</label>
							<input
								id="inputTitle"
								type="text"
								name="title"
								placeholder="Enter title"
								defaultValue="{{old('title')}}"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="quote" className="col-form-label">
								Quote
							</label>
							<textarea
								className="form-control"
								id="quote"
								name="quote"
								defaultValue={"{{old('quote')}}"}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="summary" className="col-form-label">
								Summary <span className="text-danger">*</span>
							</label>
							<textarea
								className="form-control"
								id="summary"
								name="summary"
								defaultValue={"{{old('summary')}}"}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="description" className="col-form-label">
								Description
							</label>
							<textarea
								className="form-control"
								id="description"
								name="description"
								defaultValue={"{{old('description')}}"}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="blog_cat_id">
								Category <span className="text-danger">*</span>
							</label>
							<select name="blog_cat_id" className="form-control">
								<option value>--Select any category--</option>
								<option value="{{$data->id}}">
									{"{"}
									{"{"}$data-&gt;title{"}"}
									{"}"}
								</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="tags">Tag (Select any 2 tags) </label>
							<select
								name="tags[]"
								multiple
								data-live-search="true"
								className="form-control selectpicker"
							></select>
						</div>
						<div className="form-group">
							<label htmlFor="added_by">Author</label>
							<select name="added_by" className="form-control">
								<option value="{{ $LoggedUserInfo['id'] }}">
									{"{"}
									{"{"} $LoggedUserInfo['username'] {"}"}
									{"}"}
								</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="inputPhoto" className="col-form-label">
								Photo <span className="text-danger">*</span>
							</label>
							<div className="input-group">
								<input
									name="myfile"
									type="file"
									className="form-file-input"
									id="customFile"
								/>
							</div>
							<div id="holder" style={{ marginTop: 15, maxHeight: 100 }} />
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
				</div>
			</div>
		</>
	);
};

export default CreateBlog;
