import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Controls from '../components/controls/Controls';
import Grid from '@mui/material/Grid';
import NavBar from "../components/NavBar";
import SearchForm from "../components/forms/SearchForm";
import MaterialTable from 'material-table';
import axios from 'axios';
import moment from 'moment';


function SearchLeadsPage() {

    const [propFilters, setPropFilters] = useState([]);
    const [haveSearched, setHaveSearched] = useState(false);
    const [pageCursors, setPageCursors] = useState([null]);


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
            axios.post('https://smartpestapi.wn.r.appspot.com/leads/search', {
                search: {
                    limit: query.pageSize,
                    start: pageCursors[query.page],
                    filters: propFilters,
                }
            })
            .then(result => {
                console.log('entities:', result.data.entities)
                result.data.entities.forEach(entity => {
                    entity.dateCreated = moment(entity.dateCreated).format('MM/DD/YYYY');
                    if (entity.unitNums) {
                        entity.unitNums = typeof entity.unitNums === 'object' ? entity.unitNums.join(', ') : null;
                    }
                });
                let currPage = query.page + 1;
                if (query.page + 1 >= pageCursors.length) {
                    setPageCursors([...pageCursors, result.data.nextPageCursor]);
                }
                resolve({
                    data: result.data.entities,
                    page: currPage - 1,
                    totalCount: result.data.total,  // TODO: this isn't included in API response
                });
            });
        });

    function startNewSearch() {
        setHaveSearched(false);
    };

    return (
        <div>
            <NavBar />
            {
                haveSearched ? (
                    <div>
                        <Grid container sx={{ pt: 4, pb: 4 }}>
                            <Grid item xs={12} align="center">
                                <div>
                                    <Controls.Button
                                        type="submit"
                                        text="Start New Search"
                                        onClick={startNewSearch}
                                    />
                                </div>
                            </Grid>
                        </Grid>
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
                                actionsColumnIndex: -1,
                                pageSize: 20,
                                pageSizeOptions: [20, 25, 30],
                                search: false,
                                toolbar: false,
                                sorting: false
                            }} 
                        />
                    </div>
                ) : 
                <SearchForm setPropFilters={setPropFilters} setHaveSearched={setHaveSearched} />
            }
        </div>
    );
};

export default SearchLeadsPage;