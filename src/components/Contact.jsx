
import { useState } from "react";


function Contact() {
    const [ status, setStatus ] = useState("");
    // const [ formInfo, setForm ] = useState({formData});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        }

        try {
            const statusElement = document.getElementById("status");

            const res = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success) {
                setStatus("Message sent Successfully! ✅");
                statusElement.style.color = "#008000";
            } else {
                console.error("❌ Server error:", data.error);
                setStatus("❌ " + data.error);
                statusElement.style.color = "#ff0000";
            }
        } catch (error) {
            setStatus("An error occurred!");
            statusElement.style.color = "#ff0000";
        }
    }


    return (
        <section id="contact">
            <h2 className="heading" id="get-in-touch"> Get in Touch </h2>
            <p className="together"><i class='bxr  bx-arrow-right'  ></i> Let's work together to bring your amazing ideas to life!<i class='bxr  bx-arrow-left'  ></i> </p>

            <div className="gen-con">
                <div className="form">
                    <h2> Send me a Message </h2>
                    <p className="respond"> I respond as soon as possible. </p>

                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <textarea name="message" id="msg" placeholder="Write a Message..." rows={7} required></textarea>

                        <button type="submit" id="submit-btn"> Send Message <i class='bxr  bx-send' id="btn-arrow"></i> </button>

                        <p id="status"> {status} </p>
                    </form>
                </div>

                <div className="info">
                    <h2> Contact Information </h2>
                    <p className="reach"> You could reach me through these channels </p>

                    <div className="contact-details">
                        <div className="email">
                            <p className="p-icon"><i class='bxr  bx-envelope-alt'  ></i>  Email: </p>
                            <p className="p-color"> jonathanafugwobi1@gmail.com </p>
                        </div>

                        <div className="phone">
                            <p className="p-icon"><i class='bxr  bx-phone'  ></i>  Phone: </p>
                            <p className="p-color"> +234-805-858-6681 </p>
                        </div>

                        <div className="address">
                            <p className="p-icon"><i class='bxr  bx-location-alt-2'  ></i>  Address: </p>
                            <p className="p-color"> Abuja, Nigeria. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;