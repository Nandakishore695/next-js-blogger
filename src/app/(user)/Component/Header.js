'use client'
import Image from "next/image";
import React from "react";
import { assets } from "../../../../assets/assets";
import Link from "next/link";

const Header = () => {
  const { logo, arrow } = assets;

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <Image src={logo} alt="logo-blogger" />
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link href="/admin-dashboard/addblogs" className="nav-link shadow p-2 text-decoration-none text-black rounded border border-dark " aria-current="page">
              Admin Dashboard
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default Header;