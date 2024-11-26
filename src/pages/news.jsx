import React from "react";
import Head from "next/head";
import styles from "@/styles/News.module.css";
import Link from "next/link";

export default function News({ articles = [] }) {
	return (
		<div className={styles.newsContainer}>
			<Head>
				<title>Suprit Pattanayak - News</title>
				<meta
					name="description"
					content="Stay updated with the latest news and insights from Suprit Pattanayak on AI, business intelligence, and more."
				/>
				<meta
					name="keywords"
					content="News, AI, Business Intelligence, Technology Insights, Industry Updates"
				/>
				<meta name="author" content="Your Name" />
			</Head>
			<div className={styles.newsContent}>
				<h1 className={styles.heading}>Latest News</h1>
				<div className={styles.newsList}>
					{articles.length > 0 ? (
						articles.map((article, index) => (
							<div className={styles.newsItem} key={index}>
								<Link
									href={article.link}
									className={styles.newsLink}
                  target="_blank"
								>
									<img
										src={article.image}
										alt={article.title}
										className={styles.newsImage}
									/>
								</Link>
								<h5 className={styles.newsTitle}>
									{article.title}
								</h5>
							</div>
						))
					) : (
						<p>No news available at the moment.</p>
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
				title: "AI Unlocked: Suprit Pattanayak’s published guide to transforming fintech with AI and cloud computing",
				link: "https://www.digitaljournal.com/tech-science/ai-unlocked-purushotham-reddys-published-guide-to-transforming-fintech-with-ai-and-cloud-computing/article",
				image: "img/news.jpg",
			},
		];

		return {
			props: { articles },
		};
	} catch (error) {
		console.error("Error fetching news:", error);
		return {
			props: { articles: [] },
		};
	}
}
