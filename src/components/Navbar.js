import React, { useRef, useState, useEffect } from "react";
import { FaSearch, FaMoon, FaBars } from "react-icons/fa";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef(null);
	const menuItemRef = useRef(null);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	useEffect(() => {
		if (showMenu) {
			const menuHeight = menuItemRef.current.getBoundingClientRect().height;

			menuRef.current.style.height = `${menuHeight + 20}px`;
			menuRef.current.style.padding = "0";
			menuRef.current.style.boxShadow =
				"1px 1px 1px 1px rgb(0 0 0 / 20%),1px 1px 1px 1px rgb(0 0 0 / 20%)";
			menuRef.current.style.padding = "12px 0px";
		} else {
			menuRef.current.style.height = "0px";
			menuRef.current.style.padding = "0";
			menuRef.current.style.boxShadow = "0px 0px 0px 0px rgb(0 0 0 / 20%)";
			menuRef.current.style.overflow = "hidden";
		}
	}, [showMenu]);

	return (
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
						<button className="option-btn" onClick={toggleMenu}>
							<FaBars />
						</button>
					</div>
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
				</div>
			</div>
		</header>
	);
};

export default Navbar;
