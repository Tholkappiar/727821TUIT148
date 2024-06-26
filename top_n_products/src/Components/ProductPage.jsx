import axios from "axios";
import { useEffect, useState } from "react";
import { eCommerce } from "../util/Constants";
import { useNavigate } from "react-router";

function ProductList() {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const jwtToken = localStorage.getItem("jwt");
				console.log("jwt", jwtToken);
				const response = await axios.get(eCommerce.productListUrl, {
					headers: {
						Authorization: `Bearer ${jwtToken}`,
					},
				});
				setProducts(response.data);
			} catch (error) {
				// when no authenticated then move to the login page
				navigate("/login");
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">
					ProductList
				</h2>

				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<div
							key={product.productName + "" + product.price}
							className="group relative"
						>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
								<img
									src={`https://dummyimage.com/200x300/000/fff`}
									alt={product.productName}
									className="h-full w-full object-cover object-center lg:h-full lg:w-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700">
										<a href="#">
											<span aria-hidden="true" className="absolute inset-0" />
											{product.productName}
										</a>
									</h3>
									<p className="mt-1 text-sm text-gray-500">
										Rating: {product.rating}
									</p>
									<p className="mt-1 text-sm text-gray-500">
										Discount: {product.discount} %
									</p>
									<p className="mt-1 text-sm text-gray-500">
										Availability: {product.availability}
									</p>
								</div>
								<p className="text-sm font-medium text-gray-900">
									${product.price - product.discount}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProductList;
