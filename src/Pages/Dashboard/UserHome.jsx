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
      <h1 className="text-2xl font-bold mb-4">
        Hey, <br />
        Welcome,{" "}
        <span className="text-[#D1A054]">
          {user ? user?.displayName : "back"}
        </span>
      </h1>

      <div className="flex gap-5">
        <div className="w-1/2 bg-[#91a0dd] p-4 rounded-lg">
          <div className="p-4 w-3/4 mx-auto">
            <img src={user.photoURL} alt="" className="rounded-full border-4 w-full" />
          </div>
          <h2 className="text-2xl text-[#da65b7] font-bold text-center">
            {user.displayName}
          </h2>
        </div>

        <div className="w-1/2 bg-[#dcd3d9] p-4 rounded-lg">
          <div className="text-center w-3/4 mx-auto">
            <h1 className="text-2xl font-bold text-[#61d665] border-b-2 pb-2">Your Activities</h1>
          </div>
          <div className="text-2xl font-bold mt-5">
            <h1 className="text-[#c759c4]">Total cart : <span className="font-extrabold text-[#D1A054]">{cart.length}</span></h1>
            <h1 className="text-[#bdce5e]">Payement : <span className="font-extrabold text-[#D1A054]">{paymentInfo.length} </span> times</h1>
            <h1 className="text-[#5eb0ce]">Total payment : <span className="font-extrabold text-[#D1A054]">{totalPriceOfPayment} </span>tk.</h1>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default UserHome;
