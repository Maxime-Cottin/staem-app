import { gamesList } from "../datas/games";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";

const Header = () => {
	return (
		<section className="pt-5 pb-8 relative overflow-x-hidden">
			<img
				src={require("../assets/images/ellipse.png")}
				alt="background blur"
				className="absolute w-[900px] max-w-none h-56 -translate-x-[225px]"
			/>
			<Swiper
				slidesPerView={1}
				spaceBetween={24}
				pagination={true}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination]}
			>
				{gamesList.map((game, key) => (
					<SwiperSlide key={key}>
						<img
							src={game.thumbnail}
							alt={game.name + " thumbnail"}
							className="w-full h-40 object-cover rounded-3xl mx-auto mb-10"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Header;
