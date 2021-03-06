import gql from 'graphql-tag';

const getBYEmailEventString = `
id
startTime
endTime
createDateTime
title
description
category
address
latitude
longitude
modifiers
hashtags
status
photo
User {
    id
    firstName
    lastName
    photo
    bannerPhoto
}
EventUsers {
    attending {
        id
        email
        firstName
        lastName
        address
        longitude
        latitude
        status
        photo
    }
    invited {
        id
        email
        firstName
        lastName
        address
        longitude
        latitude
        status
        photo
    }
}`;

export const USER_WITHIN_RADIUS = gql`
  query getUserWithinRadius($queryParams: UserInput!) {
    Users(queryParams: $queryParams) {
      id
      email
      firstName
      lastName
      gender
      address
      latitude
      longitude
      photo
      biography
    }
  }
`;

export const USER_BY_EMAIL = gql`
    query getUserByEmail($queryParams: UserInput!, $mileRadius: Int!) {
        Users(queryParams: $queryParams) {
            id
            email
            firstName
            lastName
            gender
            address
            latitude
            longitude
            biography
            photo
            bannerPhoto
            UserEvents {
                attending {
                    ${getBYEmailEventString}
                }
                invited {
                    ${getBYEmailEventString}
                }
                favorited 
                owned {
                    ${getBYEmailEventString}
                }
                local(mileRadius: $mileRadius) {
                    ${getBYEmailEventString}
                }
            }
        }
    }
`;

export const RECENT_EVENTS = gql`
    query recentEvents($queryParams: UserInput!) {
        Users(queryParams: $queryParams) {
            id
            UserEvents {
                attending {
                    User {
                        id
                        firstName
                        lastName
                        status
                        photo
                    }
                    ${getBYEmailEventString}
                }
                invited {
                    User {
                        id
                        firstName
                        lastName
                        status
                        photo
                    }
                    ${getBYEmailEventString}
                }
                favorited 
                owned {
                    User {
                        id
                        firstName
                        lastName
                        status
                        photo
                    }
                    ${getBYEmailEventString}
                }
            }
        }
    }
`;

export const USER_BY_ID = gql`
    query Users($queryParams: UserInput) {
        Users(queryParams: $queryParams) {
            id
            email
            firstName
            lastName
            gender
            address
            latitude
            longitude
            biography
            photo
            bannerPhoto
            UserEvents {
                attending {
                    ${getBYEmailEventString}
                }
                invited {
                    ${getBYEmailEventString}
                }
                favorited 
                owned {
                    ${getBYEmailEventString}
                }
            }
        }
    }
`;
