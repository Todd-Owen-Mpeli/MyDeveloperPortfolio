import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.scss";

const NewProjects = () => {
	return (
		<>
			{/* <!--===== NEXT JS PROJECTS =====--> */}
			<div className={styles.nextJSProjects}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.leftSide}>
							<Link href="/">
								<a>
									<Image
										src="/img/Size-Chart-LP_Mens.webp"
										alt="Product Image"
										width={300}
										height={300}
										layout="responsive"
										objectFit="cover"
									></Image>
								</a>
							</Link>
							<div className={styles.title}>
								<h2>Our Options</h2>
								<h5>
									Choose Between our Individual service option. Or our more
									Business tailored dry cleaning service.
								</h5>
							</div>
						</div>
						<div className={styles.RightSide}>
							<Link href="/">
								<a>
									<Image
										src="/img/Size-Chart-LP_Mens.webp"
										alt="Product Image"
										width={300}
										height={300}
										layout="responsive"
										objectFit="cover"
									></Image>
								</a>
							</Link>
							<div className={styles.title}>
								<Link href="/">
									<a>
										<h2>Our Options</h2>
									</a>
								</Link>
								<Link href="/">
									<a>
										<h5>
											Choose Between our Individual service option. Or our more
											Business tailored dry cleaning service.
										</h5>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewProjects;
