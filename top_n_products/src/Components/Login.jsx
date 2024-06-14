import { useState } from "react";
import axios from "axios";
import { eCommerce } from "../util/Constants";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		companyName: "",
		ownerName: "",
		rollNo: "",
		ownerEmail: "",
		clientID: "",
		clientSecret: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const requestData = {
				companyName: formData.companyName,
				clientID: formData.clientID,
				clientSecret: formData.clientSecret,
				ownerName: formData.ownerName,
				ownerEmail: formData.ownerEmail,
				rollNo: formData.rollNo,
			};
			console.log(requestData);
			const response = await axios.post(eCommerce.LoginUrl, requestData);
			console.log(response.data);
			localStorage.setItem("jwt", response.data.access_token);
			console.log(response.status);
			if (response.status == 201) {
				navigate("/");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-10 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Register your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor="companyName"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Company Name
							</label>
							<div className="mt-2">
								<input
									id="companyName"
									name="companyName"
									type="text"
									value={formData.companyName}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="ownerName"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Owner Name
							</label>
							<div className="mt-2">
								<input
									id="ownerName"
									name="ownerName"
									type="text"
									value={formData.ownerName}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="rollNo"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Roll No
							</label>
							<div className="mt-2">
								<input
									id="rollNo"
									name="rollNo"
									type="text"
									value={formData.rollNo}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="ownerEmail"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="ownerEmail"
									name="ownerEmail"
									type="email"
									value={formData.ownerEmail}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="clientID"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Client ID
							</label>
							<div className="mt-2">
								<input
									id="clientID"
									name="clientID"
									type="text"
									value={formData.clientID}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="clientSecret"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Client Secret
							</label>
							<div className="mt-2">
								<input
									id="clientSecret"
									name="clientSecret"
									type="text"
									value={formData.clientSecret}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Login
							</button>
							<Link to="/register">
								<p className="text-indigo-600 underline text-center m-4">
									Not registered ?
								</p>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
