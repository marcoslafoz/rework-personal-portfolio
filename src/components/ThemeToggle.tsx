import React from 'react'

type Theme = 'light' | 'dark'

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = React.useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light'

    return (
      (localStorage.getItem('theme') as Theme) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? '  ' : 'light')
    )
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'))

  return (
    <button onClick={toggleTheme} className="text-xl">
      {theme !== 'light' ? '☀️' : '🌙'}
    </button>
  )
}
