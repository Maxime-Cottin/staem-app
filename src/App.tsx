import Header from "./components/Header";
import Menu from "./components/Menu";
import NewTrending from "./components/NewTrending";
import { gamesList } from "./datas/games";
import "./styles/App.css";

function App() {
	return (
		<>
			<Menu />
			<Header />
			<NewTrending />
			<section className="px-6 flex flex-col gap-10 my-10 wrapper">
				{gamesList.map((game, key) => (
					<article
						key={key}
						className="bg-[#17202D] rounded-3xl text-white flex flex-col md:flex-row"
					>
						<img
							src={game.thumbnail}
							alt={game.name + " thumbnail"}
							className="rounded-t-3xl h-64 object-cover"
						/>
						<div className="w-full p-5 md:px-12 md:py-9 md:h-64 md:flex md:flex-col md:justify-between">
							<h3 className="font-semibold text-2xl mb-3 md:text-3xl">
								{game.name}
							</h3>
							<p className="opacity-50 text-xl relative mb-9 after-tag">
								{game.tag.map((tag, key) => (
									<span>{tag}, </span>
								))}
							</p>
							<div className="flex justify-between">
								<img
									src={require("./assets/images/windows.png")}
									alt="Support on windows"
								/>
								<p className="font-bold text-4xl">${game.price}</p>
							</div>
						</div>
					</article>
				))}
			</section>
		</>
	);
}

export default App;
