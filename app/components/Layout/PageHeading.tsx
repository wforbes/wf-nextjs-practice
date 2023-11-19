'use client';
import { useRouter } from 'next/router';
import { Grid } from "@mui/material";
import classNames from 'classnames';
import globalStyles from '@/app/globals.module.css';
import styles from './pageHeading.module.css';
import pageHeadingMap from './pageHeadingMap.js';

export default function PageHeading() {
    //const router = useRouter();
    //const slug = router.query.slug;
    //console.log(slug);

    const containerClasses = classNames(
        globalStyles.containerFluid,
        globalStyles.container
    );
    return (
        <div className={containerClasses}>
            <Grid container sx={{
                marginRight: "-15px",
                marginLeft: "-15px",
                width: "auto" 
            }}>
                <Grid item>
                    <div className={styles.pageHeadingContainer}>
                        <h1 className={styles.pageHeading}>{/*pageHeading*/}</h1>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}