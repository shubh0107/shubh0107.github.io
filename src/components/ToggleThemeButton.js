import { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { HiSun, HiMoon } from 'react-icons/hi';

const ToggleThemeButton = props => {
  const [currentTheme, setCurrentTheme] = useLocalStorage('shubh0107-theme', () => {
    if (!('shubh0107-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  });

  useEffect(() => {
    if (currentTheme === 'light') {
      document.querySelector('html').classList.remove('dark');
    } else if (currentTheme === 'dark' || (!('shubh0107-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add('dark');
    }
  }, [currentTheme]);

  return (
    <span {...props}>
      <button
        title={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
        className="p-2 bg-black dark:bg-gray-200 rounded-md border dark:border-black focus:outline-none"
        onClick={e => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
      >
        {currentTheme === 'dark' ? <HiSun className="h-6 w-6 text-yellow-600" /> : <HiMoon className="h-6 w-6 text-white" />}
      </button>
    </span>
  )
}

export default ToggleThemeButton;