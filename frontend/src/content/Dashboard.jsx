import React from "react";

const Dashboard = () => {
	return (
		<>
			<div>
				<div className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1 className="m-0 text-dark">Dashboard</h1>
							</div>
							{/* /.col */}
							<div className="col-sm-6">
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item">
										<a href="/">Home</a>
									</li>
									<li className="breadcrumb-item active">Dashboard</li>
								</ol>
							</div>
							{/* /.col */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container-fluid */}
				</div>
				<section className="content">
					<div className="container-fluid">
						{/* Small boxes (Stat box) */}
						<div className="row">
							<div className="col-lg-3 col-6">
								{/* small box */}
								<div className="small-box bg-info">
									<div className="inner">
										<h3>150</h3>
										<p>New Orders</p>
									</div>
									<div className="icon">
										<i className="ion ion-bag" />
									</div>
									<a href="/" className="small-box-footer">
										More info <i className="fas fa-arrow-circle-right" />
									</a>
								</div>
							</div>
							{/* ./col */}
							<div className="col-lg-3 col-6">
								{/* small box */}
								<div className="small-box bg-success">
									<div className="inner">
										<h3>
											53<sup style={{ fontSize: 20 }}>%</sup>
										</h3>
										<p>Bounce Rate</p>
									</div>
									<div className="icon">
										<i className="ion ion-stats-bars" />
									</div>
									<a href="/" className="small-box-footer">
										More info <i className="fas fa-arrow-circle-right" />
									</a>
								</div>
							</div>
							{/* ./col */}
							<div className="col-lg-3 col-6">
								{/* small box */}
								<div className="small-box bg-success">
									<div className="inner">
										<h3>
											5
										</h3>
										<p>Total Users</p>
									</div>
									<div className="icon">
										<i className="ion ion-person-add" />
									</div>
									<a
										href="/user"
										className="small-box-footer"
									>
										More info <i className="fas fa-arrow-circle-right" />
									</a>
								</div>
							</div>
							{/* ./col */}
							<div className="col-lg-3 col-6">
								{/* small box */}
								<div className="small-box bg-danger">
									<div className="inner">
										<h3>65</h3>
										<p>Unique Visitors</p>
									</div>
									<div className="icon">
										<i className="ion ion-pie-graph" />
									</div>
									<a href="/" className="small-box-footer">
										More info <i className="fas fa-arrow-circle-right" />
									</a>
								</div>
							</div>
							{/* ./col */}
						</div>
						{/* /.row */}
						{/* Main row */}
						<div className="row">
							{/* Left col */}
							<section className="col-lg-7 connectedSortable">
								{/* Custom tabs (Charts with tabs)*/}
								{/* DIRECT CHAT */}
								{/*/.direct-chat */}
								{/* TO DO List */}
								{/* /.card */}
							</section>
							{/* /.Left col */}
							{/* right col (We are only adding the ID to make the widgets sortable)*/}
							<section className="col-lg-5 connectedSortable">
								{/* Map card */}
								{/* /.card */}
								{/* solid sales graph */}
								{/* /.card */}
								{/* Calendar */}
								{/* /.card */}
							</section>
							{/* right col */}
						</div>
						{/* /.row (main row) */}
					</div>
					{/* /.container-fluid */}
				</section>
			</div>
		</>
	);
};
export default Dashboard;
