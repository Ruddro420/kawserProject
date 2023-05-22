
const Footer = () => {
    return (
        <>
        <div style={{background:'black'}}>
            <footer style={{width:'1200px',margin:'auto'}} className="footer p-10 text-neutral-content">
                <div>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Locations</a>
                </div>
                <div>
                    <a className="link link-hover">Partners</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">FAQs</a>
                </div>
                <div>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
        </>
    );
};

export default Footer;