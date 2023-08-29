const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src="../assets/linkedin.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="twitter-link" src="../assets/twitter.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.facebook.com/ariana.rasteh.3"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="facebook-link" src="../assets/facebook.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://instagram.com/real_aryana?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" src="../assets/instagram.png" />
            </a>
        </div>
    );
};

export default SocialMediaIcons;