import React from "react";

const Sidebar = () => {
	return (
		<>
			<aside className="main-sidebar sidebar-dark-primary elevation-4">
				{/* Brand Logo */}
				<a href="/" className="brand-link">
					<img
						src="dist/img/AdminLTELogo.png"
						alt="AdminLTE Logo"
						className="brand-image img-circle elevation-3"
						style={{ opacity: ".8" }}
					/>
					<span className="brand-text font-weight-light">Account</span>
				</a>
				{/* Sidebar */}
				<div className="sidebar">
					{/* Sidebar user panel (optional) */}
					<div className="user-panel mt-3 pb-3 mb-3 d-flex">
						<div className="image">
							<img
								src="/profile"
								className="img-circle elevation-2"
								alt="UserImage"
							/>
						</div>
						<div className="info">
							<a href="/profile" className="d-block">
								Account
							</a>
						</div>
					</div>
					{/* Sidebar Menu */}
					<nav className="mt-2">
						<ul
							className="nav nav-pills nav-sidebar flex-column"
							data-widget="treeview"
							role="menu"
							data-accordion="false"
						>
							{/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
							{/* Profile Menu */}
							<li className="nav-item has-treeview ">
								<a href="/" className="nav-link ">
									<i className="nav-icon fas fa-id-badge" />
									<p>
										Profile
										<i className="right fas fa-angle-left" />
									</p>
								</a>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<a href="/profile/edit" className="nav-link ">
											<i className="fas fa-user-edit" />
											<p>Edit Profile</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/logout" className="nav-link">
											<i className="fas fa-sign-out-alt" />
											<p>Logout</p>
										</a>
									</li>
								</ul>
							</li>
							{/* Blog Menu */}
							<li className="nav-item has-treeview ">
								<a href="/" className="nav-link">
									<i className="nav-icon fas fa-blog" />
									<p>
										Blog
										<i className="right fas fa-angle-left" />
									</p>
								</a>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<a href="/blog" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<p>All Blog</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/blog/create" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<p>Add Blog</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/blog/tag" className="nav-link ">
											<i className="fas fa-tag nav-icon" />
											<p>Blog Tag</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/blog/catagory" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<p>Blog Category</p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/blog/comment" className="nav-link">
											<i className="nav-icon fas fa-comments" />
											<p>Comments</p>
										</a>
									</li>
								</ul>
							</li>
							{/* Coupon Menu */}
							<li className="nav-item has-treeview ">
								<a href="/" className="nav-link">
									<i className="nav-icon fas fa-percent" />
									<p>
										Coupon
										<i className="right fas fa-angle-left" />
									</p>
								</a>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<a href="/coupon" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<p> View Coupons </p>
										</a>
									</li>
									<li className="nav-item">
										<a href="/coupon/create" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p> Create Coupon</p>
										</a>
									</li>
								</ul>
							</li>
							{/* Employee management */}
							<li className="nav-header">Employee Management</li>
							<li className="nav-item has-treeview ">
								<a href="/" className="nav-link">
									<i className="nav-icon fas fa-user-circle" />
									<p>
										Employee
										<i className="right fas fa-angle-left" />
									</p>
								</a>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<a href="/employee" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<p>Employee List</p>
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview ">
								<a href="/" className="nav-link">
									<i className="nav-icon fas fa-hand-holding-usd" />
									<p>
										Salary
										<i className="right fas fa-angle-left" />
									</p>
								</a>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<a href="/salary" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<p>Employee Salary</p>
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview ">
								<a href="/" className="nav-link">
									<i className="nav-icon fas fa-hand-holding-usd" />
									<p>
										Employee Activity
										<i className="right fas fa-angle-left" />
									</p>
								</a>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<a href="/employee/attendance" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<p>Employee Attendance</p>
										</a>
									</li>
								</ul>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<a href="/employee/leave" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<p>Employee Leave</p>
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview ">
								<a href="/" className="nav-link">
									<i className="nav-icon fas fa-hand-holding-usd" />
									<p>
										Payroll
										<i className="right fas fa-angle-left" />
									</p>
								</a>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<a href="/monthlysalary" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<p>Monthly Salary</p>
										</a>
									</li>
								</ul>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<a href="/salary/pay" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<p>Pay Monthly Salary</p>
										</a>
									</li>
								</ul>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<a href="/salary/view" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<p>Monthly Salary Log</p>
										</a>
									</li>
								</ul>

								<li className="nav-item">
									<a href="/extracost" className="nav-link ">
										<i className="fas fa-dollar-sign" />
										<p>Extra Cost</p>
									</a>
								</li>

								<li className="nav-item">
									<a href="/order" className="nav-link ">
										<i className="fas fa-dollar-sign" />
										<p>Order</p>
									</a>
								</li>
							</li>

							<li className="nav-header">Reports</li>
							<li className="nav-item">
								<a href="/monthlyprofit" className="nav-link ">
									<i className="far fa-circle nav-icon" />
									<p>Monthly Profit</p>
								</a>
							</li>
							<li className="nav-header">Website</li>
							<li className="nav-item">
								<a href="/settings" className="nav-link">
									<i className="nav-icon fas fa-cog" />
									<p>Settings</p>
								</a>
							</li>
							<li className="nav-header">MISCELLANEOUS</li>
						</ul>
					</nav>
					{/* /.sidebar-menu */}
				</div>
				{/* /.sidebar */}
			</aside>
		</>
	);
};
export default Sidebar;
