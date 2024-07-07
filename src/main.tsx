import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChatProvider } from "./context/chat-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChatProvider>
    <App />
  </ChatProvider>
);
