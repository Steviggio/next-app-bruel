import Link from "next/link";

const Header = () => {

  return (
    <>
      <section className="modal-management visible">
        <div id="modal" className="modal-btn">
          <img src="" alt="pen-to-square icon" />
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