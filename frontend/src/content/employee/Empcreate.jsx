import React from "react";

const Empcreate = () => {
	return (
		<>
			<div>
				<section className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1>Employee Information</h1>
							</div>
							<div className="col-sm-6">
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item">
										<a href="/">Home</a>
									</li>
									<li className="breadcrumb-item">
										<a href="/account/dashboard">Dashboard</a>
									</li>
									<li className="breadcrumb-item">
										<a href>Employee</a>
									</li>
									<li className="breadcrumb-item active">Create Employee</li>
								</ol>
							</div>
						</div>
					</div>
					{/* /.container-fluid */}
				</section>
				<section className="content">
					<div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
								<h3 className="card-title">Regester Employee</h3>
							</div>
							{/* /.card-header */}
							<div className="card-body">
								<form
									method="post"
									action="{{route('account.employee.store')}}"
									encType="multipart/form-data"
								>
									@csrf
									<div className="row">
										<div className="col-12 col-sm-4">
											<div className="form-group">
												<label className="col-form-label">Full Name</label>
												<input
													id="fullname"
													type="text"
													name="fullname"
													placeholder="Enter Full name"
													defaultValue="{{old('fullname')}}"
													className="form-control"
												/>
												@error('fullname')
												<span className="text-danger">
													{"{"}
													{"{"}$message{"}"}
													{"}"}
												</span>
												@enderror
											</div>
										</div>
										<div className="col-12 col-sm-4">
											<div className="form-group">
												<label className="col-form-label">User Name</label>
												<input
													id="username"
													type="text"
													name="username"
													placeholder="Enter User name"
													defaultValue="{{old('username')}}"
													className="form-control"
												/>
												@error('username')
												<span className="text-danger">
													{"{"}
													{"{"}$message{"}"}
													{"}"}
												</span>
												@enderror
											</div>
										</div>
										<div className="col-12 col-sm-4">
											<div className="form-group">
												<label className="col-form-label">Email</label>
												<input
													id="email"
													type="text"
													name="email"
													placeholder="Enter Email"
													defaultValue="{{old('email')}}"
													className="form-control"
												/>
												@error('email')
												<span className="text-danger">
													{"{"}
													{"{"}$message{"}"}
													{"}"}
												</span>
												@enderror
											</div>
										</div>
										{/* /.col */}
									</div>
									{/* /.row */}
									<div className="row">
										<div className="col-12 col-sm-4">
											<div className="form-group">
												<label className="col-form-label">Password</label>
												<input
													type="password"
													className="form-control"
													name="password"
													placeholder="Enter Password"
												/>
												@error('password')
												<span className="text-danger">
													{"{"}
													{"{"}$message{"}"}
													{"}"}
												</span>
												@enderror
											</div>
										</div>
										<div className="col-12 col-sm-4">
											<div className="form-group">
												<label className="col-form-label">Phone Number</label>
												<input
													id="phone"
													type="text"
													name="phone"
													placeholder="Enter Phone Number"
													defaultValue="{{old('phone')}}"
													className="form-control"
												/>
												@error('phone')
												<span className="text-danger">
													{"{"}
													{"{"}$message{"}"}
													{"}"}
												</span>
												@enderror
											</div>
										</div>
										<div className="col-12 col-sm-4">
											<div className="form-group">
												<label className="col-form-label">Gender</label>
												<select
													className="form-control select2"
													name="gender"
													style={{ width: "100%" }}
												>
													<option>Select gender</option>
													<option value="male">Male</option>
													<option value="female">Female</option>
												</select>
											</div>
										</div>
										{/* /.col */}
									</div>
									{/* /.row */}
									<div className="row">
										<div className="col-12 col-sm-4">
											<div className="form-group">
												<label className="col-form-label">Blood Group</label>
												<select
													className="form-control select2"
													name="bloodgroup"
													style={{ width: "100%" }}
												>
													<option>Select Blood Group</option>
													<option value="A+">A+</option>
													<option value="A-">A-</option>
													<option value="B+">B+</option>
													<option value="B-">B-</option>
													<option value="AB+">AB+</option>
													<option value="AB-">AB-</option>
													<option value="O+">O+</option>
													<option value="O-">O-</option>
												</select>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-12 col-sm-4">
											<div className="form-group">
												<label className="col-form-label">Role</label>
												<select
													className="form-control select2"
													name="type"
													style={{ width: "100%" }}
												>
													<option>Select Role</option>
													<option value="employee">Employee</option>
													<option value="guide">Guide</option>
												</select>
											</div>
										</div>
										<div className="col-12 col-sm-4">
											<div className="form-group">
												<label className="col-form-label">Salary</label>
												<input
													id="salary"
													type="text"
													name="salary"
													placeholder="Enter Salary"
													defaultValue="{{old('salary')}}"
													className="form-control"
												/>
												@error('salary')
												<span className="text-danger">
													{"{"}
													{"{"}$message{"}"}
													{"}"}
												</span>
												@enderror
											</div>
										</div>
										<div className="col-12 col-sm-4">
											{/* Date */}
											<div className="form-group">
												<label className="col-form-label">Join Date:</label>
												<div
													className="input-group date"
													id="reservationdate"
													data-target-input="nearest"
												>
													<input
														type="text"
														name="join_date"
														className="form-control datetimepicker-input"
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
										{/* /.col */}
										{/* /.col */}
									</div>
									<div className="row">
										<div className="form-group col-md-4">
											<label className="col-form-label">Profile Picture</label>
											<input
												type="file"
												name="image"
												className="form-control form-control-sm"
												id="image"
											/>
										</div>
									</div>
									<div className="form-group mb-3">
										<button className="btn btn-primary" type="submit">
											Submit
										</button>
									</div>
								</form>
							</div>
							{/* /.card-body */}
						</div>
						{/* /.card */}
						{/* /.row */}
					</div>
					{/* /.container-fluid */}
				</section>
			</div>
		</>
	);
};
export default Empcreate;
