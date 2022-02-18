import React, { useEffect, useState } from "react";
import axios from "axios";

const Content = () => {
	const [newsdata, setNewsdata] = useState([]);

	const url = `https://api.newscatcherapi.com//v2/latest_headlines?countries=TW&topic=business&page_size=20`;

	useEffect(() => {
		axios
			.get(url, {
				headers: { "X-API-Key": "_pD39Xm-wi5GFJjKLiAl1kF4brimk0Y0uscMvwB8tmc" },
			})
			.then((res) => {
				setNewsdata(res.data.articles);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [url]);

	return (
		<div className="content-container">
			<div className="sidebar">
				<a href="" className="category-btn">
					Top-headlines
				</a>
				<a href="" className="category-btn">
					Business
				</a>
				<a href="" className="category-btn">
					Sport
				</a>
				<a href="" className="category-btn">
					Health
				</a>
				<a href="" className="category-btn">
					Science
				</a>
				<a href="" className="category-btn">
					Technology
				</a>
				<a href="" className="category-btn">
					Entertainment
				</a>
			</div>
			<div className="newslist">
				{newsdata.map((item, index) => {
					return (
						<div>
							<a href={item.link} className="newscard">
								<img src={item.media} alt="error" className="newsimg" />
								<div className="newscontent" key={index}>
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
			</div>
		</div>
	);
};

export default Content;
