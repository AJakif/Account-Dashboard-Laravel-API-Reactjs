import React, { useEffect, useState } from "react";
import axios from "axios"

const Attshow = () => {
	const [attd,setAttd] = useState([])

	useEffect(() => {
		loadCoupon();
	}, []);
	const loadCoupon = async () => {
		await axios
			.get(`http://127.0.0.1:8000/api/Employee/attendance/view`)
			.then(response => setAttd(response.data))
			.catch(error => {
				return error;
			});
	};
	return (
		<>
			<div className="card shadow mb-4">
				<section className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1>Employee attendance Information</h1>
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
									<li className="breadcrumb-item active">attendance List</li>
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
											href="/employee/attendance/add"
											className="btn btn-primary btn-sm float-right"
											data-toggle="tooltip"
											data-placement="bottom"
											title="Add User"
										>
											<i className="fas fa-plus" /> Add Employee Attendance
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
													<th>Date</th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												{attd.map((item,i)=>{
													return(
														<tr className="{item.id}">
													<td>
														{i+1}
													</td>
													<td>
														{item.date}
													</td>
													<td>
														<a
															href="/employee/attendance/edit"
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
														<a
															href="/employee/attendance/view"
															className="btn btn-success btn-sm float-left mr-1"
															style={{
																height: 30,
																width: 30,
																borderRadius: "50%",
															}}
															data-toggle="tooltip"
															title="edit"
															data-placement="bottom"
														>
															<i className="fas fa-eye" />
														</a>
													</td>
												</tr>
													)
												})}
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

export default Attshow;
