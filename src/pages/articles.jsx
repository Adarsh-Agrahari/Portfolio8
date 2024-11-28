import React from "react";
import Head from "next/head";
import styles from "@/styles/Articles.module.css";
import Link from "next/link";

export default function Articles({ articles = [] }) {
	return (
		<div className={styles.articleContainer}>
			<Head>
				<title>Suprit Pattanayak</title>
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
				title: "Transforming business consulting through generative AI: A framework for enhanced strategic decision-making and value creation",
				link: "https://wjarr.com/sites/default/files/WJARR-2019-0031.pdf",
				year: "2019",
				image: "img/paper/paper1.jpg",
			},
			{
				title: "Generative AI in Business Consulting: Analyzing its Impact on Client Engagement and Service Delivery Models",
				link: "https://erpublications.com/uploaded_files/download/suprit-kumar-pattanayak_UjLaB.pdf",
				year: "2020",
				image: "img/paper/paper2.jpg",
			},
			{
				title: "Leveraging Generative AI for Enhanced Market Analysis: A New Paradigm for Business Consulting",
				link: "https://www.ijaresm.com/uploaded_files/document_file/Suprit_Kumar_PattanayakdMFg.pdf",
				year: "2021",
				image: "img/paper/paper3.jpg",
			},
			{
				title: "Navigating Ethical Challenges in Business Consulting with Generative AI: Balancing Innovation and Responsibility",
				link: "https://erpublications.com/uploaded_files/download/suprit-kumar-pattanayak_YBJGu.pdf",
				year: "2021",
				image: "img/paper/paper4.jpg",
			},
			{
				title: "The Impact of Artificial Intelligence on Operational Efficiency in Banking: A Comprehensive Analysis of Automation and Process Optimization",
				link: "https://www.irjet.net/archives/V8/i10/IRJET-V8I10315.pdf",
				year: "2021",
				image: "img/paper/paper5.jpg",
			},
			{
				title: "Generative AI for Market Analysis in Business Consulting: Revolutionizing Data Insights and Competitive Intelligence",
				link: "https://www.erpublications.com/uploaded_files/download/suprit-kumar-pattanayak_cFzEy.pdf",
				year: "2022",
				image: "img/paper/paper6.jpg",
			},
			{
				title: "The Impact of Generative AI on Business Consulting Engagements: A New Paradigm for Client Interaction and Value Creation",
				link: "https://www.ijaresm.com/uploaded_files/document_file/Suprit_Kumar_Pattanayak,jcsC.pdf",
				year: "2023",
				image: "img/paper/paper7.jpg",
			},
			{
				title: "Integrating AI into DevOps pipelines: Continuous integration, continuous delivery, and automation in infrastructural management: Projections for future",
				link: "https://ijsra.net/sites/default/files/IJSRA-2024-1838.pdf",
				year: "2024",
				image: "img/paper/paper8.jpg",
			},
			{
				title: "Leveraging machine learning for intelligent test automation: Enhancing efficiency and accuracy in software testing",
				link: "https://ijsra.net/sites/default/files/IJSRA-2021-0027.pdf",
				year: "2021",
				image: "img/paper/paper9.jpg",
			},
			{
				title: "AI-Driven Innovations in Cloud Computing: Transforming Scalability, Resource Management, and Predictive Analytics in Distributed Systems",
				link: "https://www.irjmets.com/uploadedfiles/paper//issue_12_december_2023/47900/final/fin_irjmets1728654918.pdf",
				year: "2023",
				image: "img/paper/paper10.jpg",
			},
			{
				title: "Artificial Intelligence for Self-Healing Automation Testing Frameworks: Real-Time Fault Prediction and Recovery",
				link: "https://revistadecineforum.com/index.php/cf/article/view/177/144",
				year: "2024",
				image: "img/paper/paper11.jpg",
			},
			{
				title: "Transfer Learning in Natural Language Processing: Overcoming Low-Resource Challenges",
				link: "https://erpublications.com/uploaded_files/download/thejaswi-adimulam-swetha-chinta-suprit-kumar-pattanayak_ImVmG.pdf",
				year: "2022",
				image: "img/paper/paper12.jpg",
			},
			{
				title: "Federated Learning for Privacy-Preserving AML in Multi-Bank Collaborations",
				link: "https://tijer.org/tijer/papers/TIJER2311128.pdf",
				year: "2023",
				image: "img/paper/paper13.jpg",
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
