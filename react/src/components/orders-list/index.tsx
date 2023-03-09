interface OrderListProps {
  orders: any[];
}

const OrderList = ({ orders }: OrderListProps) => (
  <>
    {orders.map((order: any) => (
      <li key={order.id}>
        {order.id} - {order.name}
      </li>
    ))}
  </>
);

export default OrderList;
