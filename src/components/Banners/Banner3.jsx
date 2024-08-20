import React from "react";
import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const bgStyle = {
	backgroundImage: `url(${BannerPng})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgoundRepeat: "no-repeat",
};

const Banner = () => {
	return (
		<section className="">
			<div
				style={bgStyle}
				className="container grid grid-cols-1 md:grid-cols-2 md:pt-4 px-4 space-y-6 md:space-y-0 py-14 rounded-3xl"
			>
				{/* blank div */}
				<div>
					
				</div>
				{/* Brand Info */}
				<div className="flex flex-col justify-center">
					<div className="text-center px-10 md:text-left space-y-4 lg:max-w-[400px]">
						<motion.h1
							variants={FadeLeft(0.5)}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="text-3xl lg:text-6xl font-bold uppercase"
						>
							Get Fresh Fruits Today
						</motion.h1>
						<motion.p
							variants={FadeLeft(0.7)}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quasi
							dolore saepe, voluptatem dolor possimus repellendus ullam eos vel
							numquam nobis illo maxime labore, quod illum accusamus,
							perspiciatis recusandae molestiae.
						</motion.p>
						<motion.p
							variants={FadeLeft(0.9)}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Repudiandae vitae odit saepe quam cupiditate nulla!
						</motion.p>
						{/* Button section*/}
						<motion.div
							variants={FadeLeft(0.9)}
							initial="hidden"
							animate="visible"
							className="flex justify-center md:justify-start pt-4"
						>
							<button className="primary-btn" type="button">
								Download App 
							</button> 
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
