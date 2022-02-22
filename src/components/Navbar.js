import React, { useRef, useState, useEffect } from "react";
import { FaSearch, FaMoon, FaBars } from "react-icons/fa";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef(null);
	const menuItemRef = useRef(null);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div>
			<header className="navbar">
				<div className="navbar-container">
					<form action="" className="search-box">
						<a href="" className="logo">
							<p>
								<h1>NEWS</h1>.com
							</p>
						</a>
						<div className="inputbox">
							<input type="input" className="search-input" />
							<button className="search-btn">
								<FaSearch />
							</button>
						</div>
					</form>
					<div className="option">
						<div className="option-btns">
							<button className="option-btn">
								<FaMoon />
							</button>
							<button className="option-btn">
								<FaBars />
								<span className="option-menu" ref={menuRef}>
									<div className="menu" ref={menuItemRef}>
										<a href="#" className="menu-item">
											Log-In
										</a>
										<a href="#" className="menu-item">
											Setting
										</a>
										<a href="#" className="menu-item">
											Privacy
										</a>
									</div>
								</span>
							</button>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
