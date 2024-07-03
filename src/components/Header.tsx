export const Header = () => {
  return (
    <header className="px-10 py-5 flex items-center justify-between">
      <h1>Header</h1>

      <ul className="flex items-center gap-10">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </header>
  );
};
