import { Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from "./Chips";
import Soda from './Soda';
import Sardines from './Sardines';
import NotFound from './NotFound';


function RouteList() {

  return (
    <Routes>
      <Route path="/" element={<VendingMachine />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/soda" element={<Soda />} />
      <Route path="/sardines" element={<Sardines />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


export default RouteList;