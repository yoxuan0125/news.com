import React from "react";

const Newscard = (item, index) => {
	if (item === undefined) return;
	else {
		return (
			<div key={index}>
				<a href={item.item.link} className="newscard">
					<img src={item.item.media} alt="error" className="newsimg" />
					<div className="newscontent">
						<h2>{item.item.title}</h2>
						<p>
							{item.item.summary.length > 100
								? `${item.item.summary.substring(0, 100)}...`
								: item.item.summary}
						</p>
						<p>{item.item.author}</p>
						<p>{item.item.published_date}</p>
					</div>
				</a>
			</div>
		);
	}
};

export default Newscard;
