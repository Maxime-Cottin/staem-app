const Menu = () => {
	return (
		<header className="flex justify-between items-center px-7 py-12 font-bold text-white">
			<h1 className="text-[40px]">STAEM</h1>
			<a
				href="https://github.com/Maxime-Cottin"
				className="text-base px-7 py-3 bg-[#214B6B] flex gap-4 rounded-full"
			>
				<img
					src={require("../assets/images/install-logo.png")}
					alt="Install logo"
				/>
				Install
			</a>
		</header>
	);
};

export default Menu;
