import "./CustomSearch.css"


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
        </div>
    )
}
 
export default CustomSearch