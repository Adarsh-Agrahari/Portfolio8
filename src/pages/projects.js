import Head from "next/head";

export default function Projects({ projects }) {
	return (
		<div>
			<Head>
				<title>My Projects</title>
				<meta
					name="description"
					content="A showcase of my best projects."
				/>
			</Head>
			<header style={{ textAlign: "center", padding: "20px" }}>
				<h1>My Projects</h1>
			</header>
			<main style={{ padding: "20px", textAlign: "center" }}>
				<ul style={{ listStyle: "none", padding: 0 }}>
					{projects.map((project, index) => (
						<li key={index} style={{ margin: "10px 0" }}>
							<strong>{project.name}</strong> -{" "}
							{project.description}
						</li>
					))}
				</ul>
			</main>
		</div>
	);
}

export async function getServerSideProps() {
	const projects = [
		{
			name: "Portfolio Website",
			description: "My personal portfolio built with Next.js.",
		},
		{
			name: "E-commerce Platform",
			description:
				"A scalable e-commerce platform using React and Node.js.",
		},
		{
			name: "Blog App",
			description:
				"A blog application with authentication and dynamic routing.",
		},
	];

	return {
		props: { projects },
	};
}
