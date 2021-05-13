import React from "react";

const Empedit = () => {
	return (
		<>
			<div>
				<section className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1>Edit Employee Information</h1>
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
									<li className="breadcrumb-item active">Edit Employee</li>
								</ol>
							</div>
						</div>
					</div>
					{/* /.container-fluid */}
				</section>
				<form
					action="{{route('account.employee.update',[$user->id])}}"
					method="POST"
					encType="multipart/form-data"
				>
					<section className="content">
						<div className="container-fluid">
							<div className="card card-default">
								<div className="card-header">
									<h3 className="card-title">Regester Employee</h3>
								</div>
								{/* /.card-header */}
								<div className="card-body">
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
													defaultValue="{{$user->fullname}}"
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
													defaultValue="{{$user->username}}"
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
													defaultValue="{{$user->email}}"
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
												<label className="col-form-label">Phone Number</label>
												<input
													id="phone"
													type="text"
													name="phone"
													placeholder="Enter Phone Number"
													defaultValue="{{$user->phone}}"
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
										{/* /.col */}
									</div>
									{/* /.row */}
									<div className="row"></div>
									<div className="row">
										<div className="form-group col-md-4">
											<label className="col-form-label">Profile Picture</label>
											<div className="image">
												<img
													src="{{ asset('/upload/user_image')}}/{{ $user->profile_img}}"
													className="img-circle elevation-2"
													alt="{{ $user->username }}"
													width={150}
												/>
											</div>
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
								</div>
								{/* /.card-body */}
							</div>
							{/* /.card */}
							{/* /.row */}
						</div>
						{/* /.container-fluid */}
					</section>
				</form>
			</div>
		</>
	);
};
export default Empedit;
