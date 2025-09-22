import "./leftpanel.scss";

class LeftPanel {
	leftPanel: HTMLElement;

	constructor() {
		this.leftPanel = document.createElement("aside");
		this.leftPanel.classList.add("left-panel");
		this.header();
		this.blockquote();
		this.footer();
	}

	getComponent(): HTMLElement {
		return this.leftPanel;
	}

	header() {
		const headerString = `
			<div class="header">
				<h3 class="header__title">JavaScript ES6</h3>
				<h5 class="header__example"> Example </h5>
				<a href="https://github.com/tastejs/todomvc/tree/gh-pages/examples/javascript-es6" 
					class="header__link"> Source </a>
				<hr/>
			</div>
		`;

		const header = document
			.createRange()
			.createContextualFragment(headerString);

		if (!header) {
			this.leftPanel.append("не удалось установить элемент!");
			return;
		}
		this.leftPanel.append(header);
	}

	blockquote() {
		const blockquoteString = `
			<div class="blockquote">
				<div class="blockquote__content">
					<span>“</span>
					<blockquote class="blockquote__content_value">
						The ECMAScript 6 (ES2015) standard was 
						ratified in 2015 following years of 
						work standardizing improvements to 
						ECMAScript 3. The committee introduced 
						a wide variety of improvements such as 
						arrow functions, const declarations, 
						and native Promises
					</blockquote>
					<span>”</span>
				</div>
				<footer class="blockquote__footer">
					<a href="http://developer.mozilla.org/en-US/docs/JavaScript"
						class="blockquote__footer_link">JavaScript ES6
					</a>
				</footer>
				<hr/>
			</div>
		`;

		const blockquote = document
			.createRange()
			.createContextualFragment(blockquoteString);

		if (!blockquote) {
			this.leftPanel.append("не удалось установить элемент!");
			return;
		}
		this.leftPanel.append(blockquote);
	}

	footer() {
		const footerString = `
			<footer class="footer">
				<em class="footer__content">
					If you have other helpful links to share,
					or find any of the links above no longer 
					work, please 
					<a href="https://github.com/tastejs/todomvc/issues"
						class="footer__content_link">
						let us know
					</a>.
				</em>
			</footer>
		`;
		const footer = document
			.createRange()
			.createContextualFragment(footerString);

		if (!footer) {
			this.leftPanel.append("не удалось установить элемент!");
			return;
		}
		this.leftPanel.append(footer);
	}
}

export default LeftPanel;
