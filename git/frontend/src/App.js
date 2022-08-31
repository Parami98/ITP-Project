import './App.css';
import Header from './components/Header';
import TopNav from './components/TopNav';
import FooterBottom from './components/FooterBottom';
import AddMachinery from './components/MaterialManagement/AddMachinery';
import AdminHome from './components/AdminHome';
import Materialhome from './components/MaterialManagement/MaterialHome';
import Financehome from './components/FinanceManagement/FinanceHome';
import Contracthome from './components/ContractManagement/ContractHome';
import Machinerydetails from './components/MaterialManagement/MachineryDetails';
import EditMachinery from './components/MaterialManagement/EditMachinery';
import Crewandsalaryhome from './components/CrewAndSalaryManagement/CrewAndSalaryHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCrew from './components/CrewAndSalaryManagement/AddCrew';
import AddSalaryDetails from './components/CrewAndSalaryManagement/AddSalaryDetails';
import SalaryDetails from './components/CrewAndSalaryManagement/SalaryDetails';
import CrewList from './components/CrewAndSalaryManagement/CrewList';
import Editc from './components/CrewAndSalaryManagement/Editc';
import EditSalary from './components/CrewAndSalaryManagement/EditSalary';


function App() {
  return (
    <BrowserRouter>
      <div className="max-w-screen-md mx-auto pt-20">
        
        <TopNav/>
        <Header/>

        <Routes>
          <Route path='/' element={<AdminHome/>} />
        </Routes>

        <Routes>
          <Route path='/material-home' element={<Materialhome/>} />
        </Routes>
        <Routes>
          <Route path="/machinery" element={<Machinerydetails/>} />
        </Routes>
        <Routes>
          <Route exact path="/add" element={<AddMachinery/>} />
        </Routes>
        <Routes>
          <Route exact path="/edit/:id" element={<EditMachinery/>} />
        </Routes>


        <Routes>
          <Route path='/finance-home' element={<Financehome/>} />
        </Routes>

        <Routes>
          <Route path='/contract-home' element={<Contracthome/>} />
        </Routes>

        <Routes>
          <Route path='/crew-and-salary-home' element={<Crewandsalaryhome/>} />
        </Routes>
        <Routes>
          <Route path='/crew/add' element={<AddCrew/>} />
          <Route path='/crew/list' element={<CrewList/>} />
          <Route  path="/crew/edit/:id" element={<Editc/>} />

          <Route path='/salary/add' element={<AddSalaryDetails/>} />
          <Route path='/salary/list' element={<SalaryDetails/>} />
          <Route  path="/salary/edit/:id" element={<EditSalary/>} />
        </Routes>

        <FooterBottom/>  
        
      </div>
    </BrowserRouter>
    
  )
}

export default App;
