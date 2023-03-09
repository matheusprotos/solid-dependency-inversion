import { useEffect, useState } from "react";
import OrdersList from "../../components/orders-list";
import { useOrders } from "../../hooks/use-orders.hook";

const UserOrders = () => {
  const { getOrders } = useOrders();
  const [orders, setOrders] = useState<any[]>([]);

  const loadOrders = () => {
    setOrders((_) => getOrders());
  };

  useEffect(() => {
    try {
      loadOrders();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="mb-4">Orders - User</h1>

      <OrdersList orders={orders} />
    </div>
  );
};

export default UserOrders;
