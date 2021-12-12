/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "/styles/Home.module.scss";

const Projects = () => {
	return (
		<div>
			{/* <!--===== PROJECTS =====--> */}
			<div className={styles.projects}>
				<div className={styles.container}>
					<div className={styles.content}>
						<div className={styles.mainSide}>
							<h2>
								<strong>Fully featured web applications with javascript</strong>
							</h2>
							<h2 className={styles.subtitle}>Projects recommend for you</h2>
							<div className={styles.recommendedProjects}>
								<div className={styles.project}>
									<div className={styles.image}>
										<Link
											href="https://todd-owen-mpeli.github.io/realmeWebsite/src/index.html"
											target="_blank"
											rel="noopener noreferrer"
										>
											<a>
												<img
													src="/screenshotImages/realme Project Cover Image Three.png"
													alt="realme Website (Demo)"
												/>
											</a>
										</Link>
									</div>
									<div className={styles.description}>
										<div className={styles.titles}>
											<h2>
												<strong>Realme Smartphone Website</strong>
											</h2>
											<p>HTML, JavaScript, SCSS, CSS</p>
										</div>
										<div className={styles.buttons}>
											<div className={styles.moreInfo}>
												<Link
													href="https://github.com/Todd-Owen-Mpeli/realmeWebsite"
													target="_blank"
													rel="noopener noreferrer"
												>
													<a>GitHub</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className={styles.project}>
									<div className={styles.image}>
										<Link
											href="https://todd-owen-mpeli.github.io/Mazza-Treatz-Website/src/index.html"
											target="_blank"
											rel="noopener noreferrer"
										>
											<a>
												<img
													src="/screenshotImages/Mazza Treats screenshot.png"
													alt="Mazza Treats Website"
												/>
											</a>
										</Link>
									</div>
									<div className={styles.description}>
										<div className={styles.titles}>
											<h2>
												<strong>Mazza Treats Website</strong>
											</h2>
											<p>HMTL, SCSS, JavaScript</p>
										</div>
										<div className={styles.buttons}>
											<div className={styles.moreInfo}>
												<Link
													href="https://github.com/Todd-Owen-Mpeli/Mazza-Treatz-Website"
													target="_blank"
													rel="noopener noreferrer"
												>
													<a>GitHub</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className={styles.project}>
									<div className={styles.image}>
										<Link
											href="https://todd-owen-mpeli.github.io/Kandy-s-Launderette-Website/src/index.html"
											target="_blank"
											rel="noopener noreferrer"
										>
											<a>
												<img
													src="/screenshotImages/kandy's projects cover image.png"
													alt="Kandy's Launderette Website"
												/>
											</a>
										</Link>
									</div>
									<div className={styles.description}>
										<div className={styles.titles}>
											<h2>
												<strong>Kandys Launderette Website</strong>
											</h2>
											<p>HMTL, SCSS, JavaScript</p>
										</div>
										<div className={styles.buttons}>
											<div className={styles.moreInfo}>
												<Link
													href="https://github.com/Todd-Owen-Mpeli/Kandy-s-Launderette-Website"
													target="_blank"
													rel="noopener noreferrer"
												>
													<a>GitHub</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.featuredProjects}>
								<h2>
									<strong>More Featured Projects</strong>
								</h2>
							</div>
							<div className={styles.outerContainer}>
								<div className={styles.revealPageN}>
									<newButton className={styles.buttonN}>
										<i className=".bi bi-plus-lg"></i>
									</newButton>
								</div>
								<div className={styles.info_containerN}>
									<div className={styles.content}>
										<div className={styles.moreProjects}>
											<div className={styles.apps} id="moreApp1">
												<div className={styles.image}>
													<Link
														href="https://github.com/Todd-Owen-Mpeli/Mancala"
														target="_blank"
														rel="noopener noreferrer"
													>
														<a>
															<img
																src="/screenshotImages/ssdsfg.png"
																alt="Mancala Board-Game App"
															/>
														</a>
													</Link>
												</div>
												<div className={styles.description}>
													<h2>Mancala Board-Game App</h2>
													<p>Java, CSS, JavaFX</p>
												</div>
											</div>
											<div className={styles.apps} id="moreApp2">
												<div className={styles.image}>
													<Link
														href="https://github.com/Todd-Owen-Mpeli/JavaScript-Calculator"
														target="_blank"
														rel="noopener noreferrer"
													>
														<a>
															<img
																src="/screenshotImages/javaScript calculator cover image.png"
																alt="JavaScript Calculator"
															/>
														</a>
													</Link>
												</div>
												<div className={styles.description}>
													<h2>JavaScript Calculator</h2>
													<p>JavaScript, HTML, SCSS</p>
												</div>
											</div>
											<div className={styles.apps} id="moreApp3">
												<div className={styles.image}>
													<Link
														href="https://todd-owen-mpeli.github.io/JavaScript-Quiz-Questionnaire-App/"
														target="_blank"
														rel="noopener noreferrer"
													>
														<a>
															<img
																src="/screenshotImages/Quiz App cover image.png"
																alt="JavaScript Quiz Questionnaire App"
															/>
														</a>
													</Link>
												</div>
												<div className={styles.description}>
													<h2>JavaScript Quiz Questionnaire App</h2>
													<p>JavaScript, HTML & SCSS</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
