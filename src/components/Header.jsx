function Header() {
    return (
        <header>
            <nav
                className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
                data-te-navbar-ref>
            </nav>
            <div
                className="px-6 py-20 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200
                bg-gradient-to-r from-yellow-500 via-yellow-100 to-yellow-600">
                <h1 className="mb-6 md:text-8xl text-5xl font-bold text-gray-600 uppercase">Industrial Grade Websites</h1>
            </div>
        </header>
    )
}

export default Header;
