import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { QuickLinks } from "@/components/QuickLinks";
import Link from "next/link";

export default function Home({ user }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{user.name}</title>
				<meta
					name="description"
					content={`Welcome to ${user.name} portfolio`}
				/>
			</Head>
			<div className={styles.home}>
				<section className={styles.hero}>
					<div className={styles.heroText}>
						<h1>Hi, I&apos;m {user.name}</h1>
						<p>{user.title}</p>
					</div>
					<div className={styles.heroImage}>
						<img src={user.profileImage} alt="Profile" />
					</div>
				</section>
				<div className={styles.mainContent}>
					<div className={styles.contentPanel}>
						<section id="about" className={styles.about}>
							<div className={styles.aboutText}>
								<h2>About Me</h2>
								<p>{user.about}</p>
							</div>
						</section>
						<div className={styles.heroButtons}>
							<Link href="/about" className={styles.heroButton}>
								Read More ...
							</Link>
						</div>
					</div>
					<div className={styles.quickLinksPanel}>
						<QuickLinks />
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const user = {
		name: "Suprit Pattanayak",
		title: "Transformational Leader | Expert in Retail Banking, Mortgage Solutions & Operational Risk | SAFe® Certified Agile Practitioner | Driving Growth & Innovation",
		profileImage: "/img/pic.jpg",
		about: `
		I am Suprit Kumar Pattanayak, a solutions-driven professional with extensive experience in managing large-scale programs that drive growth, efficiency, and transformative change. With expertise in retail banking, mortgage solutions, and operational risk management, I specialize in implementing innovative technology solutions, optimizing workflows, and leading cross-functional teams. Certified in SAFe® Product Owner/Manager and Scrum Master, I bring strategic focus, agile methodologies, and a proven track record of delivering results. Recognized with multiple awards for excellence, I am passionate about driving business transformation and fostering collaboration to exceed expectations.
		`,
	};

	return {
		props: { user },
	};
}
