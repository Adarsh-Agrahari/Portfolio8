import React from "react";
import Head from "next/head";
import styles from "@/styles/Articles.module.css";
import Link from "next/link";

export default function Articles({ articles = [] }) {
	return (
		<div className={styles.articleContainer}>
			<Head>
				<title>Suprit Pattanayak</title>
				<meta
					name="description"
					content="Explore articles on topics like AI, cloud computing, ERP integration, and more. Authored by a seasoned professional with expertise in Oracle ERP and emerging technologies."
				/>
				<meta
					name="keywords"
					content="AI, Oracle ERP, Cloud Computing, Machine Learning, Big Data, Articles, Research"
				/>
				<meta name="author" content="Your Name" />
			</Head>
			<div className={styles.articleContent}>
				<h1>Articles</h1>
				<div className={styles.articlelist}>
					{articles.length > 0 ? (
						articles.map((item, index) => (
							<div className={styles.card} key={index}>
								<div className={styles.imageWrapper}>
									<img
										className={styles.cardImage}
										src={item.image}
										alt={`Article: ${item.title}`}
									/>
								</div>
								<div className={styles.cardText}>
									<p className={styles.title}>{item.title}</p>
									<div className={styles.linkBox}>
										<span>Read Article:</span>
										<Link
											href={item.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{item.link}
										</Link>
									</div>
									<p className={styles.year}>
										Year of publication: {item.year}
									</p>
								</div>
							</div>
						))
					) : (
						<p>No articles available at the moment.</p>
					)}
				</div>
			</div>
		</div>
	);
}
export async function getServerSideProps() {
	try {
		const articles = [
			{
				title: "Integrating edge computing with advanced cloud computing: A paradigm shift for IoT applications",
				link: "https://wjarr.com/sites/default/files/WJARR-2019-0036.pdf",
				year: "2019",
				image: "img/paper1.jpg",
			},
			{
				title: "Optimizing Database Replication Strategies through Machine Learning for Enhanced Fault Tolerance in Cloud-Based Environments",
				link: "https://revistadecineforum.com/index.php/cf/article/view/178/145",
				year: "2023",
				image: "img/paper2.jpg",
			},
			{
				title: "Cognitive Cloud Computing: Harnessing AI to Enable Proactive Fault Prediction and Resource Allocation in Complex Cloud Systems",
				link: "https://welltestingjournal.com/index.php/WT/article/view/112",
				year: "2022",
				image: "img/paper3.jpg",
			},
			{
				title: "Leveraging Generative AI for Automated Test Case Generation: A Framework for Enhanced Coverage and Defect Detection",
				link: "https://welltestingjournal.com/index.php/WT/article/view/110",
				year: "2023",
				image: "img/paper4.jpg",
			},
			{
				title: "Intelligent Data Replication Strategies: Using AI to Enhance Fault Tolerance and Performance in Multi-Node Database Systems",
				link: "https://welltestingjournal.com/index.php/WT/article/view/111",
				year: "2023",
				image: "img/paper5.jpg",
			},
			{
				title: "Artificial Intelligence for Self-Healing Automation Testing Frameworks: Real-Time Fault Prediction and Recovery",
				link: "https://revistadecineforum.com/index.php/cf/article/view/177/144",
				year: "2024",
				image: "img/paper6.jpg",
			},
			{
				title: "Measuring the Impact of DevOps Culture on Organizational Performance: An Empirical Study ",
				link: "https://tijer.org/tijer/papers/TIJER2008003.pdf",
				year: "2020",
				image: "img/paper7.jpg",
			},
			{
				title: "Incident Response in AWS: Developing a Framework for Effective Cybersecurity Management",
				link: "https://erpublications.com/uploaded_files/download/purushotham-reddy_trnul.pdf",
				year: "2021",
				image: "img/paper8.jpg",
			},
			{
				title: "AI-Driven Predictive Maintenance in IoT-Enabled Industrial Systems",
				link: "https://www.irejournals.com/formatedpaper/1701235.pdf",
				year: "2019",
				image: "img/paper9.jpg",
			},
			{
				title: "Scalable Machine Learning Models for IoT Data Analytics in Cloud Environments",
				link: "https://tijer.org/tijer/papers/TIJER2011003.pdf",
				year: "2020",
				image: "img/paper10.jpg",
			},
			{
				title: "Securing The Cloud: A Comprehensive Framework For Enhancing Cybersecurity In Cloud Computing Environments",
				link: "https://tijer.org/tijer/papers/TIJER2311126.pdf",
				year: "2023",
				image: "img/paper11.jpg",
			},
			{
				title: "Deep Learning Architectures For Enhanced Predictive Analytics: Innovations And Applications In Ai And Ml",
				link: "https://tijer.org/tijer/papers/TIJER2201004.pdf",
				year: "2022",
				image: "img/paper12.jpg",
			},
			{
				title: "AI and Edge Computing: Synergistic Approaches for Real-time Data Processing in Cloud Environments",
				link: "https://www.irejournals.com/formatedpaper/1704084.pdf",
				year: "2023",
				image: "img/paper13.jpg",
			},
			{
				title: "Serverless Computing: Optimizing Resource Utilization and Cost-Efficiency in Modern Cloud Architectures",
				link: "https://www.jetir.org/papers/JETIR2302608.pdf",
				year: "2023",
				image: "img/paper14.jpg",
			},
			{
				title: "The Role of AI in Continuous Integration and Continuous Deployment (CI/CD) Pipelines: Enhancing Performance and Reliability",
				link: "https://www.irjet.net/archives/V8/i10/IRJET-V8I10314.pdf",
				year: "2021",
				image: "img/paper15.jpg",
			},
		];
		return {
			props: { articles },
		};
	} catch (error) {
		console.error("Error fetching articles:", error);
		return {
			props: { articles: [] },
		};
	}
}
