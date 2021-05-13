import React from "react";

const Attview = () => {
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
									<div className="card-body">
										<table
											id="example2"
											className="table table-bordered table-hover table-striped"
										>
											<thead>
												<tr>
													<th>S.N.</th>
													<th>Full Name</th>
													<th>Date</th>
													<th>Attendance Status</th>
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
														{"{"}date('d-m-Y',strtotime($value-&gt;date)){"}"}
														{"}"}
													</td>
													<td>
														{"{"}
														{"{"}$value-&gt;attend_status{"}"}
														{"}"}
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

export default Attview;
