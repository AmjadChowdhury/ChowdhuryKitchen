import { useEffect, useState } from "react";
import HeadingTitle from "../../Components/HeadingTitle";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });
  return (
    <div>
      <HeadingTitle
        subHeading="What our client says"
        heading="Testimonials"
      ></HeadingTitle>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="px-16 py-16 text-center">
                <div className="flex justify-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => {
                    if (index + 1 <= review.rating) {
                      return (
                        <FaStar
                          key={index}
                          className="text-yellow-600 text-xl"
                        />
                      );
                    } else if (index + 0.5 < review.rating) {
                      return (
                        <FaStarHalfAlt
                          key={index}
                          className="text-yellow-600 text-xl"
                        />
                      );
                    } else {
                      return (
                        <FaRegStar
                          key={index}
                          className="text-yellow-600 text-xl"
                        />
                      );
                    }
                  })}
                </div>
                <p>{review.details}</p>
                <h1 className="text-yellow-600">{review.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
