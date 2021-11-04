import "./Table.css"
import TableCell from "./TableCell";


const Table = () => {
  return (
    <div>
      <div className="tableHeader">
        <div className="table-title">Job Title</div>
        <div>Views</div>
        <div>Applicants</div>
        <div>Date posted</div>
      </div>
      <TableCell title="Software Engineer" views="74" applicants="25" date="08/12/2020" />
      <TableCell title="Software Developer" views="96" applicants="63" date="08/25/2020" />
      <TableCell title="Data Science" views="74" applicants="42" date="09/10/2020" />
      <TableCell title="Electrical Engineer" views="32" applicants="49" date="10/31/2020" />
      <TableCell title="Aerospacial Engeneer" views="21" applicants="55" date="11/01/2020" />
    </div>
  )
}
 
export default Table;