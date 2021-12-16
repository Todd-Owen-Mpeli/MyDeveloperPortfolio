import Link from "next/link";
import styles from "/styles/Home.module.scss";

const Footer = () => {
	return (
		<>
			{/* <!--===== FOOTER =====--> */}
			<footer className={styles.footer}>
				<div className={styles.content}>
					<div className={styles.topSection}>
						<div className={styles.leftSection}>
							<div className={styles.additionalInformation}>
								<Link href="/">
									<a>Projects</a>
								</Link>
								<Link href="/">
									<a>Github Portfolio</a>
								</Link>
								<Link href="/">
									<a>Skills</a>
								</Link>
							</div>
						</div>
						<div className={styles.rightSection}>
							<Link href="/">
								<a target="blank">
									<i className="bi bi-instagram"></i>
								</a>
							</Link>
							<Link href="/">
								<a target="blank">
									<i className="bi bi-twitter"></i>
								</a>
							</Link>
							<Link href="/">
								<a target="blank">
									<i className="bi bi-youtube"></i>
								</a>
							</Link>
							<Link href="/">
								<a target="blank">
									<i className="bi bi-facebook"></i>
								</a>
							</Link>
						</div>
					</div>
					<div className={styles.borderLineMid}></div>
					<div className={styles.bottomSection}>
						<div className={styles.bottomHalfSection}>
							<div className={styles.leftSide}>
								<Link href="/">
									<a className={styles.location}>
										<i className="bi bi-geo-alt-fill"></i>United Kingdom
									</a>
								</Link>
								<Link href="/">
									<a>&copy; 2022 Junior Web Developer Portfolio </a>
								</Link>
							</div>
							<div className={styles.rightSide}>
								<Link href="/Privacy&CookiePolicy">
									<a>Email Me</a>
								</Link>
								<Link href="/CookieSettings">
									<a>Download Resume</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
