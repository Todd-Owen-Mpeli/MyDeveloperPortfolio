import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.scss";

const Navbar = () => {
	return (
		<div>
			{/* <!--===== HEADER =====--> */}
			<header className={styles.header}>
				<nav className="container">
					<div className={styles.content}>
						<div className={styles.navTitle}>
							<Link href="/">
								<a>
									<Image
										src="/otherImages/LogoPurple.png"
										alt="Logo"
										width={40}
										height={40}
										objectFit="contain"
									></Image>
								</a>
							</Link>
							<Link href="/">
								<a>
									<Image
										src="/otherImages/logoNew.png"
										alt="New Project Logo"
										width={50}
										height={50}
										objectFit="contain"
									></Image>
								</a>
							</Link>
						</div>
						<ul className={styles.navLinks}>
							<newButton>
								<i className="bi bi-toggle-off"></i>
							</newButton>
							<Link href="/projects" target="blank">
								<a>Projects</a>
							</Link>
							<Link href="/about" target="blank">
								<a>About</a>
							</Link>
							<Link href="/skills" target="blank">
								<a>Skills</a>
							</Link>
							<Link href="/contactUs" target="blank">
								<a>Contact</a>
							</Link>
							<newButton>
								<a
									className={styles.resumeBtn}
									target="blank"
									href="/Todd Owen Mpeli - Web Developer CV.pdf"
									download="Todd Owen Mpeli CV.pdf"
								>
									Resume
								</a>
							</newButton>
						</ul>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
