import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
  
  const rows = [
    createData('Software Engineer', 74, 25, "08/12/2020"),
    createData('Software Developer', 96, 25, "08/25/2020"),
    createData('Data Science', 74, 16, "09/10/2020"),
    createData('Electrical Engineer', 32, 34, "10/31/2020"),
    createData('Aerospacial Engeneer', 21, 16, "11/01/2020"),
  ];


const MuiTable = ({ data }) => {
    return (
        <div className="mui-table">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left">Job title</TableCell>
                        <TableCell align="right">Views</TableCell>
                        <TableCell align="right">Applicants</TableCell>
                        <TableCell align="right">Date posted</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
 
export default MuiTable