

function Contact() {
    return (
        <section id="contact">
            <h2 className="heading"> Get in Touch </h2>
            <div className="gen-con">
                <div className="form">
                    <h2> Send me a Message </h2>
                    <form action="#">
                        <input type="text" placeholder="Name" required/>
                        <input type="email" placeholder="Email" required/>
                        <textarea name="message" id="msg" placeholder="Write a Message..." rows={10} required></textarea>

                        <button type="submit" id="submit-btn"> Send Message <i class='bxr  bx-send' id="btn-arrow"></i> </button>
                    </form>
                </div>

                <div className="info">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nam provident ab nesciunt consectetur numquam veritatis quisquam, laboriosam quidem nulla.</p>
                </div>
            </div>
        </section>
    )
}

export default Contact;