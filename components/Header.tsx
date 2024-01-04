import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggler } from './ThemeToggler';
import SearchInput from './SearchInput';
import GenreDropdown from './GenreDropdown';

function Header() {
  return (
    <header className='fixed w-full z-20 top-0 flex items-center justify-between p-5
     bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
        <Link href="/" className='mr'>
          <Image
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
            alt="trakt logo"
            width={70}
            height={70}
            className='cursor-pointer'
          />
        </Link>

        <div>
          <div className='flex space-x-2'>
            <GenreDropdown />
            <SearchInput />
            <ThemeToggler />
          </div>
        </div>
    </header>
  )
}

export default Header
