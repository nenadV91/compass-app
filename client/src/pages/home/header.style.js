export default theme => ({
  header: {
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'space-between'
  },
  strong: {
    fontSize: '1.6rem'
  },
  title: {
    color: theme.colors.primary.main,
    fontSize: '2.5rem',

    '@media (max-width: 768px)': {
      fontSize: '2.4rem'
    }
  }
})