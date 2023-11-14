"use client";
import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import Image from 'next/image';
import NavbarLinks from "./NavbarLinks";
import "./navbar.css";

const Navbar = () => {

    const brandIconComponent = (
		<Link href="/">
			<Image src="/favicon_io/logo.png" width={48} height={48} alt="WF logo" />
		</Link>
	);

    return (
    <AppBar color="primary" className="app-bar">
        <Toolbar className='container container-fluid'>
            <div className="flex">
                {brandIconComponent}
            </div>
            <NavbarLinks />
        </Toolbar>
    </AppBar>
    );
}

export default Navbar;