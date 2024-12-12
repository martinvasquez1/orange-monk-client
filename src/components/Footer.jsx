export default function Footer() {
  return (
    <footer className="footer footer-center rounded bg-base-200/70 p-10 text-base-content">
      <aside className="flex flex-col gap-1">
        <p>
          Copyright © {new Date().getFullYear()} - All the cool stuff here is
          ours!
        </p>
        <p>
          Just kidding, it’s all free! Source code is available
          <a
            className="link-hover link"
            href="https://github.com/martinvasquez1/orange-monk-client"
          >
            {' '}
            here.
          </a>
        </p>
      </aside>
    </footer>
  );
}
