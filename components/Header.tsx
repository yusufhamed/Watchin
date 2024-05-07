import Link from 'next/link';
import Image from 'next/image';
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
              src="https://i.imgur.com/SN1DoJE.png"
              alt="trakt logo"
              width={90}
              height={90}
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
        </div>
    </header>
  );
}

export default Header;
