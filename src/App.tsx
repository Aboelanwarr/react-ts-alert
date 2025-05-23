import "./App.css";
import Alert from "./components/ui/Alert/Alert";
import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";
function App() {
  return (
    <div className="mt-8 flex flex-col gap-3">
      <Alert
        type={"alert-default"}
        icon={<Bell size={20} />}
        title={"Upgrade your plan"}
      >
        <p>
          Then go to your Vite based project and run npm link --global vite (or
          the package manager that that you used to link {""}{" "}
          <a href="/">vite globally</a>). Now restart the development server to
          ride on the bleeding edge!
        </p>
      </Alert>

      <Alert type={"alert-info"} icon={<Info size={20} />} title={"Note"}>
        <p>
          Vite aims to provide SSR Guide support for common web development
          patterns. Before searching for a Vite or compatible Rollup plugin,
          check out the Features Guide, check out the Backend Integration guide
          instead."
        </p>
      </Alert>

      <Alert
        type={"alert-error"}
        icon={<Ban size={20} />}
        title={"Something went wroung"}
      >
        <p>
          If you are working with a normal static file server (except way more
          powerful!), Vite is also capable of handling dependencies that resolve
          to out-of-root file system locations, which makes it usable even in a
          monorepo-based setup."
        </p>
      </Alert>
      <Alert
        type={"alert-success"}
        icon={<CheckCheck size={20} />}
        title={"Your order has been processed"}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          voluptatum illo reiciendis facere vitae esse, ullam molestias ipsa
          nesciunt? Minima."
        </p>
      </Alert>

      <Alert
        type={"alert-tips"}
        icon={<AlertTriangle size={20} />}
        title={"Tips & Tricks"}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          voluptatum illo reiciendis facere vitae esse, ullam molestias ipsa
          nesciunt? Minima.
        </p>
      </Alert>
    </div>
  );
}

export default App;
