import React from "react";

const Blog = () => {
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
						@if(count($blogs)&gt;0)
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
								<tr>
									<td>
										{"{"}
										{"{"}$blog-&gt;id{"}"}
										{"}"}
									</td>
									<td>
										{"{"}
										{"{"}$blog-&gt;title{"}"}
										{"}"}
									</td>
									<td>
										{"{"}
										{"{"}$blog-&gt;cat_info-&gt;title{"}"}
										{"}"}
									</td>
									<td>
										{"{"}
										{"{"}$blog-&gt;tags{"}"}
										{"}"}
									</td>
									<td>
										{"{"}
										{"{"}$data-&gt;username{"}"}
										{"}"}
									</td>
									<td>
										<img
											src="{{$blog->photo}}"
											className="img-fluid zoom"
											style={{ maxWidth: 80 }}
											alt="{{$blog->photo}}"
										/>
									</td>
									<td>
										@if($blog-&gt;status=='active')
										<span className="badge badge-success">
											{"{"}
											{"{"}$blog-&gt;status{"}"}
											{"}"}
										</span>
										@else
										<span className="badge badge-warning">
											{"{"}
											{"{"}$blog-&gt;status{"}"}
											{"}"}
										</span>
										@endif
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
												style={{ height: 30, width: 30, borderRadius: "50%" }}
												data-toggle="tooltip"
												data-placement="bottom"
												title="Delete"
											>
												<i className="fas fa-trash-alt" />
											</button>
										</form>
									</td>
								</tr>
							</tbody>
						</table>
						<span style={{ float: "right" }}>
							{"{"}
							{"{"}$blogs-&gt;links(){"}"}
							{"}"}
						</span>
						@else
						<h6 className="text-center">
							No blogs found!!! Please create Post
						</h6>
						@endif
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
