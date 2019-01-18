export default theme => ({
  root: {
    width: '100%',
    minHeight: '100%',
    padding: {
      top: 50,
      bottom: 50
    }
  },
  container: {
    height: '100%'
  },
  contentRow: {
    paddingTop: 35,
  },
  loading: {
    flex: 1,
    minHeight: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {
    borderWidth: 2
  },
  content: {
    flex: 1
  },
  controlOption: {
    textAlign: 'center'
  },
  roundedButton: {
    borderRadius: '50%',
    boxShadow: theme.shadows.button,
    width: 30,
    height: 30,
    padding: '0px !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',

    '& > i': {
      color: theme.colors.primary.main,
    }
  }
})