import React from 'react';

import { cardStyles } from 'styles/styles';

type CardProps = {
	name: string;
	url: string;
	inNewTab?: boolean;
};

const Card = ({ name, url, inNewTab = false }: CardProps) => {
	return (
		<section className={cardStyles.cardSection}>
			<h2 className={cardStyles.cardTitle}>{name}</h2>
			<p className={cardStyles.cardDescription}>{url}</p>
			<a
				className={cardStyles.link}
				href={url}
				target={inNewTab ? '_blank' : ''}
				rel="noreferrer"
			>
				Documentation
			</a>
		</section>
	);
};

export default Card;
