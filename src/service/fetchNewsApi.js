import { useEffect, useState } from "react";
import axios from "axios";

export default function useNewsSearch(category, pageNumber) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [news, setNews] = useState([]);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setNews([]);
	}, [category]);

	useEffect(() => {
		setLoading(true);
		setError(false);
		let cancel;
		axios({
			method: "GET",
			url: "https://api.newscatcherapi.com//v2/latest_headlines?countries=TW&page_size=10",
			headers: { "X-API-Key": "_pD39Xm-wi5GFJjKLiAl1kF4brimk0Y0uscMvwB8tmc" },
			params: { topic: category, page: pageNumber },
			cancelToken: new axios.CancelToken((c) => (cancel = c)),
		})
			.then((res) => {
				setNews((prevNews) => {
					return [...new Set([...prevNews, ...res.data.articles.map((b) => b)])];
				});

				setHasMore(res.data.articles.length > 0);
				setLoading(false);
			})
			.catch((e) => {
				if (axios.isCancel(e)) return;
				setError(true);
			});
		return () => cancel();
	}, [category, pageNumber]);

	return { loading, error, news, hasMore };
}
