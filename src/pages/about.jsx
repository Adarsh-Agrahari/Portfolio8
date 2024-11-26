import React from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { QuickLinks } from "@/components/QuickLinks";

export default function About({ aboutData = [] }) {
	return (
		<div className={styles.aboutContainer}>
			<Head>
				<title>Suprit Pattanayak</title>
				<meta name="author" content="Suprit Pattanayak" />
			</Head>
			<div className={styles.aboutContent}>
				<h1>About Me</h1>
				<div className={styles.aboutBody}>
					{aboutData.length > 0 ? (
						aboutData.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))
					) : (
						<p>No information available at the moment.</p>
					)}
				</div>
			</div>
			<div className={styles.sidebar}>
				<QuickLinks />
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const aboutData = [
			"Hello, I'm Suprit Kumar Pattanayak, a dynamic and solutions-driven professional with extensive experience in driving transformative change and operational excellence across diverse industries. Currently based in Dallas, TX, I have a proven track record in managing large-scale, value-adding programs that foster global growth and competitive advantage.",
			"My expertise lies in bridging the gap between technology and business processes, ensuring seamless project delivery in domains like retail banking, mortgage solutions, and operational risk management. With over a decade of experience working with top-tier organizations like Wipro, Cognizant, and Mphasis, I've honed my skills in program management, business analysis, and workflow optimization.",
			"I specialize in implementing complex assessments, crafting strategic roadmaps, and integrating innovative technology solutions. Whether leading cross-functional teams or managing vendor relationships, I bring clarity, strategic focus, and agile methodology to every project. My certifications, including SAFe® Product Owner/Product Manager and Scrum Master, underpin my commitment to excellence and adaptability.",
			"Recognized with accolades such as the Customer Focus Award and Consulting Excellence Award, I pride myself on consistently delivering results that exceed expectations.",
			"When I'm not driving innovation in the tech world, I enjoy mentoring teams, exploring cutting-edge methodologies, and staying ahead of industry trends.",
		];

		return {
			props: { aboutData },
		};
	} catch (error) {
		console.error("Error fetching about data:", error);
		return {
			props: { aboutData: [] },
		};
	}
}
