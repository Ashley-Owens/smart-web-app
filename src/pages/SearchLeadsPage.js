import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import SearchForm from "../components/forms/SearchForm";
import MaterialTable from 'material-table';
import axios from 'axios';
import moment from 'moment';


function SearchLeadsPage() {

    const [propFilters, setPropFilters] = useState([]);
    const [haveSearched, setHaveSearched] = useState(false);
    const [nextPageCursor, setNextPageCursor] = useState(null);

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

    const navigate = useNavigate();

    function goToLeadDetails(id) {
        navigate({
            pathname: `/leads/${id}`,
        });
    };

    const getTableData = query =>
        new Promise((resolve, reject) => {
            console.log('query:', query)
            axios.post('https://smartpestapi.wn.r.appspot.com/leads/search', {
                search: {
                    limit: query.pageSize,
                    start: nextPageCursor,
                    filters: propFilters
                }
            })
            .then(result => {
                result.data.entities.forEach(entity => {
                    entity.dateCreated = moment(entity.dateCreated).format('MM/DD/YYYY');
                });
                let currPage = query.page + 1;
                setNextPageCursor(result.data.nextPageCursor);
                resolve({
                    data: result.data.entities,
                    page: currPage - 1,
                    totalCount: result.data.total,  // TODO: this isn't included in API response
                });
            });
        });

    return (
        <div>
            <NavBar />
            <SearchForm setPropFilters={setPropFilters} setHaveSearched={setHaveSearched} />
            {
                haveSearched ? (
                    <MaterialTable
                        title="Leads"
                        columns={tableColumns}
                        data={getTableData}
                        actions={[
                            {
                              icon: 'description',
                              tooltip: 'View lead details',
                              onClick: (event, rowData) => goToLeadDetails(rowData.id)
                            }
                        ]}
                        options={{
                            actionsColumnIndex: -1
                        }} 
                    />
                ) : <></>
            }
        </div>
    );
};

export default SearchLeadsPage;