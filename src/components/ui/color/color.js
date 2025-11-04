export const colors = {
  primary: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },

  accent: {
    50: '#EFF6FF',
    500: '#3B82F6',
    600: '#2563EB',
  },

  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
  },

  success: {
    50: '#ECFDF5',
    500: '#10B981',
  },

  warning: {
    50: '#FFFBEB',
    500: '#F59E0B',
  },

  error: {
    50: '#FFF1F2',
    500: '#F43F5E',
  },

  white: '#FFFFFF',
  black: '#000000',
};

export const semanticColors = {
  background: {
    primary: colors.white,
    secondary: colors.neutral[50],
    tertiary: colors.neutral[100],
    hover: colors.neutral[100],
    active: colors.accent[50],
  },

  text: {
    primary: colors.primary[700],
    secondary: colors.neutral[600],
    tertiary: colors.neutral[500],
    heading: colors.primary[900],
    accent: colors.accent[500],
    success: colors.success[500],
    warning: colors.warning[500],
    error: colors.error[500],
  },

  border: {
    light: colors.neutral[200],
    default: colors.neutral[300],
    dark: colors.neutral[400],
  },

  interactive: {
    default: colors.accent[500],
    hover: colors.accent[600],
    active: colors.accent[600],
    disabled: colors.neutral[400],
  },

  status: {
    success: colors.success[500],
    warning: colors.warning[500],
    error: colors.error[500],
    info: colors.accent[500],
  },
};

export const componentColors = {
  sidebar: {
    background: colors.white,
    text: colors.primary[700],
    textHover: colors.primary[900],
    iconDefault: colors.neutral[600],
    iconActive: colors.accent[500],
    activeBackground: colors.accent[50],
    activeText: colors.accent[500],
    hoverBackground: colors.neutral[100],
    border: colors.neutral[200],
  },

  button: {
    primary: {
      background: colors.accent[500],
      backgroundHover: colors.accent[600],
      text: colors.white,
    },
    secondary: {
      background: colors.neutral[100],
      backgroundHover: colors.neutral[200],
      text: colors.primary[700],
    },
    outline: {
      border: colors.neutral[300],
      borderHover: colors.accent[500],
      text: colors.primary[700],
      textHover: colors.accent[500],
    },
  },

  card: {
    background: colors.white,
    border: colors.neutral[200],
    shadow: 'rgba(0, 0, 0, 0.05)',
  },

  input: {
    background: colors.white,
    border: colors.neutral[300],
    borderFocus: colors.accent[500],
    placeholder: colors.neutral[400],
    text: colors.primary[700],
  },

  badge: {
    default: {
      background: colors.neutral[100],
      text: colors.neutral[600],
    },
    success: {
      background: colors.success[50],
      text: colors.success[500],
    },
    warning: {
      background: colors.warning[50],
      text: colors.warning[500],
    },
    error: {
      background: colors.error[50],
      text: colors.error[500],
    },
    info: {
      background: colors.accent[50],
      text: colors.accent[500],
    },
  },
};

export const cssVariables = `
:root {
  /* Primary */
  --color-primary-50: ${colors.primary[50]};
  --color-primary-100: ${colors.primary[100]};
  --color-primary-700: ${colors.primary[700]};
  --color-primary-800: ${colors.primary[800]};
  --color-primary-900: ${colors.primary[900]};

  /* Accent */
  --color-accent-50: ${colors.accent[50]};
  --color-accent-500: ${colors.accent[500]};
  --color-accent-600: ${colors.accent[600]};

  /* Neutral */
  --color-neutral-50: ${colors.neutral[50]};
  --color-neutral-100: ${colors.neutral[100]};
  --color-neutral-200: ${colors.neutral[200]};
  --color-neutral-300: ${colors.neutral[300]};
  --color-neutral-400: ${colors.neutral[400]};
  --color-neutral-500: ${colors.neutral[500]};
  --color-neutral-600: ${colors.neutral[600]};

  /* Success */
  --color-success-50: ${colors.success[50]};
  --color-success-500: ${colors.success[500]};

  /* Warning */
  --color-warning-50: ${colors.warning[50]};
  --color-warning-500: ${colors.warning[500]};

  /* Error */
  --color-error-50: ${colors.error[50]};
  --color-error-500: ${colors.error[500]};

  /* Base */
  --color-white: ${colors.white};
  --color-black: ${colors.black};
}
`;

export default colors;
