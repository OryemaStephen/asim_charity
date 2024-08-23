import React from 'react';
import FooterTitle from './FooterTitle';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="py-4 text-white bg-gray-700">
            <FooterTitle />
            <div className="container px-3 text-center md:px-20">
                <span className="mr-2">Copyright</span>
                <span className="mr-2">&copy;{year}</span>
                <span className="mr-2">All rights reserved</span>
                <span className="mr-2">Made with ❤️ by</span>
                <a 
                    href="https://oryemasteph.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#F7CA44] hover:underline"
                >
                    Stephen
                </a>
            </div>
        </footer>
    );
};

export default Footer;
