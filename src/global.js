import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
*{
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    font-family: 'Roboto', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.modal{
     background: #fff;
	 padding: 25px;
     width: 500px;
     height: 200px;
	 border-radius: 15px;

	 h1{
		 text-align: center;
		 font-size: 25px;
		 margin-bottom: 25px;
		 text-transform: uppercase;
		 font-weight: 700;
	 }

	 form{
		display: flex;
		align-items: center;
		justify-content: space-between;
		.quant{
			width: 50px;
			height: 50px;
			font-size: 20px;
			border: 2px solid #333;
			border-radius: 10px;
			outline: none;
		}
		.name{
			width: 250px;
			height: 50px;
			font-size: 20px;
			border: 2px solid #333;
			border-radius: 10px;
			outline: none;
		}
		button{
			width: 50px;
			height: 50px;
			font-size: 35px;
			background: transparent;
			cursor: pointer;

			border: 2px solid #333;
			border-radius: 10px;
			outline: none;
		}
	 }
}
.modal-overlay{
	background: rgba(0,0,0,0.8);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	align-items: center;
	justify-content: center;
}


`;