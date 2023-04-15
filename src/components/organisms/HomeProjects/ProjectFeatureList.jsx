import { makeStyles } from '@material-ui/core/styles';
import { useCallback } from 'react';

const useStyles = (listIcon) => makeStyles({
	detailList: {
		'& dd.detail-item': {
			display: 'list-item',
			marginLeft: '2ch',
			'&::marker': {
				content: '"' + listIcon + ' "',
				fontSize: '1rem'
			}
		},
		'& dd.wrench': {
			display: 'list-item',
			marginLeft: '2ch',
			'&::marker': {
				content: '"🔧 "',
				fontSize: '1rem'
			}
		}
	}
})

const ProjectFeatureList = ({ listIcon, features, tech }) => {
	const styles = useStyles(listIcon)()

	//create a function that takes in a marker icon
	//	and returns a list item style with that marker icon	
	const createListItemStyle = useCallback((markerIcon) => makeStyles({
		root: {
			display: 'list-item',
			marginLeft: '2ch',
			'&::marker': {
				content: '"' + markerIcon + ' "',
				fontSize: '1rem'
			}
		}
	}), [])

	return (
		<dl className={styles.detailList}>
			{features.map((feature, index) => (
				<dd key={index} className={
					feature?.icon && feature.icon !== undefined ?
					createListItemStyle(feature.icon)().root
					: 'detail-item'}
				>
					{feature.text ?? feature}
				</dd>
			))}
			<dd className='wrench'>Built with <b>{tech.join(', ')}</b></dd>
		</dl>
	);
}
export default ProjectFeatureList