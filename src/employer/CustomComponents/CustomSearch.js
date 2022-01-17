import "./CustomSearch.css"
import HomeFilters from "../Home/HomeFilters"

const CustomSearch = () => {
    return (
        <div className="custom-search-component">
            <div>
                <input type="search" placeholder="keywords..." />
            </div>
            <div>
                <input type="search" placeholder="ville" />
            </div>
            <button type="search">SEARCH</button>
            <section><HomeFilters /></section>
        </div>
    )
}
 
export default CustomSearch