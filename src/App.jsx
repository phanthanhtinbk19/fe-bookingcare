import {Route, Routes} from "react-router-dom";
import {Suspense, lazy} from "react";
import Spinner from "./components/spin/Spinner";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";

import ManageUser from "./system/admin/ManageUser";
import ManageDoctor from "./system/admin/ManageDoctor";
import DetailDoctor from "./system/doctor/DetailDoctor";
import DashBoard from "./system/admin/DashBoard";
import ManageSchedule from "./system/doctor/ManageSchedule";
import VerifyEmailBooking from "./system/VerifyEmailBooking";
import ManageSpecialty from "./system/admin/ManageSpecialty";
import DetailSpecialty from "./pages/DetailSpecialty";
import ManageClinic from "./system/admin/ManageClinic";

import ManagePatient from "./system/doctor/ManagePatient";
import DashBoardLayout from "./layouts/DashBoardLayout";
import ManageHandBook from "./system/admin/ManageHandBook";
import DetailHandBook from "./pages/DetailHandBook";
import ListUser from "./system/admin/ListUser";
import ListSpecialty from "./pages/ListSpecialty";
import path from "./constants/path";
import DoctorList from "./pages/DoctorList";

const Home = lazy(() => import("./pages/Home"));
const SignupForm = lazy(() => import("./pages/SignupForm"));
const Login = lazy(() => import("./pages/Login"));
const Unauthorize = lazy(() => import("./pages/Unauthorize"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
	return (
		<>
			<div>hello</div>

			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
}

export default App;
