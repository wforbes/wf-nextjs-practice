import styles from '../../styles/Pictures.module.css'
const PhotoPlaceholders = ({ maxPageTotal }) => {
	return (
		<>
			{
				[...Array(maxPageTotal)].map((element, index) => (
					<div className={styles.thumb} key={`photo-${index}`}>
						<div className={[styles.imgPlaceholder, styles.photo].join(' ')} ></div>
						<div className={styles.imgPlaceholderCaption}></div>
					</div>
				))
			}
		</>
	)
}
 
export default PhotoPlaceholders;