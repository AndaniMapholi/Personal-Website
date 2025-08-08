import React from 'react';

interface IconProps {
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.62 1.62 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.96 3.36 4.64z"></path>
  </svg>
);

export const DocumentTextIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M3.75 4.5a.75.75 0 01.75-.75h9a.75.75 0 01.75.75v2.25c0 .414.336.75.75.75h2.25a.75.75 0 01.75.75v9.75a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V4.5zM15 5.636V4.5a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 001.5 4.5v15A2.25 2.25 0 003.75 21.75h12.5a2.25 2.25 0 002.25-2.25V9h-3.364A1.864 1.864 0 0115 7.136z" clipRule="evenodd" />
    </svg>
);

export const PresentationChartBarIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-2.12 3.18a.75.75 0 001.27.84l2.12-3.18H15.5l2.12 3.18a.75.75 0 001.27-.84l-2.12-3.18H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zM6.5 14.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0-2.5a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm0-2.5a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zM15 14.25a.75.75 0 01.75-.75h1.75a.75.75 0 010 1.5H15.75a.75.75 0 01-.75-.75zm.75-3.25a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM15 8.25a.75.75 0 01.75-.75h1.75a.75.75 0 010 1.5H15.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

export const XMarkIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5a.75.75 0 00-1.5 0v8.25a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V8.25a.75.75 0 01.75-.75h8.25a.75.75 0 000-1.5z" />
        <path d="M10.5 3a.75.75 0 000 1.5h4.19l-8.47 8.47a.75.75 0 001.06 1.06l8.47-8.47v4.19a.75.75 0 001.5 0V3h-6z" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.435A12.001 12.001 0 018.685 21.75a.75.75 0 01-.75-.75c0-5.056 2.383-9.555 6.084-12.435a12.006 12.006 0 01-4.704-5.986z" clipRule="evenodd" />
        <path d="M11.25 11.25a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM1.5 1.5a.75.75 0 00-.75.75V3a.75.75 0 00.75.75h1.5A.75.75 0 003.75 3V1.5A.75.75 0 003 1.5H1.5zM1.5 21a.75.75 0 00-.75.75v1.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75V21a.75.75 0 00-.75-.75H1.5z" />
    </svg>
);

export const PaperAirplaneIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
);

export const ChatBubbleLeftEllipsisIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.75 6.75 0 006.75-6.75v-2.5a.75.75 0 011.5 0v2.5a8.25 8.25 0 01-8.25 8.25c-1.376 0-2.674-.343-3.844-.952l.646.646a.75.75 0 01-1.06 1.06l-1.72-1.72a.75.75 0 010-1.06l1.72-1.72a.75.75 0 111.06 1.06l-.646.646z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M6.75 2.25A6.75 6.75 0 000 9v6a.75.75 0 001.5 0V9a5.25 5.25 0 015.25-5.25H15a5.25 5.25 0 015.25 5.25v6a5.25 5.25 0 01-5.25 5.25h-2.5a.75.75 0 000 1.5h2.5A6.75 6.75 0 0021.75 15V9A6.75 6.75 0 0015 2.25H6.75zM7.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm3.75 1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
  </svg>
);
