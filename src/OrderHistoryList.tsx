import React from 'react';
import OrderHistoryItem from './OrderHistoryItem'
import {Props, Order} from "./type"


function OrderHistoryList({orders}:Props) {
	return (
		orders.map((order:Order, idx) => {
			return <OrderHistoryItem key={idx} order={order} />;
		})
        )
	};
}

export default OrderHistoryList;