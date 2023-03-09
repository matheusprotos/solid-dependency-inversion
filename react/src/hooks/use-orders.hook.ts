import { useContextSelector } from "use-context-selector";
import OrdersContext, {
  OrdersContextOptions,
} from "../contexts/orders.context";

export function useOrders() {
  const getOrders: () => any[] = useContextSelector(
    OrdersContext,
    (ordersContext: OrdersContextOptions | undefined): (() => any[]) =>
      ordersContext?.getOrders || (() => [])
  );

  return { getOrders };
}
