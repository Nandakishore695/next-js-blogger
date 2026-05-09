import React from 'react'
import { assets } from '../../../../assets/assets';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const { logo_light, facebook_icon, twitter_icon, googleplus_icon } = assets;

    return (
        <div className="bg-dark">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3">
                <Link href="/"><Image src={logo_light} alt="logs" /></Link>
                <div className="col-md-8 d-flex align-items-center justify-content-center mt-3 mb-md-0  text-white">
                    <p>All right reserved. Copyright @blogger</p>
                </div>
                <ul className="nav col-md-2 justify-content-end">
                    <li className="nav-item">
                        <Image src={facebook_icon} alt='logs' />
                    </li>
                    <li className="nav-item">
                        <Image src={twitter_icon} alt='logs' />
                    </li>
                    <li className="nav-item">
                        <Image src={googleplus_icon} alt='logs' />
                    </li>
                </ul>
            </footer>
        </div>
    )
}
