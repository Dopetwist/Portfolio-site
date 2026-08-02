import { HashLink } from "react-router-hash-link";

function Footer({ lightTheme, setLightTheme }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo-container">
                        <div className="name-logo">
                            <figure>
                                <img src={lightTheme ? "/JA-Logo2.png" : "/JA-Logo.png"} alt="Jonathan's Logo" />
                            </figure>
                            <h2> Jonathan Afugwobi </h2>
                        </div>

                        <div className="footer-descrip">
                            <p>
                                A passionate software engineer dedicated to crafting seamless and engaging digital experiences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-services">
                    <h2>Services</h2>
                    <ul>
                        <li>
                            Backend Development
                        </li>
                        <li>
                            Website Maintenance & Support
                        </li>
                        <li>
                            Frontend Development
                        </li>
                        <li>
                            API Integrations
                        </li>
                        <li>
                            Database Optimization
                        </li>
                        <li>
                            Graphic Design
                        </li>
                    </ul>
                </div>

                <div className="quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>
                            <HashLink smooth to="/#home" className="footer-link"> Home </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/#about" className="footer-link"> About </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/#project" className="footer-link"> Projects </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/#contact" className="footer-link"> Contact </HashLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="copyright-container">
                <p className="footer-email">
                    <span>Email:</span> jonathanafugwobi1@gmail.com
                </p>

                <div className="copyright-box">
                    <p className="copyright"> &copy; {currentYear}, Jonathan Afugwobi. All rights reserved. </p>

                    <div className="socials">
                        <a href="https://www.linkedin.com/in/jonathan-afugwobi-b960a0264" className="linkedin" target="blank"> 
                            <div className="social-con">
                                <img src="/images/socials/linkedin.png" alt="LinkedIn Image" />
                            </div>
                        </a>
                    
                        <a href="https://github.com/Dopetwist" className="github" target="blank"> 
                            <div className="social-con">
                                <img src="/images/socials/github.jpg" alt="GitHub Image" />
                            </div>
                        </a>

                        <a href="https://www.instagram.com/dopetwist001" className="instagram" target="blank"> 
                            <div className="social-con">
                                <img src="/images/socials/instagram.jpeg" alt="Instagram Image" />
                            </div>
                        </a>

                        <a href="https://x.com/dopetwist001" className="X" target="blank"> 
                            <div className="social-con">
                                <img src="/images/socials/X.jpg" alt="X Image" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;