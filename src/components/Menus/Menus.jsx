import React from "react";
import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/orange.png";
import Fruit3 from "../../assets/fruits/avocado.png";
import Fruit4 from "../../assets/fruits/cherry.png";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const MenusData = [
	{
		id: 1,
		title: "Fresh red Apples",
		link: "/",
		price: "$2.00",
		img: Fruit1,
		delay: 0.3,
	},
	{
		id: 2,
		title: "Fresh Oranges",
		link: "/",
		price: "$3.59",
		img: Fruit2,
		delay: 0.6,
	},
	{
		id: 3,
		title: "Fresh Avocado",
		link: "/",
		price: "$4.29",
		img: Fruit3,
		delay: 0.9,
	},
	{
		id: 4,
		title: "Fresh Cherries",
		link: "/",
		price: "$4.99",
		img: Fruit4,
		delay: 1.2,
	},
];

const Menus = () => {
	return (
		<section>
			<div className="container pt-12 pb-20  md:pt-4 px-4">
				<motion.h1
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, deplay: 0.3 }}
					className="text-2xl font-bold pb-10 uppercase"
				>
					Our Menu
				</motion.h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					{MenusData.map((menu) => (
						<motion.div
							variants={FadeLeft(menu.delay)}
							initial="hidden"
							whileInView={"visible"}
							whileHover={{ scale: 1.1 }}
							key={menu}
							className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3"
						>
							<img
								src={menu.img}
								alt=""
								className="w-[60px] mb-4 scale-125 transform translate-y-6 pb-10"
							/>
							<div>
								<h1 className="text-lg font-semibold">{menu.title}</h1>
								<p className="text-lg font-semibold text-secondary">
									{menu.price}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Menus;
