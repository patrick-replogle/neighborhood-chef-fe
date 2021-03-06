import makeStyles from '@material-ui/styles/makeStyles';
import FullCourse from '../../assets/full-course.jpg';

export const styles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    paddingTop: '2%',
  },
  root: {
    width: '100%',
    height: '100%',
    background: 'transparent',
    [theme.breakpoints.down('lg')]: {
      overflowY: 'scroll',
    },

    [theme.breakpoints.down('md')]: {
      paddingTop: '2%',
    },

    '& .mainContainer': {
      display: 'flex',
      width: '100%',
      //height: '100%',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },

      '& .leftSide': {
        display: 'flex',
        flexDirection: 'column',
        width: (props) => (props.user && props.user.UserEvents.owned.length > 0 ? '60%' : '100%'),
        marginRight: '1%',

        [theme.breakpoints.down('md')]: {
          width: () => '95%',
          margin: '0 2.5%',
        },

        '& .header': {
          backgroundImage: (props) =>
            props.user && `url(${props.user.bannerPhoto ? props.user.bannerPhoto : FullCourse})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flexStart',
          flexDirection: 'column',
          cursor: 'pointer',
          width: '100%',
          height: 0,
          paddingTop: '37.49%',
          color: 'white',
          borderRadius: '10px 10px 0 0',
          position: 'relative',

          '&:hover': {
            cursor: 'default',
          },

          '& .edit-icon': {
            position: 'absolute',
            top: '5%',
            left: '45%',

            '&:hover': {
              cursor: 'pointer',
              opacity: 1,
              color: 'white',
            },
          },

          '& #upload-image-div': {
            backgroundImage: (props) => props.user && `url(${props.user.photo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '17%',
            paddingTop: '17%',
            borderRadius: '100%',
            cursor: 'pointer',
            marginTop: 'calc(3px + 18% * -1)',
            border: '3px solid white',
            '&:hover': {
              filter: 'brightness(70%)',
            },
          },

          '& #non-loggedin-user-img': {
            backgroundImage: (props) => props.user && `url(${props.user.photo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '17%',
            paddingTop: '17%',
            borderRadius: '100%',
            cursor: 'pointer',
            marginTop: 'calc(3px + 18% * -1)',
            border: '3px solid white',
          },

          '& h2': {
            margin: '5px 0',
            fontSize: '3rem',
            fontWeight: 'bold',
          },

          '& div': {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            '& :nth-child(2)': {
              margin: '0 2%',
            },
            '& h6': {
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              paddingBottom: '2.5%',
            },
          },
        },

        '& #edit-profile': {
          textAlign: 'center',
          cursor: 'pointer',
        },

        '& .details': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          color: '#868686',
          padding: '0 1% 0 2%',

          '& .bio': {
            wordBreak: 'break-word',

            '& h6': {
              color: '#4E4E4E',
              fontWeight: '700',
              marginBottom: '5px',
            },
          },

          '& .userDetailsText': {
            padding: '2% 0',
            display: 'flex',
            justifyContent: 'center',
            [theme.breakpoints.down('lg')]: {
              flexDirection: 'column',
              justifyContent: 'flex-start',
            },

            '& .textIconContainer': {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              flexDirection: 'column',
              margin: '15px 0',
              wordBreak: 'break-word',
              width: '95%',

              [theme.breakpoints.down('lg')]: {
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              },

              '& h6': {
                color: '#4E4E4E',
                fontWeight: '700',
                marginBottom: '5px',
              },

              '& div': {
                display: 'flex',
                alignItems: 'center',

                '& a, p': {
                  color: 'rgba(0, 0, 0, 1)',
                  marginLeft: '1%',
                  fontWeight: '700',
                },
              },
            },
          },
        },
      },
      '& .rightSide': {
        width: '40%',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        height: '95%',
        [theme.breakpoints.down('md')]: {
          width: '100%',
          height: '100%',
          marginTop: '0',
        },

        '& h6:first-child': {
          background: 'rgba(0 ,0 ,0, .1)',
          borderRadius: '10px',
          width: '90%',
          margin: '0 5% 1% 5%',
          color: 'white',

          [theme.breakpoints.down('md')]: {
            width: '95%',
            margin: '0 2.5%',
            fontSize: '200%',
            background: 'rgba(0 ,0 ,0, .2)',
          },
        },

        '& h6': {
          color: '#4E4E4E',
          fontWeight: '700',
          paddingLeft: '10px',
          textAlign: 'center',

          [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
          },
        },

        '& div': {
          overflowY: 'scroll',
          msOverflowStyle: 'none' /* Hide scrollbar for IE and Edge */,
          scrollbarWidth: 'none' /* Hide scrollbar for Firefox */,
          '&::-webkit-scrollbar': {
            display: 'none' /* Hide scrollbar for Chrome, Safari and Opera */,
          },

          '& .eventContainer': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            alignSelf: 'center',
            zIndex: 3,
            paddingTop: '10px',
            maxHeight: '690px',

            [theme.breakpoints.down('lg')]: {
              maxHeight: '780px',
            },

            [theme.breakpoints.down('md')]: {
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: '20px',
              padding: '2% 4%',
              maxHeight: '100%',
              height: '100%',
            },

            [theme.breakpoints.down('md')]: {
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: '20px',
              padding: '2% 4%',
              maxHeight: '100%',
              height: '100%',
            },

            [theme.breakpoints.down('md')]: {
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: '20px',
              padding: '2% 4%',
              maxHeight: '100%',
              height: '100%',
            },

            [theme.breakpoints.down('sm')]: {
              flexWrap: 'noWrap',
              flexDirection: 'column',
            },

            '& .eventCard': {
              borderRadius: '10px',
              width: '80%',
              marginBottom: '2%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'center',
              height: '100%',
              minHeight: 225,
              paddingBottom: '2%',
              msOverflowStyle: 'none' /* Hide scrollbar for IE and Edge */,
              scrollbarWidth: 'none' /* Hide scrollbar for Firefox */,
              '&::-webkit-scrollbar': {
                display: 'none' /* Hide scrollbar for Chrome, Safari and Opera */,
              },

              '&:hover': {
                transform: 'scale(1.025)',
                cursor: 'pointer',
              },

              [theme.breakpoints.down('md')]: {
                width: '47%',
                margin: '1%',
              },
              [theme.breakpoints.down('sm')]: {
                width: '96%',
              },
              '& .iconContainer': {
                display: 'flex',
                justifyContent: 'flex-end',

                '& svg': {
                  fontSize: '2.5rem',
                  cursor: 'pointer',
                  margin: '.5%',
                },
              },
            },
          },
        },
      },
    },
  },
}));
