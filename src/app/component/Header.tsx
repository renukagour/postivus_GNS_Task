import Link from "next/link";
// import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_937_42)">
                <path
                  d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_937_42">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="text-xl font-semibold">Positivus</h1>
          </div>
          <nav className="">
            <ul className="flex space-x-6  font-medium">
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/use-cases">Use Cases</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
   
              <li >
                <Link className="border rounded-lg p-2 border-gray-500" href="#">Request a Demo</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
