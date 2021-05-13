import React from "react";

const Leaveadd = () => {
	return (
		<>
			<div>
				<section className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1>Employee Leave</h1>
							</div>
							<div className="col-sm-6">
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item">
										<a href="/">Home</a>
									</li>
									<li className="breadcrumb-item">
										<a href="/">Dashboard</a>
									</li>
									<li className="breadcrumb-item">
										<a href>Employee</a>
									</li>
									<li className="breadcrumb-item active">Create Leave</li>
								</ol>
							</div>
						</div>
					</div>
				</section>
				<section className="content">
					<div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
								<h3 className="card-title">Employee Leave</h3>
							</div>
							<div className="card-body">
								<form
									method="post"
									action="{{route('account.employee.leave.store')}}"
									encType="multipart/form-data"
								>
									<div className="row">
										<div className="col-12 col-sm-4">
											<div className="form-group">
												<label className="col-form-label">Employee Name</label>
												<select
													className="form-control select2"
													name="employee_id"
													style={{ width: "100%" }}
												>
													<option>Select employee</option>
													<option value="{{$employee->id}}">
														{"{"}
														{"{"}$employee-&gt;fullname{"}"}
														{"}"}
													</option>
												</select>
											</div>
										</div>
										<div className="col-12 col-sm-4">
											<div className="form-group">
												<label className="col-form-label">Start Date:</label>
												<div
													className="input-group date"
													id="reservationdate"
													data-target-input="nearest"
												>
													<input
														type="text"
														name="start_date"
														placeholder="Start Date"
														className="form-control datetimepicker-input"
														required
														data-target="#reservationdate"
													/>
													<div
														className="input-group-append"
														data-target="#reservationdate"
														data-toggle="datetimepicker"
													>
														<div className="input-group-text">
															<i className="fa fa-calendar" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-12 col-sm-4">
											<div className="form-group">
												<label className="col-form-label">End Date:</label>
												<div
													className="input-group date"
													id="reservation"
													data-target-input="nearest"
												>
													<input
														type="text"
														name="end_date"
														placeholder="End Date"
														className="form-control datetimepicker-input"
														required
														data-target="#reservation"
													/>
													<div
														className="input-group-append"
														data-target="#reservation"
														data-toggle="datetimepicker"
													>
														<div className="input-group-text">
															<i className="fa fa-calendar" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* /.row */}
									<div className="row">
										<div className="col-12 col-sm-8">
											<div className="form-group">
												<label className="col-form-label">Leave Purpose</label>
												<select
													className="form-control select2"
													id="leave_purpose_id"
													name="leave_purpose_id"
													style={{ width: "100%" }}
												>
													<option>Select purpose</option>
													<option value="{{$purpose->id}}">
														{"{"}
														{"{"}$purpose-&gt;name{"}"}
														{"}"}
													</option>
													<option value={0}>New Purpose</option>
												</select>
												<input
													type="text"
													name="name"
													className="form-control form-control-sm"
													placeholder="Write Purpose"
													id="add_others"
													style={{ display: "none" }}
												/>
											</div>
										</div>
									</div>
									<div className="form-group mb-4">
										<button className="btn btn-primary btn-sm" type="submit">
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Leaveadd;
