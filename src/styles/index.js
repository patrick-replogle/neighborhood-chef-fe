// @ts-nocheck
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const buttonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'none',
    margin: '3px',
    marginBottom: '8px',
    border: 0,
    borderRadius: 6,
    padding: '8px 20px',
    cursor: 'pointer',
  },
  notActive: {
    background: 'white',
    color: 'black',
    opacity: 0.5,
    '&:hover': {
      background: 'rgba(88, 212, 115, 0.3)',
    },

    [theme.breakpoints.down('md')]: {
      border: '2px solid grey',
    },
  },
  warn: {
    background: 'white',
    color: 'black',
    opacity: 0.5,
    '&:hover': {
      background: '#fd7c7c',
    },
  },
  active: {
    background: '#58D573',
    color: 'white',
    '& a': {
      color: 'white',
    },
    '&:hover': {
      background: '#58D573',
    },

    [theme.breakpoints.down('md')]: {
      border: '2px solid #58D573',
    },
  },
  single: {
    justifyContent: 'center',
    textAlign: 'center',
    background: '#58D573',
    color: 'white',
    '& a': {
      color: 'white',
    },
    '&:hover': {
      background: '#58D573',
    },
  },
  rsvpRoot: {
    width: '33%',
    padding: '2%',
    borderRadius: '5px',
    color: 'white',
    fontWeight: 'bolder',
    cursor: 'pointer',
    border: 'none',
    margin: '0px 3px',
    outline: 'none',
  },
  icon: {
    background: '#E8E8E8',
    width: '45px',
    height: '45px',
  },
  iconGreen: {
    background: '#58D573',
    width: '45px',
    height: '45px',
    '&:hover': {
      background: '#58D573',
    },
  },
}));

export const formStyles = makeStyles({
  registerComponent: {
    'text-align': 'center',
    'font-size': '20px',
    color: '#A2A2A2',
    '& .loginLink': {
      color: '#58d473',
      'text-decoration': 'underline',
      'font-size': '20px',
    },
    '& .steps': {
      background: 'inherit',
      width: '100%',
      'justify-content': 'center',
      '& .MuiMobileStepper-dotActive': {
        'background-color': '#000000',
      },
    },
  },
  registerForm: {
    width: '60%',
    margin: '0 auto',
    display: 'flex',
    'flex-wrap': 'wrap',
    '& h1': {
      width: '100%',
      'font-size': '44px',
      'line-height': '66px',
      'letter-spacing': '0.02em',
      'font-weight': 'normal',
      color: '#000000',
    },
    '& .email': {
      'margin-top': '40px',
      width: '100%',
      'text-align': 'left',
    },
    '& .password': {
      'margin-top': '40px',
      width: '48%',
      'text-align': 'left',
    },
    '& .confirmPassword': {
      'margin-top': '40px',
      width: '48%',
      'text-align': 'left',
      'margin-left': '4%',
    },
    '& .firstName': {
      'margin-top': '40px',
      width: '48%',
      'text-align': 'left',
    },
    '& .lastName': {
      'margin-top': '40px',
      width: '48%',
      'text-align': 'left',
      'margin-left': '4%',
    },
    '& .location': {
      visibility: 'hidden',
      'margin-top': '40px',
      width: '100%',
      'text-align': 'left',
    },
    '& .geocoder': {
      width: '100%',
      'margin-top': '-35px',
      '& input': {
        width: '100%',
      },
      '& .react-geocoder-item': {
        cursor: 'pointer',
      },
    },
    '& .terms': {
      'margin-top': '40px',
      width: '100%',
    },
    '& .gender': {
      'margin-top': '40px',
      width: '100%',
      'text-align': 'left',
      '& h3': {
        margin: '0',
        'font-weight': 'normal',
        'font-size': '20px',
      },
      '& span': {
        'font-size': '16px',
      },
    },
    '& .photo': {
      'margin-top': '40px',
      width: '100%',
    },
    '& input': {
      'font-size': '20px',
      'font-style': 'normal',
      'font-weight': '500',
      'line-height': '30px',
      'letter-spacing': '0.02em',
    },
    '& label': {
      'font-size': '20px',
      color: '#A2A2A2',
    },
    '& button': {
      width: '100%',
      padding: '10px 30px',
      margin: '20px 0',
      'background-color': '#58d473',
      'border-color': '#58d473',
      'border-radius': '10px',
      'font-size': '24px',
      '&:hover': {
        'background-color': '#12a245',
      },
    },
    '& .Mui-disabled': {
      'background-color': '#58D473',
      opacity: '0.5',
      color: '#fff',
    },
    '& .MuiFormControl-root': {
      'margin-top': '40px',
    },
    '& .Mui-error': {
      'font-size': '16px',
    },
  },
  icon: {
    cursor: 'pointer',
  },
});

