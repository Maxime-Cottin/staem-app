import { useEffect, useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import NewTrending from "./components/NewTrending";
import { gamesList } from "./datas/games";
import gamesJSON from "./datas/gamesList.json";
import "./styles/App.css";

function App() {
	const [datas, setDatas] = useState([]);
	const [searchTerm, setSearchTerm] = useState([]);

	useEffect(() => {
		fetch("./datas/gamesList.json")
			.then((response) => response.json())
			.then((json) => setDatas(json));
	});
	const handleSearch = (e: any) => {
		let value = e.target.value;
		setSearchTerm(value);
	};

	console.log(searchTerm);

	return (
		<>
			<Menu />
			<Header />
			{/* <NewTrending /> */}
			<section className="w-screen px-6 overflow-x-hidden wrapper md:overflow-x-visible">
				<h2 className="text-white font-bold text-2xl inline-block relative mb-7 md:mb-9">
					New & Trending
				</h2>
				<div className="flex flex-col md:flex-row justify-between">
					<input
						type="text"
						name="gameSearch"
						id="gameSearch"
						placeholder="Search"
						className="w-full bg-[#1a3a53] px-5 py-1 rounded-full mb-4 md:w-72"
						onChange={handleSearch}
					/>
					<div className="flex gap-3">
						<label htmlFor="sort" className="font-semibold text-white">
							Sort&nbsp;by:
						</label>
						<select
							name="sort"
							id="sort"
							className="w-full bg-[#1a3a53] px-5 py-1 rounded-full mb-4 text-white md:w-72"
						>
							<option value="price">Price</option>
							<option value="name">Name</option>
						</select>
					</div>
				</div>
			</section>
			<section className="px-6 flex flex-col gap-10 my-10 wrapper">
				{gamesList
					.filter((val) => {
						return val.name
							.toLowerCase()
							.includes(searchTerm.toString().toLowerCase());
					})
					.map((val, key) => (
						<article
							key={key}
							className="bg-[#17202D] rounded-3xl text-white flex flex-col md:flex-row"
						>
							<img
								src={val.thumbnail}
								alt={val.name + " thumbnail"}
								className="rounded-t-3xl h-64 object-cover"
							/>
							<div className="w-full p-5 md:px-12 md:py-9 md:h-64 md:flex md:flex-col md:justify-between">
								<h3 className="font-semibold text-2xl mb-3 md:text-3xl">
									{val.name}
								</h3>
								<p className="opacity-50 text-xl relative mb-9 after-tag">
									{val.tag.map((tag, key) => (
										<span key={key}>{tag}, </span>
									))}
								</p>
								<div className="flex justify-between">
									<img
										src={require("./assets/images/windows.png")}
										alt="Support on windows"
									/>
									<p className="font-bold text-4xl">${val.price}</p>
								</div>
							</div>
						</article>
					))}
			</section>
		</>
	);
}

export default App;
