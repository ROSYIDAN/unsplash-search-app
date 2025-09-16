import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalProvider } from "./GlobalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <GlobalProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </GlobalProvider>
  </QueryClientProvider>
);