export const cardStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    margin: '8px',
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100% - 36px)',
    padding: '0% 0% 1% 0%',
    overflowY: 'auto',
    wordWrap: 'break-word',
    borderRadius: '20px',
    //these next two lines hide scrollbars on cards
    '&::-webkit-scrollbar': { display: 'none' },
    '-ms-overflow-style': 'none',
    boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.46)',
    zIndex: 1,
    position: 'relative',
  },
  attendingContainer: {
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      margin: '1% 0% 4% 0',
      flexDirection: 'column',
      padding: '0 5%',
      width: '100%',
    },
  },
  dashboard: {
    margin: '0 1.5% 1% 1.5%',
    flexBasis: '30%',

    
    [theme.breakpoints.down('md')]: {
      flexBasis: '45%',
      margin: '0 1.5% 2.5% 1.5%',
    },
   

    [theme.breakpoints.down('sm')]: {
      flexBasis: '85%',
      margin: '0 0 3.5% 7.5%',
      
    },

    "& .dashboard-card-content": {
      [theme.breakpoints.down('sm')]: {
        display: "none"
        
      },
    }
  },
  eventDetailsContainer: {
    width: '100%',

    background: 'transparent',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '100%',
    },
  },
  addressContainer: {
    display: 'flex',
    alignItems: 'center',

    '&  a': {
      alignSelf: 'center',
      justifySelf: 'center',
      marginLeft: '5%',
      whiteSpace: 'wrap',
      fontWeight: 200,

      [theme.breakpoints.down('lg')]: {
        fontSize: '80%',
      },

      [theme.breakpoints.down('md')]: {
        width: '150px',
      },
    },
  },
  statusButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: '.5%',
    '& div': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      '& button': {
        [theme.breakpoints.down('sm')]: {
          width: '30%',
          fontSize: '1.4rem',
        },
      },
    },
  },
  statusButtonContainerDashboard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: '.5%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '& div': {
      width: '80%',
      display: 'flex',
      justifyContent: 'center',
      '& button': {
        padding: '10px 0',
        width: '30%',
        [theme.breakpoints.down('sm')]: {
          width: '30%',
          fontSize: '1.4rem',
        },
      },
    },
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginLeft: '-15px',
  },
  subHeader: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
  },
  dateOverlay: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    background: '#f8f8f8',
    borderRadius: '8px',
    marginTop: '-14%',
    marginLeft: '5%',
    alignSelf: 'left',
    width: '55px',
    alignItems: 'center',
    position: 'relative',

    [theme.breakpoints.down('sm')] : {
      marginTop: "-9.5%",
      background: "#F0F0F0"
    }
  },
  icon: {
    fontSize: '2rem',
    marginRight: '5px',
    cursor: 'pointer',
    color: 'black',
    opacity: '.5',
  },
  img: {
    width: '100%',
    paddingTop: '39.375%',
    backgroundImage: (props) => `url(${props.img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '0 0 40% 0',
    zIndex: 1,
    position: 'relative',

    '&:hover': {
      filter: 'brightness(70%)',
    },
  },
  imageContainer: {
    width: '112%',
    position: 'relative',
    zIndex: 2,
    background: 'rgba(88, 212, 115, .4)',
    borderRadius: '0 0 40% 0',
    overflow: 'hidden',
    // boxShadow: '5px 5px 12px 1px rgba(25,25,25,0.18)',
  },
  imageAndContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    marginTop: '2%',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'space-around',
    padding: '0 5%',

    '& >*': {
      flexBasis: '50%',
    },

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  eventDetailsModifier: {
    justifyContent: 'center !important',

    '& .modifier': {
      '& .modifier-icon': {
        width: '43px !important',
        height: '43px !important',

        [theme.breakpoints.down('lg')]: {
          width: '30px !important',
          height: '30px !important',
        },

        [theme.breakpoints.down('md')]: {
          width: '40px !important',
          height: '40px !important',
        },

        [theme.breakpoints.down('sm')]: {
          width: '45px !important',
          height: '45px !important',
        },

        [theme.breakpoints.down('xs')]: {
          width: '35px !important',
          height: '35px !important',
        },

        '& svg': {
          fontSize: '2.4rem !Important',

          [theme.breakpoints.down('lg')]: {
            fontSize: '1.8rem !Important',
          },

          [theme.breakpoints.down('md')]: {
            fontSize: '2rem !Important',
          },

          [theme.breakpoints.down('sm')]: {
            fontSize: '1.8rem !Important',
          },
        },
      },

      '& p': {
        display: 'none !important',
      },
    },

    [theme.breakpoints.down('sm')]: {
      flexWrap: 'nowrap !important',
    },
  },
  iconsContainer: {
    display: 'flex',
    position: 'absolute',
    top: '5%',
    right: '5%',
    zIndex: 8,
  },
  hashtags: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: '0 5%',
    flexWrap: 'wrap',
    '& .hashtags': {
      padding: '.5% 1%',
      marginTop: '.5%',

      '&:hover': {
        transform: 'scale(1.1)',
      },

      [theme.breakpoints.down('sm')]: {
        padding: '.5% 1.5%',
      },
    },

    '& p': {
      fontSize: '70%',
    },

    [theme.breakpoints.down('sm')]: {
      marginBottom: '3%',
      padding: 0,
    },
  },

  mobileHeader: {
    padding: '0 5%',
    display: 'none',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      display: (props) => props.hashtags && props.hashtags.length && 'block',
    },
  },
  dashboardImg: {
    width: '100%',
    paddingTop: '39.375%',
    backgroundImage: (props) => `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  description: {
    margin: '2.5% 0',
    padding: '0 5%',
    fontWeight: '700',
    wordBreak: 'break-word',

    '& p': {
      fontWeight: 100,

      [theme.breakpoints.down('lg')]: {
        fontSize: '90%',
      },

      [theme.breakpoints.down('sm')]: {
        fontSize: '70%',
        paddiing: '0',
        margin: '4% 0',
      },
    },
  },
  details: {
    marginTop: '1%',
    padding: '0 5%',
  },
  detailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1%',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: '2% 0 4% 0',
    },
  },

  iconTextContainer: {
    display: 'flex',
    margin: '5px 0',

    '& p': {
      alignSelf: 'center',
      justifySelf: 'center',
      marginLeft: '5%',
      whiteSpace: 'nowrap',

      [theme.breakpoints.down('lg')]: {
        fontSize: '80%',
      },

      [theme.breakpoints.down('md')]: {},
    },
  },
  span: {
    marginRight: '5px',
    verticalAlign: 'middle',

    [theme.breakpoints.down('lg')]: {
      display: 'flex',
      alignItems: 'center',
    },

    '& svg': {
      [theme.breakpoints.down('lg')]: {
        height: '30px',
        width: '30px',
      },

      [theme.breakpoints.down('md')]: {
        height: '40px',
        width: '40px',
      },
    },
  },
  titleContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    wordBreak: 'break-word',
    [theme.breakpoints.down('md')]: {
      maxWidth: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '380px',
    },
  },
  fullEvent: {
    width: '97%',
    height: '78vh',
    background: 'transparent',

    '& h6': {
      opacity: 0.85,
      fontWeight: 300,
      fontSize: '115%',
      marginBottom: '2%',

      [theme.breakpoints.down('lg')]: {
        fontSize: '100%',
      },

      [theme.breakpoints.down('md')]: {
        fontSize: '120%',
      },

      [theme.breakpoints.down('sm')]: {
        marginTop: '2%',
        fontSize: '100%',
      },
    },

    [theme.breakpoints.down('md')]: {
      padding: ' 0 5% 5% 5%',
      height: '100%',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  headerBtn: {
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '3.5rem',
    width: '15%',
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'rgb(88, 212, 115)',
  },
  dashboardDetailsContainer: {
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '5%',

    '& .titleAddFavoriteContainer': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '& #dashboard-event-title': {
        whiteSpace: 'nowrap',

        '&:hover': {
          textDecoration: 'underline',
        },

        [theme.breakpoints.down('sm')]: {
          paddingTop: "4%"
        },
      },
    },
  },
  participantText: {
    paddingRight: '6%',
    whiteSpace: 'nowrap',
    fontSize: '80%',
    paddingLeft: '1.5%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '70%',
    },
  },
  dashboardLineBreak: {
    borderTop: '.75px solid #F2F2F2',
    width: '88%',
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  textAndBtns: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20vw',

    '& h6': {
      fontWeight: '200',
      whiteSpace: 'nowrap',

      [theme.breakpoints.down('lg')]: {
        fontSize: '90%',
      },

      [theme.breakpoints.down('md')]: {
        fontSize: '110%',
      },

      [theme.breakpoints.down('sm')]: {
        fontSize: '80%',
      },
    },

    '& button': {
      [theme.breakpoints.down('lg')]: {
        fontSize: '70%',
      },

      [theme.breakpoints.down('sm')]: {
        fontSize: '60% !important',
      },
    },

    [theme.breakpoints.down('lg')]: {
      width: '20vw',
    },

    [theme.breakpoints.down('md')]: {
      width: '30vw',
    },

    [theme.breakpoints.down('sm')]: {
      width: '70vw',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  participants: {
    width: '97%',
    maxWidth: '100%',
    justifyContent: 'center',

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  avatarGroup: {
    paddingBottom: '0 !important',
  },
  landingPage: {
    justifyContent: 'space-between',
    height: 'auto',
    maxHeight: '100%',
    overflow: 'auto',
    alignItems: 'center',
    alignSelf: 'center',
  },
  media: {
    height: 0,
    paddingTop: '40%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#e8e8e8',
    color: 'black',

    '&:hover': {
      filter: 'brightness(70%)',
    },
  },
  dashboardAvatar: {
    height: '55px',
    width: '55px',
    
    '& p': {
      fontSize: "170%",
      fontWeight: 400
    }
  },
  avatarNoHover: {
    backgroundColor: '#e8e8e8',
    color: 'black',
    letterSpacing: '3px',
  },
  share: {
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
    maxWidth: '97%',
    padding: '.5%',
    overflow: 'hidden',
    background: 'transparent',

    '& .react-share__ShareButton': {
      marginTop: '15%',

      '& svg': {
        [theme.breakpoints.down('lg')]: {
          fontSize: '1.6rem',
        },
        [theme.breakpoints.down('md')]: {
          fontSize: '2.5rem',
        },

        [theme.breakpoints.down('xs')]: {
          fontSize: '1.8rem',
        },
      },
    },

    '& .share-link-container': {
      width: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      margin: '2%',

      '& span': {
        fontSize: '120%',
        padding: '1% 0',
        whiteSpace: 'nowrap',

        [theme.breakpoints.down('xs')]: {
          fontSize: '80%',
        },
      },

      '& input': {
        marginLeft: '2%',
        width: '80%',
        borderRadius: '5px',
        outline: 'none',
        border: '1px solid #E8E8E8',
        padding: '1.5%',
        background: '#F5F5F5',
        fontSize: '101%',

        [theme.breakpoints.down('xs')]: {
          fontSize: '60%',
        },
      },

      [theme.breakpoints.down('xs')]: {
        marginTop: '4%',
        width: '90%',
      },
    },

    [theme.breakpoints.down('md')]: {
      background: 'rgb(255,255,255,.45)',
    },
  },
  shareButtons: {
    width: '50px',
    height: '50px',
    margin: '0 3%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 180,
    cursor: 'pointer',
    color: (props) => {
      if (props.name === 'Facebook') {
        return '#3965FF';
      }
      if (props.name === 'Twitter') {
        return '#55ACEE';
      }
      if (props.name === 'Text') {
        return '#2ddd53';
      }
      if (props.name === 'Email') {
        return '#5192f3';
      }
      if (props.name === 'Pinterest') {
        return '#FB5E4F';
      }
    },
    background: (props) => {
      if (props.name === 'Facebook') {
        return '#E5F0FF';
      }
      if (props.name === 'Twitter') {
        return '#D9EFFF';
      }
      if (props.name === 'Text') {
        return '#ebfff5';
      }
      if (props.name === 'Email') {
        return '#e0e6ff';
      }
      if (props.name === 'Pinterest') {
        return '#FAC5C2';
      }
    },
    '&:hover': {
      background: '#f8f8f8',
    },

    [theme.breakpoints.down('lg')]: {
      width: '25px',
      height: '25px',
    },

    [theme.breakpoints.down('md')]: {
      width: '30px',
      height: '30px',
    },

    [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px',
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: '2%',
    },
  },
  accountEvent: {
    width: '96%',
    marginBottom: '2%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    height: 'calc(100% - 36px)',
    minHeight: 200,
    maxHeight: 200,
  },
  comments: {
    width: '97%',
    maxWidth: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    padding: '1.5%',
    boxShadow: 'none',
    background: 'transparent',
  },
  commentsActual: {
    position: 'absolute',
    zIndex: 5,
    height: '80%',
    width: '97%',
    overflowY: 'hidden',
    scrollbarWidth: 'none',
    paddingRight: '6px',

    '&:hover': {
      overflowY: 'scroll',
      paddingRight: 0,
    },

    '& .show-hide-replies': {
      marginTop: '1%',
      marginLeft: '.5%',
      '&:hover': {
        textDecoration: 'underline',
        cursor: 'pointer',
      },
    },
    [theme.breakpoints.down('md')]: {
      position: 'relative',
    },
  },
  commentForm: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: '7%',
    zIndex: 10,

    '& input': {
      borderRadius: '10px',
      border: '2px solid rgba(0,0,0,.2)',
      padding: '3% 3%',
    },
    '& button': {
      borderRadius: '5px',
      padding: '15px 50px',
      marginLeft: '2%',
      width: '20%',
      marginBottom: 0,

      [theme.breakpoints.down('sm')]: {
        width: '30%',
        fontSize: '1rem',
        padding: '1.3% 3% 2% 3%',
      },
    },

    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },

    [theme.breakpoints.down('xs')]: {
      left: '5%',
    },
  },
  singleCommentParent: {
    marginBottom: '7px',
    display: 'flex',
    alignItems: 'flex-start',
    wordBreak: 'break-word',
    paddingRight: '6px',

    '& .comment-content': {
      background: '#F5F5F5',
      borderRadius: '20px',
      padding: '2%',

      '& .comment-text': {
        fontSize: '100%',

        [theme.breakpoints.down('sm')]: {
          fontSize: '80%',
        },
      },

      [theme.breakpoints.down('sm')]: {
        padding: '5% 5% 5% 7%',
      },
    },
  },
  singleCommentChild: {
    marginBottom: '5px',
    borderRadius: '10px',
    marginLeft: '5%',
    display: 'flex',
    alignItems: 'flex-start',
    wordBreak: 'break-word',
    paddingRight: '6px',

    '& .comment-content': {
      background: '#F5F5F5',
      borderRadius: '20px',
      padding: '2%',

      '& .comment-text': {
        fontSize: '100%',

        [theme.breakpoints.down('sm')]: {
          fontSize: '70%',
        },
      },

      [theme.breakpoints.down('sm')]: {
        padding: '5% 5% 5% 7%',
      },
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: '7%',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '4%',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '11%',
    },
  },
  avatarContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: '.15%',
    fontSize: '70%',
  },
  photoContainer: {
    marginRight: '5px',
    width: '26px',
    height: '26px',
  },
  replyBtnContainer: {
    width: '100%',
    marginTop: '2px',
    marginLeft: '.5%',
    marginBottom: '3%',
    '& .buttons': {
      display: 'flex',
      // flexBasis: '85%',
      alignItems: 'center',
      justifyContent: 'flex-start',

      '& >*': {
        margin: '0 3% 1% 0',

        [theme.breakpoints.down('sm')]: {
          margin: '0 6% 0 0',
        },
      },

      '& button': {
        background: '#58D573',
        color: 'white',

        '&:hover': {
          color: '#58D573',
          background: 'white',
        },
      },
    },

    [theme.breakpoints.down('sm')]: {
      marginBottom: '5%',
    },
  },
}));

