import clsx from "clsx";
import Link from "next/link";
import { cookies } from "next/headers";
import Image from "next/image";

const Header = () => {
  const cookieStore = cookies();
  const userData = cookieStore.get("userData")
  return (
    <>

      <section className={clsx(
        "modal-management visible",
        {
          "invisible": !userData
        }
      )}>
        <div id="modal" className="modal-btn">
          <Image 
          src="/icons/pen-to-square-white.png" 
          alt="pen-to-square icon"
          width={15}
          height={15}
          />
          <p>Mode édition</p>
          <button className="btn-modal">publier les changements</button>
        </div>
      </section>
      <header className="flex justify-between">
        <Link href="/"><h1>Sophie Bluel <span>Architecte d'intérieur</span></h1></Link>
        <nav>
          <ul className="links-nav">
            <li>Projets</li>
            <li>Contact</li>
            <li><Link href="/login" >Login</Link></li>
            <li><img src="" alt="Instagram" /></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;