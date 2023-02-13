/*!
 * SELECT STYLES TAKEN FROM:
 =========================================================
 * NextJS Material Kit - v1.2.0 based on Material Kit - v2.0.2 and Material Kit React - v1.8.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nextjs-material-kit
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/main/LICENSE.md)

 =========================================================

 MIT License

Copyright (c) 2017 Creative Tim

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

 const hexColorToRGB = function (hexColor) {
	let detectShorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // #000 vs #000000
	hexColor = hexColor?.replace(detectShorthand, function (m, r, g, b) {
		return r + r + g + g + b + b;
	});

	const hex_array = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor); // #000000 to #ffffff
	return hex_array
	? {
		r: parseInt(hex_array[1], 16), // 0-255
		g: parseInt(hex_array[2], 16), // 0-255
		b: parseInt(hex_array[3], 16), // 0-255
	} : null;
};

const hexToRGBAlpha = function (hexColor, alpha) {
	let rgb = hexColorToRGB(hexColor);
	return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
}

 const containerFluid = {
	paddingRight: "15px",
	paddingLeft: "15px",
	marginRight: "auto",
	marginLeft: "auto",
	width: "100%",
};

const container = {
	...containerFluid,
	"@media (min-width: 576px)": {
		maxWidth: "540px",
	},
	"@media (min-width: 768px)": {
		maxWidth: "720px",
	},
	"@media (min-width: 992px)": {
		maxWidth: "960px",
	},
	"@media (min-width: 1200px)": {
		maxWidth: "1140px",
	},
};

const pageContentContainer = {
	paddingTop: '3em'
}

const defaultFont = {
	fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	fontWeight: "300",
	lineHeight: "1.5em",
};

const primaryColor = "#9c27b0";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";

const primaryBoxShadow = {
	boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
		primaryColor,
		0.28
	)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
		primaryColor,
		0.2
	)}`,
};
const infoBoxShadow = {
	boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
		infoColor,
		0.28
	)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
		infoColor,
		0.2
	)}`,
};
const successBoxShadow = {
	boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
		successColor,
		0.28
	)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
		successColor,
		0.2
	)}`,
};
const warningBoxShadow = {
	boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
		warningColor,
		0.28
	)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
		warningColor,
		0.2
	)}`
};
const dangerBoxShadow = {
	boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
		dangerColor,
		0.28
	)}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
		dangerColor,
		0.2
	)}`
};
const roseBoxShadow = {
	boxShadow: `0 4px 20px 0px ${hexToRGBAlpha(
		"#000",
		0.14
	)}, 0 7px 10px -5px ${hexToRGBAlpha(roseColor, 0.4)}`
};
const boldLink = {
	fontWeight: 'bold',
	textDecoration: 'underline'
}

export {
	hexColorToRGB,
	hexToRGBAlpha,
	containerFluid,
	container,
	pageContentContainer,
	defaultFont,
	primaryColor,
	warningColor,
	dangerColor,
	successColor,
	infoColor,
	roseColor,
	grayColor,
	primaryBoxShadow,
	infoBoxShadow,
	successBoxShadow,
	warningBoxShadow,
	dangerBoxShadow,
	roseBoxShadow,
	boldLink
}