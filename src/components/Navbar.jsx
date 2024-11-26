import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Link href="/">SKP</Link>
			</div>
			<div className={`${styles.navLinks} ${isMenuOpen ? styles.hideLinks : ""}`}>
				<Link href="/">Home</Link>
				<Link href="/articles">Articles</Link>
				<Link href="/about">About</Link>
				<Link href="/">Award</Link>
				<Link href="/books">Books Authored</Link>
				<Link href="/news">News</Link>
			</div>
			<div className={styles.menuIcon} onClick={toggleMenu}>
				{isMenuOpen ? <RxCross1 /> : <GiHamburgerMenu />}
			</div>
			{isMenuOpen && (
				<div className={styles.mobileMenu}>
					<Link href="/" onClick={toggleMenu}>Home</Link>
					<Link href="/articles" onClick={toggleMenu}>Articles</Link>
					<Link href="/about" onClick={toggleMenu}>About</Link>
					<Link href="/" onClick={toggleMenu}>Award</Link>
					<Link href="/books" onClick={toggleMenu}>Books Authored</Link>
					<Link href="/news" onClick={toggleMenu}>News</Link>
				</div>
			)}
		</nav>
	);
}
