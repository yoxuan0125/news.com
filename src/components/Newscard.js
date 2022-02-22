import React from "react";

const Newscard = React.forwardRef((props, ref) => {
	if (!props) return;
	else {
		return (
			<div key={props.index} ref={ref}>
				<a href={props.item.link} className="newscard">
					<img src={props.item.media} alt="error" className="newsimg" />
					<div className="newscontent">
						<h2>{props.item.title}</h2>
						<p>
							{props.item.summary.length > 100
								? `${props.item.summary.substring(0, 100)}...`
								: props.item.summary}
						</p>
						<p>{props.item.author}</p>
						<p>{props.item.published_date}</p>
					</div>
				</a>
			</div>
		);
	}
});

export default Newscard;
