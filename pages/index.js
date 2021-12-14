import Head from "next/head";
import Navbar from "/components/Navbar";
import Hero from "/components/Hero";
import Projects from "/components/Projects";
import Footer from "/components/Footer";

export default function Home() {
	return (
		<>
			{/* <!--===== IMPORT LINKS =====--> */}
			<Head>
				<title>Web Developer Portfolio | Todd Owen Mpeli</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/otherImages/20211116_143529.ico" />

				{/* <!-- AOS CDN.js Reveal Animation  --> */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
					integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w=="
					crossOrigin="anonymous"
					referrerpolicy="no-referrer"
				/>
				{/* <!-- Bootstrap CSS --> */}
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css"
					rel="stylesheet"
				/>
				{/* <!-- Bootstrap Icon Link --> */}
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
				/>
				{/* <!-- Icons for Mobile viewport --> */}
				<link
					rel="stylesheet"
					href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
				/>
			</Head>

			{/* <!--===== NAVIGATION =====--> */}
			<Navbar />

			{/* <!--===== HERO =====--> */}
			{/* <Hero /> */}

			{/* <!--===== PROJECTS =====--> */}
			{/* <Projects /> */}

			{/* <!--===== FOOTER =====--> */}
			<Footer />
		</>
	);
}
