import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <h1 className="pb-16 text-center">
        <p>
          <span>Copyright &copy; {new Date().getFullYear()} - </span>
          <Link href='/'> O Blog</Link>
        </p>
      </h1>
    </footer>
  )
}
