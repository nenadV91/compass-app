export default theme => ({
  '@global': {
    'h1, h2, h3': {
      fontFamily: theme.fonts.family.alt,
      fontWeight: theme.fonts.weight.light,
    },
    body: {
      ...theme.text.body1
    },
    p: {
      lineHeight: '1.75'
    },
    a: {
      ...theme.text.link,

      '&:hover': {
        color: theme.colors.primary.main,
      }
    },
    '.btn': {
      padding: ['.475rem 1.55rem'],

      '&.round': {
        borderRadius: '30px',
        padding: '.575rem 1.75rem'
      }
    },
    '.btn.btn-primary': {
      background: theme.colors.primary.main,
      borderColor: theme.colors.primary.main,

      '&:focus, &:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled):active': {
        boxShadow: [theme.shadows.buttonActive, '!important'],
        background: [theme.colors.primary.main, '!important'],
        borderColor: [theme.colors.primary.main, '!important']
      },
    },
    '.btn.btn-white': {
      background: 'white',
      color: theme.colors.text.body1,

      '&.shadow': {
        boxShadow: [theme.shadows.button, '!important']
      }
    },
    '.text-green': {
      color: theme.colors.green.main
    },
    '.text-red': {
      color:  theme.colors.red.main
    },
    '.text-primary': {
      color: [theme.colors.primary.main, '!important']
    },
    '.ReactTable .rt-tbody .rt-td': {
      textAlign: 'center'
    },
    '.modal.show': {
      display: 'flex !important',
      alignItems: 'center'
    },
    '.modal.show .modal-dialog': {
      '@media(min-width: 576px)': {
        minWidth: 500
      }
    },
    '.navbar-light .navbar-brand': {
      fontSize: '1rem'
    },
    '.invalid-feedback': {
      fontWeight: 400
    },
    '.Toastify__toast': {
      minHeight: 55,
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 15,
    },
    '.Toastify__close-button': {
      alignSelf: 'center'
    },
    '.Toastify__toast--success': {
      backgroundColor: theme.colors.green.main
    },
    '.Toastify__toast--error': {
      backgroundColor: theme.colors.red.main
    },
    '@media(min-width: 1200px)': {
      '.container': {
        minWidth: '1300px'
      }
    }
  }
})