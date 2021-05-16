import React, { useEffect, useState } from "react";
import Axios from "axios";

const Blog = () => {
	const [blog, setBlog] = useState([]);
	useEffect(() => {
		loadBlog();
	}, []);

	const loadBlog = async () => {
		await Axios
			.get(`http://127.0.0.1:8000/api/blog`)
			.then(
				response => setBlog(response.data)
			).catch(error => {
				return error;
			});
	};
	return (
		<>
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary float-left">
						Blog Lists
					</h6>
					<a
						href="/blog/create"
						className="btn btn-primary btn-sm float-right"
						data-toggle="tooltip"
						data-placement="bottom"
						title="Add User"
					>
						<i className="fas fa-plus" /> Add Blog
					</a>
				</div>
				<div className="card-body">
					<div className="table-responsive">
						<table
							className="table table-bordered"
							id="product-dataTable"
							width="100%"
							cellSpacing={0}
						>
							<thead>
								<tr>
									<th>S.N.</th>
									<th>Title</th>
									<th>Category</th>
									<th>Tag</th>
									<th>Author</th>
									<th>Photo</th>
									<th>Status</th>
									<th>Action</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>S.N.</th>
									<th>Title</th>
									<th>Category</th>
									<th>Tag</th>
									<th>Author</th>
									<th>Photo</th>
									<th>Status</th>
									<th>Action</th>
								</tr>
							</tfoot>
							<tbody>
								{blog.map((item) => {
									return (
										<tr>
											<td key ={item.id} >{item.id}</td>
											<td>{item.title}</td>
											<td>nai</td>
											<td>{item.tags}</td>
											<td>nai</td>
											<td>
												<img
													src="/"
													className="img-fluid zoom"
													style={{ maxWidth: 80 }}
													alt={item.photo}
												/>
											</td>
											<td>
												{/* if(item.status== "active")
												{
													<span className="badge badge-success">
														{item.status}
													</span>
												}
												else
												{
													<span className="badge badge-warning">
														{item.status}
													</span>
												} */}nope
											</td>
											<td>
												<a
													href="/blog/edit"
													className="btn btn-primary btn-sm float-left mr-1"
													style={{ height: 30, width: 30, borderRadius: "50%" }}
													data-toggle="tooltip"
													title="edit"
													data-placement="bottom"
												>
													<i className="fas fa-edit" />
												</a>
												<form
													method="POST"
													action="{{route('account.delete.blog',[$blog->id])}}"
												>
													<button
														className="btn btn-danger btn-sm dltBtn"
														data-id="{{$blog->id}}"
														style={{
															height: 30,
															width: 30,
															borderRadius: "50%",
														}}
														data-toggle="tooltip"
														data-placement="bottom"
														title="Delete"
													>
														<i className="fas fa-trash-alt" />
													</button>
												</form>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
						<span style={{ float: "right" }}>{blog.link}</span>
						{/* @else
						<h6 className="text-center">
							No blogs found!!! Please create Post
						</h6>
						@endif */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
