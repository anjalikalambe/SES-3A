import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    TableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: 'bold',
    }
});

const data = [
    {name: 'bob'}
]

function MTables() {
    const classes = useStyles();

    return (
        <TableContainer components={Paper} className={classes.TableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>User's Name</TableCell>
                        <TableCell className={classes.tableHeaderCell}>User's ID</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Gender</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow >
                            <TableCell>
                                <Grid container>
                                    <Grid item lg={10}>
                                        bob
                                    </Grid>
                                </Grid>
                                </TableCell>
                        3
                 </TableRow>
                
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MTables;