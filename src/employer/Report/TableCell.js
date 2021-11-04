const TableCell = ({ title, views, applicants, date }) => {
    return (
        <div className={"tableCell"}>
            <div className="cell-title">{title}</div>
            <div>{views}</div>
            <div>{applicants}</div>
            <div>{date}</div>
        </div>
    )
}
 
export default TableCell