import gql from "graphql-tag";

export const ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      email
      firstName
      lastName
      gender
      address
      latitude
      longitude
      eventsOwned {
        id
        title
        date
        description
        startTime
        endTime
        createDateTime
        address
        latitude
        longitude
        hashtags
        modifiers
        user_id
        users {
          id
          email
          firstName
          lastName
          address
          longitude
          latitude
          status
        }
      }
    }
  }
`;

export const USER_BY_ID = gql`
  query getUserById($id: ID!) {
    getUserById(id: $id) {
      id
      email
      firstName
      lastName
      gender
      address
      latitude
      longitude
      eventsOwned {
        id
        date
        startTime
        endTime
        createDateTime
        title
        description
        category_id
        user_id
        address
        latitude
        longitude
        modifiers
        hashtags
        users {
          id
          email
          firstName
          lastName
          address
          longitude
          latitude
          status
        }
      }
    }
  }
`;

export const GET_AUTHORED_EVENTS = gql`
  query getAuthoredEvents($id: ID!) {
    getAuthoredEvents(id: $id) {
      id
      startTime
      endTime
      createDateTime
      description
      title
      address
      latitude
      longitude
      user_id
      modifiers
      hashtags
      users {
        id
        email
        firstName
        lastName
        longitude
        latitude
        status
        address
        gender
      }
    }
  }
`;

export const GET_INVITED_EVENTS = gql`
  query getInvitedEvents($id: ID!) {
    getInvitedEvents(id: $id) {
      id
      date
      startTime
      endTime
      createDateTime
      title
      description
      category_id
      user_id
      address
      latitude
      longitude
      modifiers
      hashtags
      users {
        id
        email
        firstName
        lastName
        longitude
        latitude
        status
        address
        gender
      }
    }
  }
`;

export const GET_ATTENDING_EVENTS = gql`
  query getAttendingEvents($id: ID!) {
    getAttendingEvents(id: $id) {
      id
      date
      startTime
      endTime
      createDateTime
      title
      description
      category_id
      user_id
      address
      latitude
      longitude
      modifiers
      hashtags
      users {
        id
        email
        firstName
        lastName
        longitude
        latitude
        status
        address
        gender
      }
    }
  }
`;

export const GET_UNINVITED_USERS = gql`
  query getUninvitedUsers($id: ID!) {
    getUninvitedUsers(id: $id) {
      id
      firstName
      lastName
      address
      email
      longitude
      latitude
      status
    }
  }
`;
