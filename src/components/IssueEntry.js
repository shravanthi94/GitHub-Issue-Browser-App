import React from 'react';
import { Link } from 'react-router-dom';
import { getTimeDiffFromNow } from '../utils/timeUtils';
import './css/IssueEntry.css';
import issueOpenedIcon from '../images/svg/issue-opened-green.svg';
import issueClosedIcon from '../images/svg/issue-closed-red.svg';
import comment from '../images/svg/comment.svg';

const IssueEntry = ({
  title,
  url,
  number,
  numComments,
  createdAt,
  closedAt,
  user,
}) => {
  let icon, timeDiffStr, verb;
  if (closedAt) {
    icon = issueClosedIcon;
    timeDiffStr = getTimeDiffFromNow(closedAt);
    verb = 'was closed';
  } else {
    icon = issueOpenedIcon;
    timeDiffStr = getTimeDiffFromNow(createdAt);
    verb = 'opened';
  }

  const commentLinkIcon =
    numComments !== 0 ? (
      <div className='col-1 pt-1'>
        <a
          className='text-muted'
          href={`https://github.com/walmartlabs/thorax/pull/${number}`}
        >
          <img src={comment} alt='comments' />
          <small className='font-weight-bold ml-1'>{numComments}</small>
        </a>
      </div>
    ) : null;

  return (
    <li className='list-group-item py-2'>
      <img className='float-left pt-1 pl-1' src={icon} alt='' />
      <div className='row'>
        <div className='col pl-2'>
          <Link className='text-dark font-weight-bold' to={`/issues/${number}`}>
            {title}
          </Link>
          <div className='row'>
            <div className='col'>
              <small className='text-muted'>
                <span>{`#${number}`}</span> {verb}&nbsp;
                <span>{timeDiffStr}</span> by&nbsp;
                <a
                  className='text-muted'
                  href={`https://github.com/${user.login}`}
                >
                  {user.login}
                </a>
              </small>
            </div>
          </div>
        </div>

        {commentLinkIcon}
      </div>
    </li>
  );
};

export default IssueEntry;
