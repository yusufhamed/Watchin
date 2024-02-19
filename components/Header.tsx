import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggler } from './ThemeToggler';
import SearchInput from './SearchInput';
import SigninButton from './SigninButton';
import GenreDropdown from './GenreDropdown';
import TrendingButton from './TrendingButton';

function Header() {
  return (
    <header className='fixed w-full z-50 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
        {/* Logo and Trending Button Container */}
        <div className='flex items-center space-x-2'>
          {/* Logo */}
          <Link href="/" className='mr'>
            <Image
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
              alt="trakt logo"
              width={70}
              height={70}
              className='cursor-pointer'
            />
          </Link>
          
          {/* Trending Button */}
          <TrendingButton />
        </div>

        {/* Other Header Components */}
        <div className='flex items-center space-x-2'>
          <GenreDropdown />
          <SearchInput />
          <SigninButton />
          <ThemeToggler />
        </div>
    </header>
  );
}

export default Header;
