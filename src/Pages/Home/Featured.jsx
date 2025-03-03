import HeadingTitle from "../../Components/HeadingTitle";
import featuredimg from "../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured bg-fixed bg-opacity-10 py-16 text-white">
      <HeadingTitle
        subHeading="Check it out"
        heading="From our menu"
      ></HeadingTitle>
      <div className="md:flex items-center gap-5 p-14">
        <div className="flex-1">
            <img src={featuredimg} alt="" className="w-full" />
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-lg md:text-2xl font-semibold text-yellow-600">March 20, 2023</p>
          <p className="text-lg md:text-2xl font-semibold">WHERE CAN I GET SOME?</p>
          <p className="text-base">
            WHERE CAN I GET SOME? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error voluptate facere, deserunt dolores maiores
            quod nobis quas quasi. Eaque repellat recusandae ad laudantium
            tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
