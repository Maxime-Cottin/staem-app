const NewTrending = () => {
	return (
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
	);
};

export default NewTrending;
