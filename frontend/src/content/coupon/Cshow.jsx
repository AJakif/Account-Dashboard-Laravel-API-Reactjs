import React, { useEffect, useState } from "react";
import axios from "axios";

const Cshow = () => {
	const [coupon, setCoupon] = useState([]);
	useEffect(() => {
		loadCoupon();
	}, []);
	const loadCoupon = async () => {
		await axios
			.get(`http://127.0.0.1:8000/api/coupon`)
			.then(response => setCoupon(response.data.data))
			.catch(error => {
				return error;
			});
	};
	return (
		<>
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary float-left">
						Coupon List
					</h6>
					<a
						href="/coupon/create"
						className="btn btn-primary btn-sm float-right"
						data-toggle="tooltip"
						data-placement="bottom"
						title="Add User"
					>
						<i className="fas fa-plus" /> Add Coupon
					</a>
				</div>
				<div className="card-body">
					<div className="table-responsive">
						<table
							className="table table-bordered"
							id="banner-dataTable"
							width="100%"
							cellSpacing={0}
						>
							<thead>
								<tr>
									<th>S.N.</th>
									<th>Coupon Code</th>
									<th>Type</th>
									<th>Value</th>
									<th>Status</th>
									<th>Action</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>S.N.</th>
									<th>Coupon Code</th>
									<th>Type</th>
									<th>Value</th>
									<th>Status</th>
									<th>Action</th>
								</tr>
							</tfoot>
							<tbody>
								{coupon.map((item) => {
									return (
										<tr>
											<td>{item.id}</td>
											<td>{item.code}</td>
											<td>
												{item.type === "fixed" ? 
													<span className="badge badge-primary">
														{item.type}
													</span>
												 : 
													<span className="badge badge-warning">
														{item.type}
													</span>
												}
												</td>
											
											
												{
												item.type ==='fixed'
												?
												<td>{item.value}</td>
												:<td>
													{item.value}
												</td>
												}
											
											<td>
												{item.status === "active" ? 
													<span className="badge badge-success">
														{item.status}
													</span>
												 : 
													<span className="badge badge-warning">
														{item.status}
													</span>
												}
											</td>
											<td>
												<a
													href="/coupon/edit/{item.id}"
													className="btn btn-primary btn-sm float-left mr-1"
													style={{ height: 30, width: 30, borderRadius: "50%" }}
													data-toggle="tooltip"
													title="edit"
													data-placement="bottom"
												>
													<i className="fas fa-edit" />
												</a>

													<button
														classname="btn btn-danger btn-sm .dltBtn"
														data-id={item.id}
														style={{
															height: 30,
															width: 30,
															borderRadius: "50%",
														}}
														data-toggle="tooltip"
														data-placement="bottom"
														title="Delete"
													>
														<i classname="fas fa-trash-alt"></i>
													</button>
												
											</td>
										</tr>
									)})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};
export default Cshow;
