import React, { useEffect, useState } from "react";
import axios from "axios";

const Content = () => {
	const [newsdata, setNewsdata] = useState([]);

	const API_KEY = "663c13671c274a12840436ebd622e284";
	const url = `https://newsapi.org/v2/top-headlines?country=tw&apiKey=${API_KEY}`;

	useEffect(() => {
		axios
			.get(url)
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
							<a href={item.url} className="newscard">
								<img src={item.urlToImage} alt="error" className="newsimg" />
								<div className="newscontent" key={index}>
									<h2>{item.title}</h2>
									<p>{item.description}</p>
									<p>{item.author}</p>
									<p>{item.publishedAt}</p>
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
