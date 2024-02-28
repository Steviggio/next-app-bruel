const Contact = () => {
  return (
    <>
      <section id="contact">
        <h2>Contact</h2>
        <p>Vous avez un projet ? Discutons-en !</p>
        <form action="#" method="post">
          <label className="flex flex-col gap-2" htmlFor="name">Nom
            <input className="focus:outline-none" type="text" name="name" id="name" />
          </label>

          <label className="flex flex-col gap-2" htmlFor="email">Email
            <input className="focus:outline-none" type="email" name="email" id="email" />
          </label>

          <label className="flex flex-col gap-2" htmlFor="message">Message
            <textarea className="focus:outline-none" name="message" id="message" cols={30} rows={10}></textarea>
          </label>

          <input type="submit" value="Envoyer" />
        </form>
      </section>
    </>
  )
}

export default Contact;