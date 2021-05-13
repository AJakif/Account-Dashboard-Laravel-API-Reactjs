import React from "react";

const Attadd = () => {
	return (
		<>
			<div>
				<section className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								
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
									<li className="breadcrumb-item active">Add Attendance</li>
								</ol>
							</div>
						</div>
					</div>
				</section>
				<section className="content">
					<div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
								<h3 className="card-title">Employee Attandance</h3>
							</div>
							<form
								method="post"
								action="{{route('account.employee.attendance.store')}}"
								encType="multipart/form-data"
							>
								<div className="card-body">
									<div className="col-12 col-sm-4">
										<div className="form-group">
											<label className="col-form-label">Attendance Date</label>
											<div
												className="input-group date"
												id="reservationdate"
												data-target-input="nearest"
											>
												<input
													type="text"
													name="date"
													id="date"
													placeholder="Attendance Date"
													className="form-control datetimepicker-input"
													required
													autoComplete="off"
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
									<table
										id="example2"
										className="table table-bordered table-hover table-striped"
									>
										<thead>
											<tr>
												<th
													rowSpan={2}
													className="text-center"
													style={{ verticalAlign: "middle" }}
												>
													SL.
												</th>
												<th
													rowSpan={2}
													className="text-center"
													style={{ verticalAlign: "middle" }}
												>
													Employee Name
												</th>
												<th
													colSpan={3}
													className="text-center"
													style={{ verticalAlign: "middle", width: "25%" }}
												>
													Attendance Status
												</th>
											</tr>
											<tr>
												<th
													className="text-center btn present_all"
													style={{
														display: "table-cell",
														backgroundColor: "lightgreen",
													}}
												>
													Present
												</th>
												<th
													className="text-center btn leave_all"
													style={{
														display: "table-cell",
														backgroundColor: "yellow",
													}}
												>
													Leave
												</th>
												<th
													className="text-center btn absent_all"
													style={{
														display: "table-cell",
														backgroundColor: "lightcoral",
													}}
												>
													Absent
												</th>
											</tr>
										</thead>
										<tbody>
											<tr id="div{{$employee->id}}" className="text-center">
												<input
													type="hidden"
													name="employee_id[]"
													defaultValue="{{$employee->id}}"
													className="employee_id"
												/>
												<td>
													{"{"}
													{"{"}$key+1{"}"}
													{"}"}
												</td>
												<td>
													{"{"}
													{"{"}$employee-&gt;fullname{"}"}
													{"}"}
												</td>
												<td colSpan={3}>
													<div className="switch-toggle switch-3 switch-candy">
														<input
															className="present"
															id="present{{$key}}"
															name="attend_status{{$key}}"
															defaultValue="Present"
															type="radio"
															defaultChecked="checked"
														/>
														<label htmlFor="present{{$key}}">Present</label>
														<input
															className="leave"
															id="leave{{$key}}"
															name="attend_status{{$key}}"
															defaultValue="Leave"
															type="radio"
														/>
														<label htmlFor="present{{$key}}">Leave</label>
														<input
															className="absent"
															id="absent{{$key}}"
															name="attend_status{{$key}}"
															defaultValue="Absent"
															type="radio"
														/>
														<label htmlFor="absent{{$key}}">Absent</label>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
									<br />
									<div className="form-group mb-4">
										<button className="btn btn-primary btn-sm" type="submit">
											Submit
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Attadd;
