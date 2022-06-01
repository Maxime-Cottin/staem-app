import { gamesList } from "../datas/games";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Header = () => {
	return (
		<section>
			<Swiper
				slidesPerView={1}
				spaceBetween={24}
				pagination={true}
				loop={true}
				modules={[Pagination]}
			>
				{gamesList.map((game, key) => (
					<SwiperSlide key={key}>
						<img
							src={game.thumbnail}
							alt={game.name + " thumbnail"}
							className="w-full h-40 object-cover rounded-3xl mx-auto mb-4"
						/>
					</SwiperSlide>
				))}
				...
			</Swiper>
		</section>
	);
};

export default Header;