export const textBoxStyles = makeStyles({
  background: {
    border: '0',
    borderRadius: '5px',
    background: 'rgba(0,0,0,.1)',
    width: '180px',
    padding: '0px 5px',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    background: '0',
    cursor: 'pointer',
    border: '0',
    width: '10%',
    padding: '0 5px',
  },
  textBox: {
    border: '0',
    borderRadius: '10px',
    background: '0',
    width: '85%',
    height: '100%',
    fontSize: '1.5rem',
  },
  addressInput: {
    position: 'relative',
    marginTop: '35px',
    fontSize: '1.7rem',
    display: 'block',
    border: 0,
    borderBottom: '1px solid rgba(0,0,0,.5)',
    width: '99%',
    background: 0,
    transition: 'all .2s ease',
    '&:focus': {
      outline: 'none',
      borderBottom: '2px solid #4051b5',
      '&:hover': {
        borderBottom: '2px solid #4051b5',
      },
    },
    '&:hover': {
      borderBottom: '2px solid rgba(0,0,0,.8)',
    },
    zIndex: 2,
  },
  addressLabel: {
    letterSpacing: '.5px',
    transition: 'all .2s ease',
    position: 'relative',
    top: ({ isFocus, addressValue }) => (isFocus || addressValue ? '57px' : '67px'),
    color: ({ isFocus }) => (isFocus ? '#4051b5' : 'rgba(0,0,0,.5)'),
  },
  icon: {
    position: 'relative',
    top: '60px',
    left: ({ isFocus, addressValue }) => (isFocus || addressValue ? '71%' : '67%'),
    zIndex: 3,
  },
});

