import React from 'react';
import IssueEntry from './IssueEntry';

const IssueTable = ({ owner, repo, issues }) => {
  return (
    <div className='card'>
      <ul className='list-group'>
        {issues.map((issue) => (
          <IssueEntry
            key={issue.id}
            owner={owner}
            repo={repo}
            title={issue.title}
            url={issue.url}
            number={issue.number}
            createdAt={issue.created_at}
            closedAt={issue.closed_at}
            user={issue.user}
            labels={issue.labels}
            numComments={issue.comments}
          />
        ))}
      </ul>
    </div>
  );
};

export default IssueTable;
