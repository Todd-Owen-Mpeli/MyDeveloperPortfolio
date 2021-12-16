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
						<div className={styles.leftSide}></div>
						<div className={styles.RightSide}></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewProjects;
