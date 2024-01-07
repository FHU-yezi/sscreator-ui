import { toast } from "react-hot-toast";

export default function App() {
  return (
    <div>
      <p>SSCreator UI</p>
      <button onClick={() => toast("Hello World!")}>Click Me</button>
    </div>
  );
}
