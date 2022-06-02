import { gamesList } from "../datas/games";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";

import { useEffect, useState } from "react";

const Header = () => {
	const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 768);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	return (
		<section className="pt-5 pb-8 relative overflow-x-hidden wrapper">
			<img
				src={require("../assets/images/ellipse.png")}
				alt="background blur"
				className="absolute w-[900px] max-w-none h-56 -translate-x-[225px]"
			/>
			<Swiper
				slidesPerView={isDesktop ? 2 : 1}
				spaceBetween={isDesktop ? 44 : 24}
				pagination={true}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				centeredSlides={true}
				modules={[Autoplay, Pagination]}
			>
				{gamesList.map((game, key) => (
					<SwiperSlide key={key}>
						<img
							src={game.thumbnail}
							alt={game.name + " thumbnail"}
							className="w-full h-40 object-cover rounded-3xl mb-10 md:h-96 md:aspect-video md:w-auto"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Header;
