import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import IssueTable from './IssueTable';
import Pagination from 'react-js-pagination';
import './css/Pagination.css';

const IssueList = () => {
  const [issues, setissues] = useState([]);

  const [activePage, setactivePage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          'https://api.github.com/repos/walmartlabs/thorax/issues',
        );
        setissues(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // Logic for displaying current todos
  const indexOfLast = activePage * 10;
  const indexOfFirst = indexOfLast - 10;
  const currentIssues = issues.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNumber) => {
    setactivePage(pageNumber);
  };

  return issues ? (
    <Fragment>
      <div className='header'>
        <h1 class='text-normal'>
          <span>
            <a href='https://github.com/walmartlabs'>WALMARTLABS</a>
          </span>
          <span> / </span>
          <strong>
            <a href='https://github.com/walmartlabs/thorax'>thorax</a>
          </strong>
        </h1>
      </div>
      <h1 className='app-title'>GitHub Issue Browser</h1>
      <div className='container'>
        <div className='row my-3'>
          <div className='col-6'>
            <h3>Repository Issues</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <IssueTable
              issues={currentIssues}
              owner='walmartlabs'
              repo='thorax'
            />
          </div>
        </div>
        <div className='row my-3'>
          <div className='col'>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={10}
              totalItemsCount={issues.length}
              pageRangeDisplayed={3}
              onChange={handlePageChange}
              itemClass='page-item'
              activeClass='active'
            />
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    ''
  );
};

export default IssueList;
