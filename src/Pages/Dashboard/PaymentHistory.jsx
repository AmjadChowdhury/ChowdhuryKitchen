import { useEffect, useState } from "react";
import HeadingTitle from "../../Components/HeadingTitle";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const [paymentInfo, setPaymentInfo] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/payments/${user.email}`).then((res) => {
      console.log(res.data);
      setPaymentInfo(res.data);
    });
  }, [axiosSecure, user.email]);
  const totalPriceOfPayment = paymentInfo.reduce((total,item)=> total+item.price,0)
  return (
    <div>
      <HeadingTitle
        subHeading={"About payment history"}
        heading={"Payment Info"}
      />

      <div>
        <div className="flex justify-around items-center mb-8">
          <h2 className="text-2xl font-bold">
            Total Payment :{" "}
            <span className="text-[#D1A054]">{paymentInfo.length} </span>
            times
          </h2>
          <h2 className="text-2xl font-bold">
            Total Price : <span className="text-[#D1A054]">{totalPriceOfPayment} </span>
            tk.
          </h2>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-[#D1A054] text-white">
                  <th>#</th>
                  <th>Email</th>
                  <th>price</th>
                  <th>trans.</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentInfo.map((item, idx) => (
                  <tr key={item._id} className={`${idx%2 == 0 ? 'bg-slate-100': 'bg-white'}`}>
                    <th>{idx + 1}</th>
                    <td>{item.email}</td>
                    <td>{item.price}</td>
                    <td>{item.transactionId}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
