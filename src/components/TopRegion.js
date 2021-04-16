import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TopRegion = () => {
    // function createData(rank, region, cases) {
    //     return { rank, region, cases };
    // }
    // const rows = [
    //     createData(1, 'NCR', 200),
    //     createData(2, 'MIMAROPA', 100),
    //     createData(3, 'Central Visayas', 89)
    // ]

    return (
        <div>
            <h1>Top Region</h1>
            <div className='topRegion-table-container'>
                <table id="regions">
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>sdfs</td>
                    </tr>
                    <tr>
                        <td>Berglunds snabbköp</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>1000</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default TopRegion
