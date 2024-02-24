// eslint-disable-next-line prettier/prettier
import headerNavLinks from '@/data/headerNavLinks';
import siteMetadata from '@/data/siteMetadata';

import Link from './Link';
import MobileNav from './MobileNav';
import SearchButton from './SearchButton';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-center">
            <div className="mr-3 flex items-center rounded bg-gray-900 dark:bg-white px-3 py-1">
              <span className="text-3xl font-bold text-white dark:text-gray-950">T</span>
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
