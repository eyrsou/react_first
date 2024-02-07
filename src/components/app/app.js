import './app.css';
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

    const data = [
        {name: "Vika", salary: 1000, increase: true, id: 1},
        {name: "Vanya", salary: 2100, increase: true, id: 2},
        {name: "Asta", salary: 3200, increase: false, id: 3},
    ];
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                <EmployeesList data={data}/>
            </div>
            <EmployeesAddForm/>
        </div>
    );
 }

 export default App;