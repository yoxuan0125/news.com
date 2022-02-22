import React, { useState, useRef, useCallback } from "react";
import useNewsSearch from "../service/fetchNewsApi";

import Newscard from "./Newscard";

const Content = () => {
	const [category, setCategory] = useState("");
	const [pageNumber, setPageNumber] = useState(1);

	const { news, hasMore, loading, error } = useNewsSearch(category, pageNumber);

	const observer = useRef();
	const lastNewsElementRef = useCallback((node) => {
		if (loading) return;
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && hasMore) {
				setPageNumber((prevPageNumber) => prevPageNumber + 1);
			}
		});
		if (node) observer.current.observe(node);
	});

	return (
		<div>
			<div className="sidebar">
				<button className="category-btn">Top-headlines</button>
				<button className="category-btn">Business</button>
				<button className="category-btn">Sport</button>
				<button className="category-btn">Health</button>
				<button className="category-btn">Science</button>
				<button className="category-btn">Technology</button>
				<button className="category-btn">Entertainment</button>
			</div>
			<div className="content-container">
				<div className="newslist">
					<div>{loading && "Loading..."}</div>
					{news.map((item, index) => {
						if (news.length === index + 1) {
							return <Newscard item={item} index={index} ref={lastNewsElementRef} />;
						} else {
							return <Newscard item={item} index={index} />;
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default Content;
