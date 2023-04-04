/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      Light: {
        primary: {
          'Main': '9155FD',
          'Alternative-light': '9E69FD',
          'Alternative-dark': '6E41C0',
          'Contrast': 'FFFFFF',
          'Contained-Hover-Background': '804BDF',
          'Outlined-Hover-Background': '9155FD', //8% opacity
          'Outlined-Resting-Background': '9155FD', // 50% opacity
        },
        Secondary: {
          'Main': '8A8D93',
          'Alternative-light': '9C9FA4',
          'Alternative-dark': '4D5056',
          'Contrast': 'D6D6D6',
          'Contained-Hover-Background': '777B82',
          'Outlined-Hover-Background': '8A8D93', //8% opacity
          'Outlined-Resting-Background': '8A8D93', // 50% opacity
        },
        Info: {
          'Main': '16B1FF',
          'Alternative-light': '32BAFF',
          'Alternative-dark': '0E71A3',
          'Contrast': 'D6D6D6',
          'Contained-Hover-Background': '139CE0',
          'Outlined-Hover-Background': '32BAFF', //8% opacity
          'Outlined-Resting-Background': '32BAFF', // 50% opacity
        },
        Success: {
          'Main': '56CA00',
          'Alternative-light': '6AD01F',
          'Alternative-dark': '378100',
          'Contrast': 'FFFFFF',
          'Contained-Hover-Background': '4CB200',
          'Outlined-Hover-Background': '56CA00', // 8% opacity
          'Outlined-Resting-Background': '56CA00', // 50% opacity
        },
        Warning: {
          'Main': 'FFB400',
          'Alternative-light': 'FFB547',
          'Alternative-dark': 'A37300',
          'Contrast': 'D6D6D6',
          'Contained-Hover-Background': 'E09E00',
          'Outlined-Hover-Background': 'FFB400', // 8% opacity
          'Outlined-Resting-Background': 'FFB400', // 50% opacity
        },
        Error: {
          'Main': 'FF4C51',
          'Alternative-light': 'FF6166',
          'Alternative-dark': 'A33134',
          Contrast: 'D6D6D6',
          'Contained-Hover-Background': 'E04347',
          'Outlined-Hover-Background': 'FF4C51', // 8% opacity
          'Outlined-Resting-Background': 'FF4C51', // 50% opacity
        },
        Text: {
          Primary: '3A3541', //87% opacity
          Secondary: '3A3541', // 60% opacity
          Disabled: '3A3541', // 38% opacity
        },
        Action: {
          Active: '3A3541', // 54% opacity
          Hover: '3A3541', // 4% opacity
          Selected: '3A3541', //8% opacity
          Disabled: '3A3541', // 26% opacity
          DisabledBackground: '3A3541', // 12% opacity
          Focus: '3A3541', // 12% opacity
        },
        Other: {
          Divider: '3A3541',
          OutLineBorder: '3A3541',
          InputLine: '3A3541',
          Overlay: '3A3541', //50% opacity
          SnackbarBG: '212121',
          BodyBackground: {
            Fill: 'F4F5FA',
            Stroke: '000000',
          },
  
          PaperCard: {
            Fill: 'FFFFFF',
            Stroke: '000000',
          },
        },
        CustomBG: {
          Primary: ['FFFFFF', '9155FD'],
          Secondary: ['FFFFFF', '8A8D93'],
          Info: ['FFFFFF', '2196F3'],
          Success: ['FFFFFF', '4CAF50'],
          Warning: ['FFFFFF', 'ED6C02'],
          Error: ['FFFFFF', 'F44336'],
          MenuActive: '9155FD',
        },
      },
      Dark: {
        primary: {
          'Main': '9155FD',
          'Alternative-light': '9E69FD',
          'Alternative-dark': '6E41C0',
          'Contrast': 'FFFFFF',
          'Contained-Hover-Background': '804BDF',
          'Outlined-Hover-Background': '9155FD', //8% opacity
          'Outlined-Resting-Background': '9155FD', // 50% opacity
        },
        Secondary: {
          'Main': '8A8D93',
          'Alternative-light': '9C9FA4',
          'Alternative-dark': '4D5056',
          'Contrast': 'D6D6D6',
          'Contained-Hover-Background': '777B82',
          'Outlined-Hover-Background': '8A8D93', //8% opacity
          'Outlined-Resting-Background': '8A8D93', // 50% opacity
        },
        Info: {
          'Main': '16B1FF',
          'Alternative-light': '32BAFF',
          'Alternative-dark': '0E71A3',
          'Contrast': 'D6D6D6',
          'Contained-Hover-Background': '139CE0',
          'Outlined-Hover-Background': '32BAFF', //8% opacity
          'Outlined-Resting-Background': '32BAFF', // 50% opacity
        },
        Success: {
          'Main': '56CA00',
          'Alternative-light': '6AD01F',
          'Alternative-dark': '378100',
          'Contrast': 'FFFFFF',
          'Contained-Hover-Background': '4CB200',
          'Outlined-Hover-Background': '56CA00', // 8% opacity
          'Outlined-Resting-Background': '56CA00', // 50% opacity
        },
        Warning: {
          'Main': 'FFB400',
          'Alternative-light': 'FFB547',
          'Alternative-dark': 'A37300',
          'Contrast': 'D6D6D6',
          'Contained-Hover-Background': 'E09E00',
          'Outlined-Hover-Background': 'FFB400', // 8% opacity
          'Outlined-Resting-Background': 'FFB400', // 50% opacity
        },
        Error: {
          'Main': 'FF4C51',
          'Alternative-light': 'FF6166',
          'Alternative-dark': 'A33134',
          Contrast: 'D6D6D6',
          'Contained-Hover-Background': 'E04347',
          'Outlined-Hover-Background': 'FF4C51', // 8% opacity
          'Outlined-Resting-Background': 'FF4C51', // 50% opacity
        },
        Text: {
          Primary: 'E7E3FC', //87% opacity
          Secondary: 'E7E3FC', // 87% opacity
          Disabled: 'E7E3FC', // 87% opacity
        },
        Action: {
          Active: 'E7E3FC', // 54% opacity
          Hover: 'E7E3FC', // 4% opacity
          Selected: 'E7E3FC', //8% opacity
          Disabled: 'E7E3FC', // 26% opacity
          DisabledBackground: 'E7E3FC', // 12% opacity
          Focus: 'E7E3FC', // 12% opacity
        },
        Other: {
          Divider: 'E7E3FC',
          OutLineBorder: 'E7E3FC', //23% opacity
          InputLine: 'E7E3FC', // 22% opacity
          Overlay: '2C2942', //87% opacity
          SnackbarBG: 'FFFFFF',
          BodyBackground: {
            Fill: '28243D',
            Stroke: '000000',
          },
          PaperCard: {
            Fill: '312D4B',
            Stroke: '000000',
          },
        },
        CustomBG: {
          Primary: ['312D4B', '9155FD'],
          Secondary: ['312D4B', '8A8D93'],
          Info: ['312D4B', '2196F3'],
          Success: ['312D4B', '4CAF50'],
          Warning: ['312D4B', 'FFB400'],
          Error: ['312D4B', 'F44336'],
        },
      }
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    
  },
  plugins: [],
};
