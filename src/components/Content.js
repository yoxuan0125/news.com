import React, { useEffect, useState } from "react";
import axios from "axios";

import Newscard from "./Newscard";

const Content = () => {
	const [newsdata, setNewsdata] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [isLoading, setIsloading] = useState(false);

	const loadMoreNews = () => {
		const url = `https://api.newscatcherapi.com//v2/latest_headlines?countries=TW&topic=business&page_size=10&page=${pageNumber}`;

		setIsloading(true);

		axios
			.get(url, {
				headers: { "X-API-Key": "_pD39Xm-wi5GFJjKLiAl1kF4brimk0Y0uscMvwB8tmc" },
			})
			.then((res) => {
				const newNewsList = [];
				res.data.articles.forEach((p) => newNewsList.push(p));
				setNewsdata((oldNewsList) => [...oldNewsList, ...newNewsList]);
				setPageNumber(pageNumber + 1);
				setIsloading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleScroll = (e) => {
		const scrollHeight = e.target.documentElement.scrollHeight;
		const currentHeight = Math.ceil(
			e.target.documentElement.scrollTop + window.innerHeight
		);
		if (currentHeight + 1 >= scrollHeight) {
			loadMoreNews();
		}
	};

	useEffect(() => {
		loadMoreNews();
		window.addEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="content-container">
			<div className="newslist">
				{newsdata.map((item, index) => {
					return <Newscard item={item} index={index} />;
				})}
				<div>{isLoading && "Loading..."}</div>
			</div>
		</div>
	);
};

export default Content;
