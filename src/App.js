import './App.css';
import { DatePickerDropDown } from './Components/DatePicker/DatePicker';
import { EmployeeDropDown } from './Components/EmployeeDropDown/EmployeeDropDown';

function App() {
  return (
    <div className="container">
      <EmployeeDropDown/>
      <DatePickerDropDown/>
    </div>
  );
}

export default App;
