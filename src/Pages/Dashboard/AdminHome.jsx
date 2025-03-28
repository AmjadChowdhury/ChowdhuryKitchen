import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#D1A054"];

import { PieChart, Pie, ResponsiveContainer } from "recharts";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042","#D1A054"];

const AdminHome = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: order = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  // for barchart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //pi chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Hello!!! <br />
        Welcome,{" "}
        <span className="text-[#D1A054]">
          {isAdmin ? user?.displayName : "back"}
        </span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="stat rounded-lg bg-[#6f5bb7]">
          <div className="stat-figure text-secondary">
            <FaMoneyCheckAlt className="text-4xl" />
          </div>
          <div className="stat-title font-bold text-white">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat rounded-lg bg-[#64c5d4]">
          <div className="stat-figure text-[#D1A054]">
            <FaUsers className="text-4xl" />
          </div>
          <div className="stat-title font-bold text-white">Customers</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat rounded-lg bg-[#ac539e]">
          <div className="stat-figure text-white">
            <MdOutlineProductionQuantityLimits className="text-4xl" />
          </div>
          <div className="stat-title font-bold text-white">Products</div>
          <div className="stat-value">{stats.menuItems}</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat rounded-lg bg-[#62c986]">
          <div className="stat-figure text-[#d154a1]">
            <GrDeliver className="text-4xl" />
          </div>
          <div className="stat-title font-bold">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc"></div>
        </div>
      </div>

      <div className="flex mt-4">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={order}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip
              formatter={(value) => [`${value} items`, "Orders"]}
              labelFormatter={(data) => `Category: ${data}`}
            />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {order.map((entry, index) => (
                <Cell key={`cell-${entry._id}`} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={500} height={500}>
              <Pie
                data={order}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="revenue"
              >
                {order.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
