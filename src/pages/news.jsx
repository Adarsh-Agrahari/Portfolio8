import React from "react";
import Head from "next/head";
import styles from "@/styles/News.module.css";
import Link from "next/link";

export default function News({ articles = [] }) {
	return (
		<div className={styles.newsContainer}>
			<Head>
				<title>Suprit Pattanayak - News</title>
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
				title: "Revolutionizing Business with AI: Suprit Kumar Pattanayak Unveils Groundbreaking Insights in New Book",
				link: "https://www.laweekly.com/revolutionizing-business-with-ai-suprit-kumar-pattanayak-unveils-groundbreaking-insights-in-new-book",
				image: "img/news1.png",
			},
			{
				title: "Leadership, Learning, and Life: The Remarkable Journey of Suprit Kumar Pattanayak",
				link: "https://nyweekly.com/leadership/the-remarkable-journey-of-suprit-kumar-pattanayak/",
				image: "img/news2.png",
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
