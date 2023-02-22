import React, { useCallback } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import MuiSnackbar from '@material-ui/core/Snackbar'
import {
	MdClose as CloseIcon,
	MdCheckCircle as CheckCircleIcon,
	MdError as ErrorIcon,
	MdInfo as InfoIcon,
	MdWarning as WarningIcon,
} from 'react-icons/md'

import useStyles from './Snackbar.styles'

const variantIcon = {
	success: CheckCircleIcon,
	warning: WarningIcon,
	error: ErrorIcon,
	info: InfoIcon
}

const Snackbar = ({
	message, onClose, variant, open,
	autoHideDuration, anchorOrigin, action
}) => {
	const classes = useStyles()
	const Icon = variantIcon[variant]

	return (
		<MuiSnackbar
			anchorOrigin={anchorOrigin}
			open={open}
			autoHideDuration={autoHideDuration}
			onClose={onClose}
		>
			<SnackbarContent
				className={clsx(classes[variant], classes.root)}
				aria-describedby="snackbar"
				message={(
					<span id="snackbar" className={classes.message}>
						<Icon className={clsx(classes.icon, classes.iconVariant)} />
						{message}
					</span>
				)}
				action={[
					...(action ? [action] : []),
					<IconButton
						key="close"
						aria-label="close"
						color="inherit"
						onClick={onClose}
					>
						<CloseIcon className={classes.icon} />
					</IconButton>
				]}
			/>
		</MuiSnackbar>
	)
}

Snackbar.propTypes = {
	/** Message to show on the snackbar */
	message: PropTypes.string.isRequired,
	/** Function to be called on close event */
	onClose: PropTypes.func.isRequired,
	/** Variant of the snavbar */
	variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
	/** It tells if the snackbar should be shown */
	open: PropTypes.bool.isRequired,
	/** Number of miliseconds before the snackbar close automatically */
	autoHideDuration: PropTypes.number,
	/** It tells the positions where the snackbar will render */
	anchorOrigin: PropTypes.shape({
	  vertical: PropTypes.oneOf(['bottom', 'top']).isRequired,
	  horizontal: PropTypes.oneOf(['center', 'left', 'right']).isRequired,
	}),
	action: PropTypes.node,
  };
  
  Snackbar.defaultProps = {
	autoHideDuration: 6000,
	anchorOrigin: {
	  vertical: 'bottom',
	  horizontal: 'left',
	},
	action: null,
  };
  
  export default Snackbar;