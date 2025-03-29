import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UserHome = () => {
  const [paymentInfo,setPaymentInfo] = useState([])
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  console.log(user);

  const [cart]  = useCart()
  useEffect(() => {
      axiosSecure.get(`/payments/${user.email}`).then((res) => {
        console.log(res.data);
        setPaymentInfo(res.data);
      });
    }, [axiosSecure, user.email]);
    const totalPriceOfPayment = paymentInfo.reduce((total,item)=> total+item.price,0)

  return (
    <div>
      <h1 className="text-lg lg:text-xl font-bold mb-4">
        Hey, <br />
        Welcome,{" "}
        <span className="text-[#D1A054]">
          {user ? user?.displayName : "back"}
        </span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 space-y-3">
        <div className="  bg-[#c5d0f8] p-4 rounded-lg">
          <div className="p-4 w-3/4 mx-auto">
            <img src={user.photoURL} alt="" className="rounded-full border-4 w-full" />
          </div>
          {/* <h2 className="text-xl text-[#070707] font-bold text-center">
            {user.displayName}
          </h2> */}
        </div>

        <div className=" bg-[#f1e3ec] p-4 rounded-lg">
          <div className="text-center w-3/4 mx-auto">
            <h1 className="text-lg lg:text-xl font-bold text-[#f715b3] border-b-2 border-black pb-2">Your Activities</h1>
          </div>
          <div className="text-base lg:text-lg font-bold mt-5">
            <h1 className="text-[#f9275f]">Total cart : <span className="font-extrabold text-[#D1A054]">{cart.length} </span>item</h1>
            <h1 className="text-[#28c5fe]">Payement : <span className="font-extrabold text-[#D1A054]">{paymentInfo.length} </span> times</h1>
            <h1 className="text-[#291af5]">Total payment : <span className="font-extrabold text-[#D1A054]">{totalPriceOfPayment} </span>tk.</h1>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default UserHome;
