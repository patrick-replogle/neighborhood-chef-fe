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
    height: '30px',
    width: '100px',
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
    justifyContent: 'space-between',
    width: 'calc(100% - 36px)',
    padding: '5px',
    overflowY: 'auto',
    wordWrap: 'break-word',
    borderRadius: '20px',
    //these next two lines hide scrollbars on cards
    '&::-webkit-scrollbar': { display: 'none' },
    '-ms-overflow-style': 'none',
    boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.46)',
  },
  dashboard: {
    maxHeight: '90%',
    maxWidth: '390px',
  },
  eventDetailsContainer: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '100%',
    },
  },
  addressContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  statusButtonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '10px',
    width: '100%',
    '& div': {
      width: '100%',
      '& button': {
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
    width: '46px',
    alignItems: 'center',
    position: 'relative',
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
    paddingTop: '56.25%',
    backgroundImage: (props) => `url(${props.img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '20px',
  },
  dashboardImg: {
    maxHeight: '20%',
  },
  description: {
    margin: '5px 0',
    fontWeight: '700',
    wordBreak: 'break-word',
  },
  iconTextContainer: {
    display: 'flex',
    margin: '5px 0',
  },
  span: {
    marginRight: '5px',
    verticalAlign: 'middle',
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
    height: '100%',
    [theme.breakpoints.down('md')]: {
      height: 'calc(100% - 16px)',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  textAndBtns: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '5px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  participants: {
    maxHeight: 150,
    width: '97%',
    maxWidth: '100%',
    justifyContent: 'flex-start',
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
    letterSpacing: '3px',

    '&:hover': {
      filter: 'brightness(70%)',
    },
  },
  avatarNoHover: {
    backgroundColor: '#e8e8e8',
    color: 'black',
    letterSpacing: '3px',
  },
  share: {
    maxHeight: 150,
    width: '100%',
    maxWidth: '97%',
  },
  shareButtons: {
    width: '40px',
    height: '40px',
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
    },
    '&:hover': {
      background: '#f8f8f8',
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
  },
  commentForm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

    '& input': {
      borderRadius: '20px',
      border: '2px solid rgba(0,0,0,.2)',
      padding: '15px 20px',
      [theme.breakpoints.down('sm')]: {},
    },
    '& button': {
      borderRadius: '20px',
      padding: '15px 50px',
      width: '20%',
      [theme.breakpoints.down('sm')]: {
        width: '30%',
        fontSize: '1rem',
        padding: '15px 20px',
      },
    },
  },
  singleCommentParent: {
    marginBottom: '10px',
    borderRadius: '10px',
    padding: '5px',
    display: 'flex',
    alignItems: 'flex-start',
  },
  singleCommentChild: {
    marginBottom: '10px',
    borderRadius: '10px',
    padding: '5px',
    marginLeft: '10%',
    display: 'flex',
    alignItems: 'flex-start',
  },
  avatarContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  photoContainer: {
    marginRight: '5px',
    width: '26px',
    height: '26px',
  },
  replyBtnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: '2px',
    '& .buttons': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
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
        lgmd: 963,
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
