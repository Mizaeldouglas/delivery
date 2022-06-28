import styles from './styles.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import 'swiper/css';

export const Banner = () => {
  return (
	<div className={styles.container}>
		<Swiper
      		slidesPerView={1}
			className={styles.swiper}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			  }}
			  modules={[Autoplay]}
			  loop={true}
    	>
    		<SwiperSlide className={styles.slide}><div className={styles.slideImg}>1</div></SwiperSlide>
    		<SwiperSlide className={styles.slide}><div className={styles.slideImg}>2</div></SwiperSlide>
    	</Swiper>
	</div>
  )
}