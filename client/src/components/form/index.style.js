export default theme => ({
  controls: {
    display: 'flex',
    justifyContent: 'space-between',

    '& button': {
      marginRight: 10
    }
  },
  label: {
    '& .required': {
      fontSize: '0.8rem',
      color: 'red'
    }
  }
})