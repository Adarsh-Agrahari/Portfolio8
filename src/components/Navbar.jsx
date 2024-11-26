import { useState, useRef } from "react";
import styles from "@/styles/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);

	const handleHamburgerClick = (event) => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Link href="/">PR</Link>
			</div>
			<div className={styles.navLinks}>
				<Link href="/"> Home </Link>
				<Link href="/articles"> Articles </Link>
				<Link href="/about"> About </Link>
				<Link href="/"> Award </Link>
				<Link href="/books"> Books Authored </Link>
				<Link href="/news"> News </Link>
			</div>
			{isMenuOpen ? (
				<RxCross1
					className={styles.menuIcon}
					onClick={handleHamburgerClick}
				/>
			) : (
				<GiHamburgerMenu
					className={styles.menuIcon}
					onClick={handleHamburgerClick}
				/>
			)}
			{isMenuOpen && (
				<div ref={menuRef} className={styles.menu}>
					<Link href="/"> Home </Link>
					<Link href="/articles"> Articles </Link>
					<Link href="/about"> About </Link>
					<Link href="/"> Award </Link>
					<Link href="/books"> Books Authored </Link>
					<Link href="/news"> News </Link>
				</div>
			)}
		</nav>
	);
}
