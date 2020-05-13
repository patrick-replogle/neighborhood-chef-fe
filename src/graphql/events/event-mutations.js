import gql from 'graphql-tag';

export const ADD_EVENT = gql`
  mutation addEvent($input: NewEventInput!) {
    addEvent(input: $input) {
      id
      date
      title
      description
      startTime
      endTime
      user_id
      category_id
      address
      latitude
      longitude
      hashtags
      modifiers
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation updateEvent($id: ID!, $input: UpdateEventInput!) {
    updateEvent(id: $id, input: $input) {
      id
      date
      title
      description
      startTime
      endTime
      category_id
      address
      latitude
      longitude
      hashtags
      modifiers
      users {
        id
        email
        firstName
        lastName
        gender
        address
        latitude
        longitude
        status
      }
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation removeEvent($id: ID!) {
    removeEvent(id: $id) {
      id
      date
      title
      description
      startTime
      endTime
      category_id
      address
      latitude
      longitude
      hashtags
      modifiers
    }
  }
`;

export const INVITE_USER = gql`
  mutation inviteUserToEvent($input: EventInviteInput!) {
    inviteUserToEvent(input: $input) {
      id
      date
      startTime
      endTime
      title
      description
      category_id
      user_id
      address
      latitude
      longitude
      hashtags
      modifiers
      users {
        id
        email
        firstName
        lastName
        gender
        address
        latitude
        longitude
        status
      }
    }
  }
`;

export const UPDATE_INVITATION = gql`
  mutation updateInvitation($input: UpdateInviteInput!) {
    updateInvitation(input: $input) {
      id
      date
      startTime
      endTime
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
        gender
        address
        latitude
        longitude
        status
      }
    }
  }
`;

export const REMOVE_INVITATION = gql`
  mutation removeInvitation($input: RemoveInviteInput!) {
    removeInvitation(input: $input) {
      id
      date
      startTime
      endTime
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
        gender
        address
        latitude
        longitude
        status
      }
    }
  }
`;