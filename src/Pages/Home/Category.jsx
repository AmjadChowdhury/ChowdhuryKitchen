
import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperSlide,Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import cat1 from '../../assets/home/slide1.jpg'
import cat2 from '../../assets/home/slide2.jpg'
import cat3 from '../../assets/home/slide3.jpg'
import cat4 from '../../assets/home/slide4.jpg'
import cat5 from '../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <div>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-5"
      >
        <SwiperSlide>
            <img src={cat1} alt="" />
            <h3 className='text-xl lg:text-4xl uppercase text-center text-white -mt-12'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat2} alt="" />
            <h3 className='text-xl lg:text-4xl uppercase text-center text-white -mt-12'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat3} alt="" />
            <h3 className='text-xl lg:text-4xl uppercase text-center text-white -mt-12'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat4} alt="" />
            <h3 className='text-xl lg:text-4xl uppercase text-center text-white -mt-12'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat5} alt="" />
            <h3 className='text-xl lg:text-4xl uppercase text-center text-white -mt-12'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat2} alt="" />
            <h3 className='text-xl lg:text-4xl uppercase text-center text-white -mt-12'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat3} alt="" />
            <h3 className='text-xl lg:text-4xl uppercase text-center text-white -mt-12'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat4} alt="" />
            <h3 className='text-xl lg:text-4xl uppercase text-center text-white -mt-12'>Desserts</h3>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;