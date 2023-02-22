import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import Button from '@material-ui/core/Button'

import Snackbar from 'src/components/molecules/Snackbar/Snackbar'
import CircularLoader from 'src/components/molecules/CircularLoader/CircularLoader'

import { getFeedback } from 'src/store/reducers/feedback/selectors'
import { Actions as FeedbackActions } from 'src/store/reducers/feedback/actions'

const FeedbackProvider = ({ children }) => {
	const {
		message, type, isLoading, extraActionLabel,
		onExtraActionTrigger
	} = useSelector(getFeedback)

	const dispatch = useDispatch()

	const handleOnClose = useCallback((_event, reason) => {
		if (reason !== 'clickaway' || reason !== 'timeout') {
			dispatch(FeedbackActions.setFeedback({ message: '', type: type || 'error' }))
		}
	}, [])

	return (
		<>
			{children}
			{isLoading && <CircularLoader /> }
			<Snackbar
				message={message}
				variant={type}
				open={Boolean(message)}
				onClose={handleOnClose}
				action={extraActionLabel && onExtraActionTrigger && (
					<>
						<Button
							color="primary"
							variant="contained"
							size="small"
							onClick={onExtraActionTrigger}
						>
							{extraActionLabel}
						</Button>
					</>
				)}
			/>
		</>
	)
}

FeedbackProvider.propTypes = {
	/** Children to render inside the provider */
	children: PropTypes.node.isRequired,
}

export default FeedbackProvider