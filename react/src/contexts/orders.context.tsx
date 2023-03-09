import { createContext } from "use-context-selector";
import OrdersService from "../services/orders.service";

export type PropsOrdersContext = {
  getOrders: () => any[];
};

export interface OrdersContextOptions {
  getOrders: () => any[];
}

const OrdersContext = createContext<OrdersContextOptions | undefined>(
  undefined
);

interface OrdersProviderOptions {
  instance: OrdersService;
  children: JSX.Element;
}

const OrdersProvider = ({ instance, children }: OrdersProviderOptions) => {
  const getOrders = (): any[] => {
    return instance.listar();
  };

  return (
    <OrdersContext.Provider
      value={{
        getOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export { OrdersProvider };

export default OrdersContext;
