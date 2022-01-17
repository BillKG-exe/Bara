import './FilterList.css'


const FilterList = () => {
    return ( 
        <div className="filterList">
            <select name="Type">
                <option value="">Type</option>
                <option value="">Full Time</option>
                <option value="">Part Time</option>
                <option value="">Internship</option>
                <option value="">StartUps</option>
            </select>
{/*             <select name="Range">
                <option value="">Range</option>
                <option value="">100000f - 1000000f</option>
                <option value="">10000000f - 10000000f</option>
                <option value="">100000000f - 100000000f</option>
            </select> */}
            <select name="Radius">
                <option value="">Radius</option>
                <option value="">5Km</option>
                <option value="">15km</option>
                <option value="">25km</option>
            </select>
        </div>
    )
}
 
export default FilterList;