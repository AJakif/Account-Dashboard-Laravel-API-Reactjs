import React from "react";

const Cshow = () => {
	return (
		<>
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary float-left">
						Coupon List
					</h6>
					<a
						href="{{route('coupon.create')}}"
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
						@if(count($coupons)&gt;0) @foreach($coupons as $coupon) @endforeach
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
								<tr>
									<td>
										{"{"}
										{"{"}$coupon-&gt;id{"}"}
										{"}"}
									</td>
									<td>
										{"{"}
										{"{"}$coupon-&gt;code{"}"}
										{"}"}
									</td>
									<td>
										@if($coupon-&gt;type=='fixed')
										<span className="badge badge-primary">
											{"{"}
											{"{"}$coupon-&gt;type{"}"}
											{"}"}
										</span>
										@else
										<span className="badge badge-warning">
											{"{"}
											{"{"}$coupon-&gt;type{"}"}
											{"}"}
										</span>
										@endif
									</td>
									<td>
										@if($coupon-&gt;type=='fixed') ${"{"}
										{"{"}number_format($coupon-&gt;value,2){"}"}
										{"}"}
										@else
										{"{"}
										{"{"}$coupon-&gt;value{"}"}
										{"}"}% @endif
									</td>
									<td>
										@if($coupon-&gt;status=='active')
										<span className="badge badge-success">
											{"{"}
											{"{"}$coupon-&gt;status{"}"}
											{"}"}
										</span>
										@else
										<span className="badge badge-warning">
											{"{"}
											{"{"}$coupon-&gt;status{"}"}
											{"}"}
										</span>
										@endif
									</td>
									<td>
										<a
											href="{{route('coupon.edit',$coupon->id)}}"
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
											action="{{route('coupon.destroy',[$coupon->id])}}"
										>
											@csrf @method('delete')
											<button
												className="btn btn-danger btn-sm .dltBtn"
												data-id="{{$coupon-"
											>
												id{"}"}
												{"}"} style="height:30px; width:30px;border-radius:50%"
												data-toggle="tooltip" data-placement="bottom"
												title="Delete"&gt;
												<i className="fas fa-trash-alt" />
											</button>
										</form>
									</td>
								</tr>
							</tbody>
						</table>
						<span style={{ float: "right" }}>
							{"{"}
							{"{"}$coupons-&gt;links(){"}"}
							{"}"}
						</span>
						@else
						<h6 className="text-center">
							No Coupon found!!! Please create coupon
						</h6>
						@endif
					</div>
				</div>
			</div>
		</>
	);
};
export default Cshow;
