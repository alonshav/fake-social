import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';
import { StyledPostTimeStampStyled } from '../../../../styles/StyledPostTimeStamp.styled';

interface PostTimestampProps {
  timestamp: string;
}

export const PostTimestamp = ({ timestamp }: PostTimestampProps) => {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <StyledPostTimeStampStyled className='post-timestamp'>
      <span title={timestamp} className='timestamp'>
        <i>{timeAgo}</i>
      </span>
    </StyledPostTimeStampStyled>
  );
};
