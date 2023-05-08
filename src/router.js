import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<p>Home</p>} />
          <Route path="blogs" element={<p>kajal</p>} />
          <Route path="contact" element={<p>pintu</p>} />
          <Route path="*" element={<p>sonu</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
