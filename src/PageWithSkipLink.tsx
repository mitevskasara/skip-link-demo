const PageWithSkipLink = () => {
  const sidebarLinks = [
    'Dashboard',
    'User Profile',
    'Content Manager',
    'Analytics & Reports',
    'Settings',
    'Notifications (5)',
    'Help Center',
    'Log Out',
  ];

  const skipLinkStyles = `
    .skip-link-custom {
      /* 1. Visually hide off-screen */
      position: absolute;
      left: 0;
      top: -999px; 
      z-index: 1000;
      transition: top 0.2s ease-in-out;
    }

    .skip-link-custom:focus {
      /* 2. Bring into view when focused */
      top: 0;
      outline: none; 
      box-shadow: 0 0 0 4px #10b981; /* Emerald color focus ring */
    }

    /* Utility to make the layout clearly defined */
    .sticky-header {
      position: sticky;
      top: 0;
      z-index: 50;
    }
  `;

  const mainContentLorem = `
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?

    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecat cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
  `;

  return (
    <>
      <style>{skipLinkStyles}</style>

      <a
        href="#main-content"
        className="skip-link-custom inline-block bg-white p-3 text-lg font-semibold text-emerald-600 border-b-4 border-emerald-500 rounded-b-lg shadow-xl"
      >
        Skip to main content
      </a>

      <header className="sticky-header bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Skip Link Demo Application (React)
          </h1>
          <nav className="space-x-4 hidden md:block">
            {['Home', 'Products', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href="/"
                className="text-sm font-medium text-gray-600 hover:text-emerald-600 p-2 rounded-md transition duration-150"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[100vh]">
        <aside className="col-span-1 bg-white p-6 rounded-xl shadow-lg h-fit">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-emerald-600">
            Site Navigation
          </h2>

          <nav aria-label="Sidebar Links" className="space-y-3">
            {sidebarLinks.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`block p-2 rounded-lg text-gray-700 hover:bg-emerald-50 transition duration-150 ${
                  item === 'Content Manager'
                    ? 'bg-emerald-100 text-emerald-700 font-medium'
                    : ''
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-6 p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-lg">
            <p className="text-sm font-medium text-emerald-800">
              New Feature Alert!
            </p>
            <p className="text-xs text-emerald-600 mt-1">
              Check out our new real-time data streaming service.{' '}
              <a href="#" className="underline font-bold">
                Learn more.
              </a>
            </p>
          </div>

          <div className="mt-6 space-y-2 text-sm">
            <h3 className="font-semibold text-gray-600">Related Tools</h3>
            <a href="#" className="block text-gray-500 hover:text-emerald-600">
              Tool A Link
            </a>
            <a href="#" className="block text-gray-500 hover:text-emerald-600">
              Tool B Link
            </a>
            <a href="#" className="block text-gray-500 hover:text-emerald-600">
              Tool C Link
            </a>
          </div>
        </aside>

        <main
          id="main-content"
          tabIndex={-1}
          className="col-span-1 md:col-span-3 bg-white p-8 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Main Content Area: Focus Destination
          </h2>
          <p className="text-lg text-emerald-600 mb-6 border-b pb-4">
            This is where the keyboard focus lands after activating the "Skip to
            main content" link. A visible focus ring has been added to this main
            section via the CSS ':focus' state (achieved with Tailwind classes
            on the element itself) to confirm the focus transfer.
          </p>

          <article className="space-y-6 text-gray-600">
            <h3 className="text-xl font-semibold text-gray-700">
              Section 1: The Context of Digital Inclusion
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h3 className="text-xl font-semibold text-gray-700">
              Section 2: Architecture and User Experience
            </h3>
            <p>{mainContentLorem}</p>

            <h3 className="text-xl font-semibold text-gray-700">
              Section 3: Practical Implementation in React
            </h3>
            <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur? At vero eos et accusamus et
              iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecat cupiditate non provident, similique sunt
              in culpa qui officia deserunt mollitia animi, id est laborum et
              dolorum fuga. Et harum quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est eligendi
              optio cumque nihil impedit quo minus id quod maxime placeat facere
              possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
          </article>
        </main>
      </div>

      <footer className="mt-12 py-6 text-center text-gray-500 border-t">
        <p>
          &copy; 2025 Accessibility Demo. Built with React and Tailwind CSS.
        </p>
      </footer>
    </>
  );
};

export default PageWithSkipLink;
