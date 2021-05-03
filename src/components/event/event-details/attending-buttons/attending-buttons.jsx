import React from 'react';

import StatusTabs from '../../../dashboard/event-view/recent-card/status-buttons/status-buttons';

import { useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';

export default function AttendingButtons({ event, classes, attending, setAttending }) {
  const currentUserId = useSelector((state) => state.user.id);

  return (
    <div className={classes.textAndBtns}>
      <Typography variant="h6">Will you be attending this event?</Typography>
      <div className={classes.statusButtonContainer}>
        <StatusTabs
          id={event.id}
          currentUserId={currentUserId}
          attending={attending}
          setAttending={setAttending}
        />
      </div>
    </div>
  );
}