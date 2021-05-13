import React from "react";

const Profile = () => {
	return (
		<>
			<div className="main-body">
				{/* Breadcrumb */}
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
									<li className="breadcrumb-item active">Profile</li>
								</ol>
							</div>
							{/* /.col */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container-fluid */}
				</div>
				{/* /Breadcrumb */}
				<div className="row gutters-sm">
					<div className="col-md-4 mb-3">
						<div className="card">
							<div className="card-body">
								<div className="d-flex flex-column align-items-center text-center">
									<img
										src="{{ asset('/upload/user_image')}}/{{ $LoggedUserInfo->profile_img}}"
										alt="{{ $LoggedUserInfo['type'] }}"
										className="img-circle elevation-2"
										width={150}
									/>
									<div className="mt-3">
										<h4>
											{" "}
											{"{"}
											{"{"} $LoggedUserInfo['username'] {"}"}
											{"}"}
										</h4>
										<p className="text-muted font-size-sm">
											{"{"}
											{"{"} $LoggedUserInfo['type'] {"}"}
											{"}"}
										</p>
										<a
											href="/profile/edit"
											className="btn btn-primary"
										>
											Edit Profile
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="card mt-3">
							<ul className="list-group list-group-flush">
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-globe mr-2 icon-inline"
										>
											<circle cx={12} cy={12} r={10} />
											<line x1={2} y1={12} x2={22} y2={12} />
											<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
										</svg>
										Website
									</h6>
									<span className="text-secondary">
										{"{"}
										{"{"} $LoggedUserInfo-&gt;webside {"}"}
										{"}"}
									</span>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-facebook mr-2 icon-inline text-primary"
										>
											<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
										</svg>
										Facebook
									</h6>
									<span className="text-secondary">
										{"{"}
										{"{"} $LoggedUserInfo-&gt;facebook {"}"}
										{"}"}
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-8">
						<div className="card mb-3">
							<div className="card-body">
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Full Name</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{"{"}
										{"{"}$LoggedUserInfo-&gt;fullname{"}"}
										{"}"}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Email</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{"{"}
										{"{"}$LoggedUserInfo-&gt;email{"}"}
										{"}"}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Phone</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{"{"}
										{"{"}$LoggedUserInfo-&gt;phone{"}"}
										{"}"}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">User Name</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{"{"}
										{"{"}$LoggedUserInfo-&gt;username{"}"}
										{"}"}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Address</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{"{"}
										{"{"}$LoggedUserInfo-&gt;address{"}"}
										{"}"}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Blood Group</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{"{"}
										{"{"}$LoggedUserInfo-&gt;bloodgroup{"}"}
										{"}"}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Gender</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{"{"}
										{"{"}$LoggedUserInfo-&gt;gender{"}"}
										{"}"}
									</div>
								</div>
								<hr />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Profile;
