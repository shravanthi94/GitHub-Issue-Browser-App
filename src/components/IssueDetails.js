import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import IssueDetailHeader from './IssueDetailHeader';
import './css/Pagination.css';

const IssueDetails = ({ match }) => {
  const [issue, setissue] = useState('');

  useEffect(() => {
    async function fetchDetails() {
      try {
        const res = await axios.get(
          `https://api.github.com/repos/walmartlabs/thorax/issues/${match.params.number}`,
        );
        setissue(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchDetails();
  }, [match]);

  return issue ? (
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
      <h1 className='app-title'>Issue Details</h1>
      <div className='container px-0 mt-3'>
        <IssueDetailHeader
          title={issue.title}
          number={issue.number}
          isOpen={issue.state === 'open'}
          timeStamp={issue.created_at}
          numComments={issue.comments}
          user={issue.user}
          body={issue.body}
        />
      </div>
    </Fragment>
  ) : (
    ''
  );
};

export default IssueDetails;
