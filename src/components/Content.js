import React, { useEffect, useState } from "react";
import axios from "axios";

const Content = () => {
	const [newsdata, setNewsdata] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);

	const loadMoreNews = () => {
		const url = `https://api.newscatcherapi.com//v2/latest_headlines?countries=TW&topic=business&page_size=10&page=${pageNumber}`;

		axios
			.get(url, {
				headers: { "X-API-Key": "_pD39Xm-wi5GFJjKLiAl1kF4brimk0Y0uscMvwB8tmc" },
			})
			.then((res) => {
				const newNewsList = [];
				res.data.articles.forEach((p) => newNewsList.push(p));
				setNewsdata((oldNewsList) => [...oldNewsList, ...newNewsList]);
			})
			.catch((err) => {
				console.log(err);
			});

		setPageNumber(pageNumber + 1);
	};

	useEffect(() => {
		loadMoreNews();
	}, []);

	return (
		<div className="content-container">
			<div className="newslist">
				{newsdata.map((item, index) => {
					return (
						<div key={index}>
							<a href={item.link} className="newscard">
								<img src={item.media} alt="error" className="newsimg" />
								<div className="newscontent">
									<h2>{item.title}</h2>
									<p>
										{item.summary.length > 100
											? `${item.summary.substring(0, 100)}...`
											: item.summary}
									</p>
									<p>{item.author}</p>
									<p>{item.published_date}</p>
								</div>
							</a>
						</div>
					);
				})}
				<button onClick={() => loadMoreNews()} className="loadmore-btn">
					Load More
				</button>
			</div>
		</div>
	);
};

export default Content;
