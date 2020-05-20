import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { USER_BY_ID } from "../../../graphql/users/user-queries";
import { print } from "graphql";

//style imports
import Typography from "@material-ui/core/Typography";

//icon imports
import { Icon } from "@iconify/react";
import calendarIcon from "@iconify/icons-flat-color-icons/calendar";
import clockIcon from "@iconify/icons-flat-color-icons/clock";
import globeIcon from "@iconify/icons-flat-color-icons/globe";

import StatusButton from "./StatusButton";
import { rsvpButtons } from "../../../data/buttons";

import { parseTime } from "../../../utilities/functions";

const EventDetails = () => {
  //grabbed from redux store
  const currentEventID = useSelector((state) => state.activeCalendarEvent);
  const eventList = useSelector((state) => state.eventList);
  const me = useSelector((state) => state.myUser);
  // const update = useSelector((state) => state.update);

  const event = eventList && eventList.find((ele) => ele.id === currentEventID);

  //useState hooks for local state
  const [creatorName, setCreatorName] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");

  let timeObject, parsedAddressURL;

  useEffect(() => {
    //get creator name when event loads.  This is a rough and inefficient way to do this, especially if there ends up being protected queries
    event &&
      axios({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: "post",
        data: {
          query: print(USER_BY_ID),
          variables: { id: event.user_id },
        },
      })
        .then((res) => {
          const data = res.data.data.getUserById;
          setCreatorName(`${data.firstName} ${data.lastName}`);
          setCurrentStatus(
            event.users.filter((ele) => `${ele.id}` === `${me.id}`)[0].status
          );
        })
        .catch((err) => {
          console.log(err.message);
        });
    // eslint-disable-next-line
  }, [event]);

  //dealing with date formatting things
  if (event) {
    timeObject = parseTime(event.date, event.startTime, event.endTime);
    parsedAddressURL = `https://www.google.com/maps/search/${event.address.replace(
      " ",
      "+"
    )}`;
  }

  return (
    <div className="event-details-container">
      {!!event ? (
        <div className="single-event">
          <div>
            <Typography variant="h3">{event.title}</Typography>
            <p style={{ fontStyle: "italic", opacity: ".3" }}>
              created by {creatorName}
            </p>
          </div>
          <p style={{ opacity: ".3" }}> {event.description}</p>
          <div>Confirmed Participants: {event.users.length}</div>
          <div>
            <span style={{ marginRight: "5px", verticalAlign: "middle" }}>
              <Icon height="20" icon={calendarIcon} />
            </span>
            {timeObject.formattedDate}
          </div>
          <div>
            <span style={{ marginRight: "5px", verticalAlign: "middle" }}>
              <Icon height="20" icon={clockIcon} />
            </span>
            {`${timeObject.startTime} ${
              timeObject.endTime ? "- " + timeObject.endTime : ""
            }`}
          </div>
          <div>
            <span style={{ marginRight: "5px", verticalAlign: "middle" }}>
              <Icon height="20" icon={globeIcon} />
            </span>
            <a
              href={parsedAddressURL}
              target="_blank"
              style={{ color: "rgb(79, 79, 248)" }}
            >
              {event.address}
            </a>
          </div>
          <div style={{ padding: "20px 0px 10px 0px" }}>
            <Typography variant="h6">
              Will you be attending this event?
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "10px",
              }}
            >
              {rsvpButtons.map((ele) => (
                <StatusButton
                  {...ele}
                  eventStatus={currentStatus}
                  eventId={event.id}
                  userId={me.id}
                  setStatus={setCurrentStatus}
                  key={ele.name}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3>Select an event from the calendar to view the details here.</h3>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
