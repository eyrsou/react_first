import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-light"
                type="button">
                    Все человечики
            </button>
            <button className="btn btn-outline-light"
                type="button">
                    Хорошая ЗП
            </button>
            <button className="btn btn-outline-light"
                type="button">
                    Плохая зп
            </button>
        </div>
    );
}

export default AppFilter;