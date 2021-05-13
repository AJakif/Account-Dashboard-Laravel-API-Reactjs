import React from "react";

const Editprofile = () => {
	return (
		<>
			<div>
				<div className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1 className="m-0 text-dark">Profile</h1>
							</div>
							{/* /.col */}
							<div className="col-sm-6">
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item">
										<a href="/">Home</a>
									</li>
									<li className="breadcrumb-item">
										<a href="/account/dashboard">Dashboard</a>
									</li>
									<li className="breadcrumb-item">
										<a href="/account/dashboard/profile">Profile</a>
									</li>
									<li className="breadcrumb-item active">Profile Edit</li>
								</ol>
							</div>
							{/* /.col */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container-fluid */}
				</div>
				<form
					action="{{ route('account.update',$LoggedUserInfo['id'] )}}"
					method="post"
					encType="multipart/form-data"
				>
					@csrf
					<section className="content">
						<div className="container-fluid">
							<div className="row">
								{/* left column */}
								<div className="col-md-5">
									{/* general form elements */}
									<div className="card card-primary">
										<div className="card-header">
											<h3 className="card-title">Profile Picture</h3>
										</div>
										{/* /.card-header */}
										{/* form start */}
										<div className="card-body">
											<div className="d-flex flex-column align-items-center text-center">
												<div className="image">
													<img
														src="{{ asset('/upload/user_image')}}/{{ $LoggedUserInfo->profile_img}}"
														className="img-circle elevation-2"
														alt="{{ $LoggedUserInfo['type'] }}"
														width={150}
													/>
												</div>
												<div className="mt-3">
													<h4>
														{" "}
														{"{"}
														{"{"} $LoggedUserInfo['username'] {"}"}
														{"}"}
													</h4>
												</div>
												<div className="form-group">
													<div className="input-group">
														<label
															className="form-file-label"
															htmlFor="customFile"
														>
															<span className="form-file-text">
																Choose Profile Picture...
															</span>
															<span className="form-file-button" />
														</label>
														<input
															name="myfile"
															type="file"
															className="form-file-input"
															id="customFile"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-7">
									{/* general form elements disabled */}
									<div className="card mb-3 card-primary">
										<div className="card-header">
											<h3 className="card-title">Profile Information</h3>
										</div>
										{/* /.card-header */}
										{/* form start */}
										<div className="card-body">
											<div className="input-group mb-3">
												<div className="input-group-prepend">
													<span className="input-group-text">Fullname</span>
												</div>
												<input
													type="text"
													className="form-control"
													id="fullname"
													name="fullname"
													placeholder="Fullname"
													defaultValue="{{ $LoggedUserInfo['fullname']}}"
												/>
											</div>
											<div className="input-group mb-3">
												<div className="input-group-prepend">
													<span className="input-group-text">Username</span>
												</div>
												<input
													type="text"
													className="form-control"
													id="username"
													name="username"
													placeholder="Username"
													defaultValue="{{ $LoggedUserInfo['username']}}"
												/>
											</div>
											<div className="input-group mb-3">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-envelope" />
													</span>
												</div>
												<input
													type="email"
													className="form-control"
													id="exampleInputEmail1"
													name="email"
													placeholder="email"
													defaultValue="{{ $LoggedUserInfo['email']}}"
												/>
											</div>
											<div className="input-group mb-3">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-phone-alt" />
													</span>
												</div>
												<input
													type="phone"
													className="form-control"
													id="exampleInputphone"
													name="phone"
													placeholder="phone"
													defaultValue="{{ $LoggedUserInfo['phone']}}"
												/>
											</div>
											<div className="input-group mb-3">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-map-marker-alt" />
													</span>
												</div>
												<input
													type="text"
													className="form-control"
													id="address"
													name="address"
													placeholder="address"
													defaultValue="{{ $LoggedUserInfo['address']}}"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<button type="submit" name="update" className="btn btn-primary">
									Submit
								</button>
							</div>
						</div>
					</section>
				</form>
			</div>
		</>
	);
};
export default Editprofile;
