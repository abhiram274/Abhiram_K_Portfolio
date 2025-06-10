
import { Moon, Sun, Snowflake } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-gradient-to-r from-cyan-100/20 to-blue-100/20 hover:from-cyan-200/30 hover:to-blue-200/30 border border-cyan-200/30 backdrop-blur-sm transition-all duration-300 hover:scale-110"
    >
      <div className="relative">
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 text-amber-400 animate-pulse" />
        ) : (
          <Moon className="h-5 w-5 text-slate-600" />
        )}
        <Snowflake 
          className={`absolute -top-1 -right-1 h-3 w-3 text-cyan-400 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-100 animate-spin' : 'opacity-0'
          }`} 
        />
      </div>
    </Button>
  );
};

export default ThemeToggle;
