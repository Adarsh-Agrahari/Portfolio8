import React from "react";
import Head from "next/head";
import styles from "@/styles/Books.module.css";
import Link from "next/link";

export default function Books({ books = [] }) {
	return (
		<div className={styles.booksContainer}>
			<Head>
				<title>Suprit Pattanayak</title>
				<meta name="author" content="Your Name" />
			</Head>
			<div className={styles.booksContent}>
				<h1 className={styles.heading}>Books Authored</h1>
				<div className={styles.booklist}>
					{books.length > 0 ? (
						books.map((book, index) => (
							<div className={styles.book} key={index}>
								<Link
									href={book.link}
									className={styles.bookLink}
									target="_blank"
								>
									<img
										src={book.image}
										alt={book.title}
										className={styles.bookImage}
									/>
								</Link>
								<h5 className={styles.bookTitle}>
									{book.title}
								</h5>
							</div>
						))
					) : (
						<p>No books available at the moment.</p>
					)}
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const books = [
			{
				title: "AI & Gen AI: Bridging Tech and Business",
				link: "https://www.amazon.com/dp/B0DKF3B6SQ?ref=ppx_yo2ov_dt_b_fed_asin_title",
				image: "img/book.jpg",
			},
		];

		return {
			props: { books },
		};
	} catch (error) {
		console.error("Error fetching books:", error);
		return {
			props: { books: [] },
		};
	}
}
