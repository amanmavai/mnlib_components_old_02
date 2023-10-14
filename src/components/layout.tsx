import * as React from "react";

export interface LayoutProps {
  children: React.ReactNode;
  header: React.JSX.Element;
  footer: React.JSX.Element;
}

export function Layout({children, header, footer}: LayoutProps) {
  return (
    <div className="flex min-h-full flex-col">
      {header}

      <main className="flex-1">
        {/* <!-- Main content --> */}
        {children}
      </main>

      {footer}
    </div>
  );
}

export type HeaderProps = {
  navItems?: React.JSX.Element[];
};
export function Header({navItems = []}: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="bg-gray-800 p-4 h-20">
      {/* <!-- Header content --> */}
      <nav className="">
        <div className="container mx-auto flex justify-between">
          <div className="flex">
            <span className="text-white font-bold">Logo</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex">{navItems}</div>
          {/* Mobile View */}
          <div className="md:hidden">
            {/* Hamburger Menu */}
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  // 'X' icon for close
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger icon
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && <div className="md:hidden">{navItems}</div>}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="h-20 bg-gray-400">
      {/* <!-- Footer content --> */}
      <p className="flex items-center justify-center text-sm font-light tracking-widest">
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved by Aman
      </p>
    </footer>
  );
}
