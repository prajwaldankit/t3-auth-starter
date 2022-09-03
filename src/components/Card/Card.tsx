import React from 'react';

import { Post } from '@prisma/client';

type CardProps = {
	title: Post['title'];
	description: Post['description'];
};

const Card = ({ title, description }: CardProps) => {
	return (
		<section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
			<h2 className="text-lg text-gray-700">{title}</h2>
			<p className="text-sm text-gray-600">{description}</p>
		</section>
	);
};

export default Card;
