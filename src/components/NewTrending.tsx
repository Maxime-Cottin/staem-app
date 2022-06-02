const NewTrending = () => {
	return (
		<section className="w-screen px-6 overflow-x-hidden">
			<h2 className="text-white font-bold text-2xl inline-block relative mb-7">
				New & Trending
			</h2>
			<input
				type="text"
				name="gameSearch"
				id="gameSearch"
				className="w-full bg-[#1a3a53] px-7 py-1 rounded-full mb-4"
			/>
			<div className="flex gap-3">
				<label htmlFor="sort" className="font-semibold text-white">
					Sort&nbsp;by:
				</label>
				<select
					name="sort"
					id="sort"
					className="w-full bg-[#1a3a53] px-5 py-1 rounded-full mb-4 text-white"
				>
					<option value="price">Price</option>
					<option value="name">Name</option>
				</select>
			</div>
		</section>
	);
};

export default NewTrending;
