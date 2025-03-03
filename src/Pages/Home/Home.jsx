import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Recommends from "./Recommends";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-2 lg:mx-8">
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Recommends></Recommends>
        <Featured></Featured>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
