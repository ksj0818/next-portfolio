import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="body-font">
        <div>
          <div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
            <Link href="/">
              <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <span className="ml-3 text-xl font-bold">다음왕 포트폴리오</span>
              </a>
            </Link>
            <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">© 2023 다음왕 — @ nextking</p>
          </div>
        </div>
      </footer>
    </>
  );
}
