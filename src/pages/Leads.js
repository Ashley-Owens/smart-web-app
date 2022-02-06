import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import MaterialTable from 'material-table';
import axios from 'axios';

function Leads () {
    const [searchParams, setSearchParams] = useSearchParams();
    const [tableData, setTableData] = useState([]);

    // we'll use these params to form requests to API
    const params = Object.fromEntries([...searchParams]);
    console.log('query params:', params);

    const tableColumns = [
        {title: 'Property Name', field: 'propertyName'},
        {title: 'Service', field: 'service'},
        {title: 'Address', field: 'address'},
        {title: 'City', field: 'city'},
        {title: 'State', field: 'state'},
        {title: 'Technician Name', field: 'technician'},
        {title: 'Date Created', field: 'dateCreated', defaultSort: 'desc'},
        {title: 'Status', field: 'status'},
    ];

    /* 
    When needing to call multiple APIs, try this:
    https://stackoverflow.com/questions/69261990/how-to-call-multiple-different-apis-using-useeffect-hook-in-react
    */
    useEffect(() => {
        axios.get('https://smartpestapi.wn.r.appspot.com/roach-assessment')
            .then(response => {
                // handle success
                console.log(response.data);
                const rows = [];
                response.data.forEach(entry => {
                    const row = {
                        propertyName: entry.propertyName,
                        service: 'Roach Assessment',
                        address: entry.address,
                        city: entry.city,
                        state: entry.state,
                        technician: entry.technician,
                        dateCreated: entry.dateCreated,
                        status: entry.status,
                    };
                    rows.push(row);
                });
                setTableData(rows);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }, []);
    

    return (
        <div>
            <NavBar />
            <MaterialTable
                columns={tableColumns}
                data={tableData}
                title='Leads'
                options={{paginationType: 'stepped'}} 
            />
        </div>
    )
};

export default Leads;