import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./content/Dashboard"
import Profile from "./content/profile/Profile"
import Editprofile from "./content/profile/Editprofile"
import User from "./content/user/User"
import Cshow from "./content/coupon/Cshow"
import Ccreate from "./content/coupon/Ccreate"
import Empshow from "./content/employee/Empshow"
import Empcreate from "./content/employee/Empcreate"
import Empedit from "./content/employee/Empedit"
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Blog from "./content/blog/Blog"
import CreateBlog from "./content/blog/CreateBlog"
import EditBlog from "./content/blog/EditBlog"
import Attadd from "./content/attendance/Attadd"
import Attedit from "./content/attendance/Attedit"
import Attshow from "./content/attendance/Attshow"
import Attview from "./content/attendance/Attview"
import Leaveadd from "./content/leave/Leaveadd"
import Leaveedit from "./content/leave/Leaveedit"
import Leaveshow from "./content/leave/Leaveshow"
import settings from "./content/settings"
function App() {
	return (
		<div class="wrapper">
			<Navbar />
			<Sidebar />
			<div className="content-wrapper">
				<div className="container">
					<Router>
						<Switch>
							<Route path="/" exact component={Dashboard} />
							<Route path="/profile" exact component={Profile} />
							<Route path="/profile/edit" exact component={Editprofile} />
							<Route path="/user" exact component={User} />
							<Route path="/coupon" exact component={Cshow} />
							<Route path="/coupon/create" exact component={Ccreate} />
							<Route path="/employee" exact component={Empshow} />
							<Route path="/employee/create" exact component={Empcreate} />
							<Route path="/employee/edit" exact component={Empedit} />
							<Route path="/settings" exact component={settings} />
							<Route path="/blog" exact component={Blog} />
							<Route path="/blog/create" exact component={CreateBlog} />
							<Route path="/blog/edit" exact component={EditBlog} />
							<Route path="/employee/attendance" exact component={Attshow} />
							<Route path="/employee/attendance/view" exact component={Attview} />
							<Route path="/employee/attendance/edit" exact component={Attedit} />
							<Route path="/employee/attendance/add" exact component={Attadd} />
							<Route path="/employee/leave" exact component={Leaveshow} />
							<Route path="/employee/leave/edit" exact component={Leaveedit} />
							<Route path="/employee/leave/add" exact component={Leaveadd} />
						</Switch>
					</Router>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default App;
