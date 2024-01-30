import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material'
import currencyJson from '../../mock/euro-currency.json'

const Practical3 = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Base Currency</TableCell>
            <TableCell>Target Currency</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencyJson.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.fields.date}</TableCell>
              <TableCell>{'EUR'}</TableCell>
              <TableCell>{row.fields.currency}</TableCell>
              <TableCell>{`${row.fields.rate.toFixed(2)} ${
                row.fields.currency
              }`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Practical3
