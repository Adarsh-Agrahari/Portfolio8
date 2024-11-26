import React from "react";
import styles from "../styles/QuickLinks.module.css";
import { FaLinkedin } from "react-icons/fa";
import { SiAcademia } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";
import Link from "next/link";

export const QuickLinks = () => {
	return (
		<div className={styles.quickLinks}>
			<h1>Quick Links</h1>
			<div>
				<li>
					<Link href="https://www.linkedin.com/in/purushotham-reddy-8aaa8b12">
						<FaLinkedin /> LinkedIn
					</Link>
				</li>
				<li>
					<Link href="https://scholar.google.com/citations?user=EaWd2X0AAAAJ&hl=en&authuser=2">
						<FaGoogleScholar /> Google Scholar
					</Link>
				</li>
			</div>
		</div>
	);
};
