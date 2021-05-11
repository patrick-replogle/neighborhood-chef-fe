import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  root: {
    borderRadius: '10px',
    height: '100%',
    width: '100%',
    boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.46)',
    background: 'transparent',
    overflowY: 'scroll',

    '& h4': {
      fontWeight: 'bold',
      fontSize: 'rem',
      textAlign: 'center',
    },

    '& .main': {
      padding: '0 20px',
      '& .textInputContainer': {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px 0',
        wordBreak: 'break-word',

        '& label': {
          color: '#4E4E4E',
          fontWeight: '700',
          marginBottom: '5px',
        },

        '& input': {
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          justifyContent: 'space-between',
          border: '2px solid #f0f0f0',
          borderRadius: '15px',
          padding: '10px 15px',
          background: 'white',
          fontSize: '1.6rem',
          outline: 'none',
        },
        '& .textarea': {
          border: '2px solid #f0f0f0',
          borderRadius: '15px',
          outline: 'none',
          paddingTop: '10px',
          paddingBottom: '5%',
          paddingLeft: '10px',
          paddingRight: '10px',
          fontSize: '1.6rem',
          width: '100%',
          whiteSpace: 'wrap',
          resize: 'none',
          fontFamily: '"Arial", sans-serif',
          overflow: 'hidden',

          '&::placeholder': {
            color: '#b7b7b7',
            textIndent: '.5%',
            fontFamily: '"Arial", sans-serif',
          },
        },
        '& select': {
          padding: '8px',
          border: '2px solid #f0f0f0',
          borderRadius: '15px',
          outline: 'none',
          cursor: 'pointer',
          fontSize: '1.6rem',
        },
      },
      '& .mapboxContainer': {
        '& label': {
          color: '#4E4E4E',
          fontWeight: '700',
          marginBottom: '5px',
        },
        '& .geocoderDiv': {
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          justifyContent: 'space-between',
          border: '2px solid #f0f0f0',
          borderRadius: '15px',
          padding: '10px 15px',
          background: 'white',
          fontSize: '1.6rem',
          width: '100%',

          '& input': {
            border: 'none',
            fontSize: '1.6rem',
            outline: 'none',
            width: '800px',
            [theme.breakpoints.down('md')]: {
              width: '600px',
            },
            [theme.breakpoints.down('sm')]: {
              width: '400px',
            },
            [theme.breakpoints.down('xs')]: {
              width: '240px',
            },
          },
        },
      },
    },
    '& .message': {
      textAlign: 'center',
    },
  },
}));
