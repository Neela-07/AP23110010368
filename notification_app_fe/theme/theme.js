// Professional Theme Configuration
export const theme = {
  colors: {
    // Primary - Modern Purple/Indigo
    primary: '#667eea',
    primaryLight: '#f0f4ff',
    primaryDark: '#764ba2',
    primaryGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    
    // Secondary - Accent
    secondary: '#764ba2',
    secondaryLight: '#f3e8ff',
    
    // Status Colors
    success: '#10b981',
    successLight: '#ecfdf5',
    warning: '#f59e0b',
    warningLight: '#fffbeb',
    danger: '#ef4444',
    dangerLight: '#fef2f2',
    info: '#3b82f6',
    infoLight: '#eff6ff',
    
    // Neutral - Slate
    white: '#FFFFFF',
    black: '#000000',
    gray50: '#f8fafc',
    gray100: '#f1f5f9',
    gray200: '#e2e8f0',
    gray300: '#cbd5e1',
    gray400: '#94a3b8',
    gray500: '#64748b',
    gray600: '#475569',
    gray700: '#334155',
    gray800: '#1e293b',
    gray900: '#0f172a',
    
    // Notification Types
    placement: '#0369a1',
    placementLight: '#e0f2fe',
    result: '#7c3aed',
    resultLight: '#f3e8ff',
    event: '#dc2626',
    eventLight: '#fee2e2',
  },
  
  typography: {
    fontFamily: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
    
    heading1: {
      size: '44px',
      weight: 800,
      lineHeight: '1.1',
      letterSpacing: '-0.5px',
    },
    heading2: {
      size: '32px',
      weight: 700,
      lineHeight: '1.2',
    },
    heading3: {
      size: '24px',
      weight: 600,
      lineHeight: '1.3',
    },
    heading4: {
      size: '20px',
      weight: 600,
      lineHeight: '1.4',
    },
    body: {
      size: '16px',
      weight: 400,
      lineHeight: '1.6',
    },
    bodySmall: {
      size: '14px',
      weight: 400,
      lineHeight: '1.5',
    },
    label: {
      size: '12px',
      weight: 600,
      lineHeight: '1.4',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  
  border: {
    radius: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '20px',
      full: '9999px',
    },
    width: {
      thin: '1px',
      default: '2px',
      thick: '4px',
    },
  },
  
  shadow: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.05)',
    md: '0 10px 25px rgba(0, 0, 0, 0.08)',
    lg: '0 20px 50px rgba(0, 0, 0, 0.1)',
    xl: '0 25px 50px -12px rgba(102, 126, 234, 0.4)',
    hover: '0 12px 24px rgba(0, 0, 0, 0.12)',
  },
  
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    white: '#0f172a',
    black: '#f8fafc',
    gray50: '#1e293b',
    gray100: '#334155',
    gray200: '#475569',
    gray300: '#64748b',
    gray400: '#94a3b8',
    gray500: '#cbd5e1',
    gray600: '#e2e8f0',
    gray700: '#f1f5f9',
    gray800: '#f8fafc',
    gray900: '#ffffff',
  },
};
