import React from "react";
import styles from "@/styles/Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { SiAcademia } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logoSection}>
					<h1 className={styles.logo}>Suprit Pattanayak</h1>
					<p className={styles.tagline}>
						Transformational Leader | Expert in Retail Banking,
						Mortgage Solutions & Operational Risk | SAFe® Certified
						Agile Practitioner | Driving Growth & Innovation
					</p>
				</div>
				<div className={styles.socialSection}>
					<h3 className={styles.heading}>Follow Me</h3>
					<div className={styles.socialIcons}>
						<Link href="https://www.linkedin.com/in/purushotham-reddy-8aaa8b12">
							<FaLinkedin /> LinkedIn
						</Link>
						<Link href="https://scholar.google.com/citations?user=EaWd2X0AAAAJ&hl=en&authuser=2">
							<FaGoogleScholar /> Google Scholar
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.footerBottom}>
				<p>
					&copy; {new Date().getFullYear()} Suprit Pattanayak. All
					Rights Reserved.
				</p>
			</div>
		</footer>
	);
};
