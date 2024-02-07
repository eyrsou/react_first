import {Component} from 'react';
import './employees-list-item.css';


// const EmployeesListItem = ({name, salary, increase}) => {

//     let liClassNames = "list-group-item d-flex justify-content-between";
//     if (increase) {
//         liClassNames += " increase";
//     }

//     return (
//         <li className={liClassNames}>
//             <span className="list-group-item-label">{name}</span>
//             <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
//             <div className='d-flex justify-content-center align-items-center'>
//                 <button type="button"
//                     className="btn-cookie btn-sm ">
//                     <i className="fas fa-cookie"></i>
//                 </button>

//                 <button type="button"
//                         className="btn-trash btn-sm ">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li>
//     )
// }



class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            favorite: false
        }
    }
    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }
    addFav = () => {
        this.setState(({favorite}) => ({
            favorite: !favorite
        }))
    }
    render () {
        const {name, salary} = this.props;
        const {increase, favorite} = this.state;
        let liClassNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            liClassNames += " increase";
        }
        if (favorite) {
            liClassNames += " like";
        }
        return (
            <li className={liClassNames}>
                <span className="list-group-item-label" onClick={this.addFav}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;