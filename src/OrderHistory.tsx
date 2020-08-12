import React from 'react';
import OrderHistoryList from './OrderHistoryList';

function OrderHistory() {
	const orders = [
		{ img: '123', title: '123', content: '123' },
		{ img: '123', title: '123', content: '123' },
		{ img: '123', title: '123', content: '123' },
	];
	return (
		<div>
			<span>구매 내역</span>
			<OrderHistoryList orders={orders} />
			{/* {orderHistoryList(orders)} */}
		</div>
	);
}

export default OrderHistory;
