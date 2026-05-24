import React from "react";

export default function ThemeScript() {
  const code = `
    (function() {
      try {
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('theme-dark');
          document.documentElement.classList.remove('theme-light');
        } else {
          document.documentElement.classList.add('theme-light');
          document.documentElement.classList.remove('theme-dark');
        }
      } catch (e) {
        console.error('ThemeScript failed to initialize theme:', e);
      }
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
