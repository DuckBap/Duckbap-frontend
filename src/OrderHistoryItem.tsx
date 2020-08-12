import React from 'react';
import { Order } from './type';

function OrderHistoryItem({ img, title, content }: Order) {
	return (
		<div>
			<span>{img}</span>
			<span>{title}</span>
			<span>{content}</span>
		</div>
	);
}

export default OrderHistoryItem;
