import React from "react";

const Leaveshow = () => {
	return (
		<>
			<div className="card shadow mb-4">
				<section className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1>Employee Leave Information</h1>
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
									<li className="breadcrumb-item active">Leave List</li>
								</ol>
							</div>
						</div>
					</div>
				</section>
				<section className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-header py-3">
										<a
											href="/employee/leave/add"
											className="btn btn-primary btn-sm float-right"
											data-toggle="tooltip"
											data-placement="bottom"
											title="Add User"
										>
											<i className="fas fa-plus" /> Add Employee Leave
										</a>
									</div>
									<div className="card-body">
										<table
											id="example2"
											className="table table-bordered table-hover table-striped"
										>
											<thead>
												<tr>
													<th>S.N.</th>
													<th>Full Name</th>
													<th>Role</th>
													<th>Purpose</th>
													<th>Leave Duration</th>
													<th>Status</th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												<tr className="{{$value -> id}}">
													<td>
														{"{"}
														{"{"}$key+1{"}"}
														{"}"}
													</td>
													<td>
														{"{"}
														{"{"}$value['user']['fullname']{"}"}
														{"}"}
													</td>
													<td>
														{"{"}
														{"{"}$value['user']['type']{"}"}
														{"}"}
													</td>
													<td>
														{"{"}
														{"{"}$value['purpose']['name']{"}"}
														{"}"}
													</td>
													<td>
														{"{"}
														{"{"}date('d-m-Y',strtotime($value-&gt;start_date))
														{"}"}
														{"}"} TO {"{"}
														{"{"}date('d-m-Y',strtotime($value-&gt;end_date))
														{"}"}
														{"}"}
													</td>
													<td>
														{" "}
														{"{"}
														{"{"}$value-&gt;status{"}"}
														{"}"}
													</td>
													<td>
														<a
															href="/employee/leave/edit"
															className="btn btn-primary btn-sm float-left mr-1"
															style={{
																height: 30,
																width: 30,
																borderRadius: "50%",
															}}
															data-toggle="tooltip"
															title="edit"
															data-placement="bottom"
														>
															<i className="fas fa-edit" />
														</a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
export default Leaveshow;
