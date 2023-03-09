import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { OrdersProvider } from "./contexts/orders.context";
import "./index.css";
import Orders from "./pages/my-orders";
import UserOrders from "./pages/user-orders";
import { MyOrdersService } from "./services/my-orders.service";
import { UserOrdersService } from "./services/user-orders.service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/orders",
    element: (
      <OrdersProvider instance={new MyOrdersService()}>
        <Orders />
      </OrdersProvider>
    ),
  },
  {
    path: "user/orders",
    element: (
      <OrdersProvider instance={new UserOrdersService()}>
        <UserOrders />
      </OrdersProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
