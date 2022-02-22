import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import MaterialTable from 'material-table';
import axios from 'axios';
import moment from 'moment';

function Leads () {
    const [searchParams, setSearchParams] = useSearchParams();
    const [tableData, setTableData] = useState([]);

    // we'll use these params to form requests to API
    const params = Object.fromEntries([...searchParams]);
    console.log('query params:', params);

    const tableColumns = [
        {title: 'ID', field: 'id', hidden: true},
        {title: 'Property Name', field: 'propertyName'},
        {title: 'Service', field: 'service'},
        {title: 'Unit Numbers', field: 'unitNums'},
        {title: 'Address', field: 'address'},
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
        axios.post('https://smartpestapi.wn.r.appspot.com/leads/search', {
            search: {
                filters: [
                    ['status', '=', params.status],
                ]
            }
        })
        .then(response => {
            // handle success
            console.log('entities:', response.data.entities);
            const rows = [];
            response.data.entities.forEach(entity => {
                const row = {
                    id: entity.id,
                    propertyName: entity.propertyName,
                    service: entity.service,
                    unitNums: entity.unitNums,
                    address: entity.address,
                    state: entity.state,
                    technician: entity.technician,
                    dateCreated: moment(entity.dateCreated).format('MM/DD/YYYY'),
                    status: entity.status,
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
    
    const navigate = useNavigate();

    function goToLeadDetails(id) {
        navigate({
            pathname: `/leads/${id}`,
        });
    };

    return (
        <div>
            <NavBar />
            <MaterialTable
                columns={tableColumns}
                data={tableData}
                title='Leads'
                actions={[
                    {
                      icon: 'description',
                      tooltip: 'View lead details',
                      onClick: (event, rowData) => goToLeadDetails(rowData.id)
                    }
                ]}
                options={{
                    paginationType: 'stepped',
                    actionsColumnIndex: -1
                }} 
            />
        </div>
    )
};

export default Leads;