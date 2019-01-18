export default theme => ({
  root: {
    '@media(max-width: 576px)': {
      flex: 1
    }
  },
  title: {
    '& h5': {
      fontSize: '1.6rem',
      fontWeight: theme.fonts.weight.light,
    }
  }
})