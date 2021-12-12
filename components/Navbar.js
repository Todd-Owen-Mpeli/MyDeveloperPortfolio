import Link from "next/link";
import styles from "/styles/Home.module.scss";

const Navbar = () => {
	return (
		<div>
			{/* <!--===== HEADER =====--> */}
			<header className={styles.header}>
				<nav>
					<div className={styles.content}>
						<div className={styles.navTitle}>
							<Link href="/" target="blank">
								<a>
									<strong>Todd</strong>
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
