import Brand from './IconName';
import WelcomeUser from './Greet';

function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Brand/>
          <WelcomeUser/>
        </div>
      </div>
    </header>
  );
}

export default Header;