export default theme => ({
  root: {
    backgroundColor: ['white', '!important'],
    boxShadow: theme.shadows.navbar
  },
  toggler: {
    '&:focus, &:active': {
      outline: ['none', '!important']
    }
  }
})