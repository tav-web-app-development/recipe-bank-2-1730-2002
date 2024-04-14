function Navbar() {
  return (
    <>
      <div className="navbar">
        <h1>Recipe App</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
                End of the page
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;