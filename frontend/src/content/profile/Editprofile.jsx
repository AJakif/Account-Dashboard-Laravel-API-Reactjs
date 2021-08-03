import React, { useEffect, useState } from "react";
import axios from "axios"
//import {useHistory} from "react-router-dom"

const Editprofile = () => {
	const [user,setUser] = useState([]);
	const [fullname,SetFullname]=useState("")
	const [username,SetUsername]=useState("")
	const [email,SetEmail]=useState("")
	const [address,SetAddress]=useState("")
	const [phone,SetPhone]=useState("")

	useEffect(() => {
		loadUser();
	}, []);

	const loadUser = async () => {
		  await axios.get(`http://127.0.0.1:8000/api/profile`)
		 .then(
			response =>setUser(response.data)
		 )
		 .catch(error =>{
			 return error;
		 });
	};




//const history = useHistory();
   async function submit()
    {
		await axios.put('http://127.0.0.1:8000/api/editprofile/3',{
			fullname,username,email,address,phone
		  })
		  .then((response) => {
			console.log(response);
		  }, (error) => {
			console.log(error);
		  });
   
//history.push("/profile")
}
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
														alt={user.type}
														width={150}
													/>
												</div>
												<div className="mt-3">
													<h4>
														{username}
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
													defaultValue={fullname}
													onChange={(e)=>SetFullname(e.target.defaultValue)}
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
													value={user.username}
													onChange={(e)=>SetUsername(e.target.value)}
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
													value={user.email}
													onChange={(e)=>SetEmail(e.target.value)}
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
													value={user.phone}
													onChange={(e)=>SetPhone(e.target.value)}
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
													value={user.address}
													onChange={(e)=>SetAddress(e.target.value)}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<button type="submit"  onClick={submit} name="update" className="btn btn-primary">
									Submit
								</button>
							</div>
						</div>
					</section>
				
			</div>
		</>
	);
};
export default Editprofile;
