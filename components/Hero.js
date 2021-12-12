/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "/styles/Home.module.scss";

const Hero = () => {
	return (
		<div>
			{/* <!--===== HERO =====--> */}
			<div className={styles.hero}>
				<div className={styles.heroBackground}>
					<div className={styles.heroOuterBackground}>
						<div className={styles.heroInnerBackground}>
							<div className={styles.heroLeftSide}>
								<h2>
									<strong>HI, IM TODD OWEN</strong>
								</h2>
								<h2 className={styles.subtitle}>
									<strong>Junior Web Developer</strong>
								</h2>
								<p>
									I build projects from web development to all different types
									of niches and industries wide applicable projects.
									<br />
									<br />
								</p>
							</div>
							<div className={styles.heroRightSide}>
								<h2>
									<strong>How can I help you?</strong>
								</h2>
								<p>
									Lets get in touch today.
									<br />
									<br />
								</p>
								<div className={styles.contactMeBtn}>
									<Link
										className={styles.contactMeBtn}
										href="https://www.linkedin.com/in/todd-mpeli-831b18121/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<a>Contact Me</a>
									</Link>
								</div>
								<ul className={styles.socialMediaLinks}>
									<Link
										href="https://www.linkedin.com/in/todd-mpeli-831b18121/"
										target="_blank"
									>
										<a>
											<i className="uil uil-linkedin"></i>
										</a>
									</Link>
									<Link
										href="https://github.com/Todd-Owen-Mpeli"
										target="_blank"
									>
										<a>
											<i className="uil uil-github"></i>
										</a>
									</Link>
									<Link
										href="https://twitter.com/ToddOwenMpeli"
										target="_blank"
									>
										<a>
											<i className="uil uil-twitter"></i>
										</a>
									</Link>
								</ul>
							</div>
						</div>
						<div className={styles.profileImageBackground}>
							<img
								src="/otherImages/Profile_Picture_880px_x_600px_2.png"
								alt="Profile Picture"
							></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
