/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "/styles/Home.module.scss";

const Hero = () => {
	return (
		<div>
			{/* <!--===== HERO =====--> */}
			<div className={styles.hero}>
				<div className="container">
					<div className={styles.content}></div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
