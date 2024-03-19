import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Basic from './layouts/Basic';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import NotFound from './pages/NotFound';


const Router: () => JSX.Element = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Basic />}>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Route>

      {/* NotFound 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
