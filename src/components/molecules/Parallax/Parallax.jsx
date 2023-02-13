/*
*	Taken from 'Next.js Material v4 Kit' by CreativeTim.com
*/

import { useState, useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import useStyles from './Parallax.styles'

export default function Parallax(props) {
	const [transform, setTransform] = useState('translate3d(0,0px,0)')
	
	useEffect(() => {
		if (window.innerWidth >= 768) {
			window.addEventListener('scroll', resetTransform)
		}
		return function cleanup() {
			if (window.innerWidth >= 768) {
				window.removeEventListener('scroll', resetTransform)
			}
		};
	});

	const resetTransform = () => {
		var windowScrollTop = window.pageYOffset / 3;
		setTransform('translate3d(0,' + windowScrollTop + 'px,0)');
	};

	const { filter, className, children, style, image, small, responsive } = props;

	const classes = useStyles();

	const parallaxClasses = classNames({
		[classes.parallax]: true,
		[classes.filter]: filter,
		[classes.small]: small,
		[classes.parallaxResponsive]: responsive,
		[className]: className !== undefined
	});

	return (
		<div
			className={parallaxClasses}
			style={{
			...style,
			backgroundImage: 'url(' + image + ')',
			transform: transform
			}}
		>
			{children}
		</div>
	);
}

Parallax.propTypes = {
	className: PropTypes.string,
	filter: PropTypes.bool,
	children: PropTypes.node,
	style: PropTypes.string,
	image: PropTypes.string,
	small: PropTypes.bool,
	// this will add a min-height of 660px on small screens
	responsive: PropTypes.bool
};
