class AppService {
	stripHTMLTags(html: string) {
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = html;

		return tempDiv.textContent || tempDiv.innerText || '';
	}
}

export default new AppService();
