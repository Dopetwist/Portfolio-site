

function Footer() {
    return (
        <footer id="footer">
            <p> &copy; 2025, Jonathan Afugwobi | All rights reserved. </p>

            <div className="socials">
                
                <a href="www.linkedin.com/in/jonathan-afugwobi-b960a0264" className="linkedin"> 
                    <div className="social-con">
                        <img src="/images/socials/linkedin.png" alt="LinkedIn Image" />
                    </div>
                </a>
            
                <a href="https://github.com/Dopetwist" className="github"> 
                    <div className="social-con">
                        <img src="/images/socials/github.jpg" alt="GitHub Image" />
                    </div>
                </a>

                <a href="https://www.instagram.com/dopetwist001" className="instagram"> 
                    <div className="social-con">
                        <img src="/images/socials/instagram.jpeg" alt="Instagram Image" />
                    </div>
                </a>

                <a href="https://x.com/dopetwist001" className="X"> 
                    <div className="social-con">
                        <img src="/images/socials/X.jpg" alt="X Image" />
                    </div>
                </a>
            </div>
        </footer>
    )
}

export default Footer;