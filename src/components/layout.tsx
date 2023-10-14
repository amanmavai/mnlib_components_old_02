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

export function Header() {
  return (
    <header className="bg-gray-800 p-4 h-20 flex justify-between">
      {/* <!-- Header content --> */}
      <div>Logo</div>
      <div className="flex items-center gap-2">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
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
