import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.scss";

const Navbar = () => {
	return (
		<>
			{/* <!--===== HEADER =====--> */}
			<header className={styles.header}>
				<nav className="container">
					<div className={styles.content}>
						<div className={styles.navTitle}>
							<Link href="/">
								<a>
									<Image
										src="/otherImages/LogoYellow.png"
										alt="Logo"
										width={20}
										height={20}
										objectFit="contain"
									></Image>
								</a>
							</Link>
							<Link href="/">
								<a>
									<Image
										src="/otherImages/logoNew.png"
										alt="New Project Logo"
										width={35}
										height={35}
										objectFit="contain"
									></Image>
								</a>
							</Link>
						</div>
						<ul className={styles.navLinks}>
							<Link href="/" target="blank">
								<a>Projects</a>
							</Link>
							<Link href="/" target="blank">
								<a>About</a>
							</Link>
							<Link href="/" target="blank">
								<a>Skills</a>
							</Link>
							<Link href="/" target="blank">
								<a>Contact</a>
							</Link>
							<newButton>
								<Link href="/">
									<a
										className={styles.resumeBtn}
										target="blank"
										href="/Todd Owen Mpeli - Web Developer CV.pdf"
										download="Todd Owen Mpeli CV.pdf"
									>
										<Image
											src="/otherImages/LogoResume.png"
											alt="New Project Logo"
											width={35}
											height={35}
											objectFit="contain"
										></Image>
									</a>
								</Link>
							</newButton>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
