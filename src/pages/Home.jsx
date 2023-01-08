import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../component/CustomButton';


export default function Home({ product }) {
    const navigate = useNavigate()
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Quantity</TableCell>
                        <TableCell align="right">price</TableCell>
                        <TableCell align="right">discount</TableCell>
                        <TableCell align="right">tax</TableCell>
                        <TableCell align="right">toal price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {product && product.map((row, i) => (
                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.quantity}
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.discount}</TableCell>
                            <TableCell align="right">{row.tax}</TableCell>
                            <TableCell align="right">{row.total_price}</TableCell>
                            <TableCell align="right"><EditIcon onClick={() => {
                                navigate(`/edit/product/${row.id}`)
                            }} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <CustomButton label={"add new product"} onClick={()=>{
                navigate('/')
            }} />
        </TableContainer>
    );
}