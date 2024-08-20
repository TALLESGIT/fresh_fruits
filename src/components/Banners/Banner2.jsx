import React from "react";
import BannerPng from '../../assets/fruit-plate2.png'
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

const Banner = () => {
	return (
		<section className=" container mb-12 md:flex flex-c">
			<div className="container grid  md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24 md:pt-4 px-10 ">
				{/* Brand Info */}
				<div className="flex flex-col justify-center">
					<div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
						<motion.h1
							variants={FadeUp(0.5)}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="text-3xl lg:text-6xl font-bold uppercase"
						>
							Online Fruit Store
						</motion.h1>
						<motion.p
							variants={FadeUp(0.7)}
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
							variants={FadeUp(0.9)}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Repudiandae vitae odit saepe quam cupiditate nulla!
						</motion.p>
						{/* Button section*/}
						<motion.div
							variants={FadeUp(1.1)}
							initial="hidden"
							animate="visible"
							className="flex justify-center md:justify-start pt-4"
						>
							<button className="primary-btn" type="button">
								Lear More
							</button>
						</motion.div>
					</div>
				</div>
				{/* Banner Image */}
				<div className="flex justify-center items-center">
					<motion.img
						initial={{ opacity: 0, x: 200, rotate: 75 }}
						whileInView={{ opacity: 1, x: 0, rotate: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						viewport={{ once: true }}
						src={BannerPng}
						alt=""
						className="w-[400px] ms:max-w-[600px] h-full object-cover drop-shadow"
					/>
				</div>
			</div>
		</section>
	);
};

export default Banner;
