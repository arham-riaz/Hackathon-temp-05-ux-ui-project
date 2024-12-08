import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white shadow-md">
      <div className="text-lg font-bold">Bandage</div>
      <nav>
        <ul className="hidden md:flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/product">Product</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="md:hidden"> {/* Hamburger menu for mobile */}
          {/* Add collapsible menu logic */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