export const modalStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

/*----Theme styling for entire app-----*/

export const theme = responsiveFontSizes(
  createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          '&$disabled': {
            opacity: '.4',
            background: 'rgba(88, 212, 115, 0.6)',
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 376,
        sm: 415,
        md: 768,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      h1: {
        fontSize: '5rem',
      },
      h2: {
        fontSize: '4.5rem',
      },
      h3: {
        fontSize: '3.5rem',
      },
      h4: {
        fontSize: '3rem',
      },
      h5: {
        fontSize: '2.4rem',
      },
      h6: {
        fontSize: '1.8rem',
      },
      caption: {
        fontSize: '1.5rem',
      },
      body1: {
        fontSize: '1.7rem',
      },
      body2: {
        fontSize: '1.2rem',
      },
    },
    palette: {
      textSecondary: { color: 'rgba(0, 0, 0, 0.6)' },
    },
  })
);

export const landingPageStyles = makeStyles((theme) => ({
  landingPageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  landingPageLeft: {
    display: 'flex',
    justifyContent: 'center',
    width: '50vw',
    height: '80vh',
    textAlign: 'center',
    alignSelf: 'center',

    [theme.breakpoints.down('700')]: {
      width: '100vw',
      paddingTop: '35px',
    },
  },
  landingPageRight: {
    height: '90vh',
    width: '50vw',
    '& img': {
      borderRadius: '0 0 0 22%',
      borderLeft: '10px solid #58D573',
      borderBottom: '10px solid #58D573',
    },
    [theme.breakpoints.down('700')]: {
      display: 'none',
    },
  },
}));
