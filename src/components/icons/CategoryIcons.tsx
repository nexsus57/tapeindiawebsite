type IconProps = {
  className?: string;
};

export const PackageIcon = (props: IconProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16.5 9.4a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z" />
    <path d="M16.5 9.4L21 12l-4.5 2.6" />
    <path d="M7.5 9.4L3 12l4.5 2.6" />
    <path d="m12 14.6 4.5 2.6-4.5 2.6-4.5-2.6L12 14.6z" />
    <path d="M3 12v5.4" />
    <path d="M21 12v5.4" />
  </svg>
);

export const ZapIcon = (props: IconProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const LayersIcon = (props: IconProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

export const ShieldCheckIcon = (props: IconProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const SparklesIcon = (props: IconProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.5 3-3 1.5 3 1.5 1.5 3 1.5-3 3-1.5-3-1.5z" />
    <path d="M3 12l1.5-3 3-1.5-3-1.5-1.5-3-1.5 3-3 1.5 3 1.5z" />
    <path d="m21 12-1.5 3-3 1.5 3 1.5 1.5 3 1.5-3 3-1.5-3-1.5z" />
  </svg>
);

export const ScissorsIcon = (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
        <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
        <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
    </svg>
);

export const TapeIcon = (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4.02V2.13c0-.66.84-1.12 1.4-.8L18.6 8.2c.57.32.57 1.28 0 1.6L5.4 16.68c-.56.32-1.4-.15-1.4-.8V14.01"/>
        <path d="M16 8.28v7.43"/>
        <path d="M16 15.71c-3.33 0-6.67-1.19-10-3.57"/>
        <path d="M4 14.01s-1.5 1.5-1.5 3.5c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4v-7.5"/>
    </svg>
);
