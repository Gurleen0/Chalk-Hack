import { FunctionComponent, useCallback } from 'react';
import styles from './ChoosePlan.css';


const ChoseYourPlan:FunctionComponent = () => {
  	
  	const onArrowBackIconClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.choseYourPlan}>
      			<div className={styles.frameParent}>
        				<div className={styles.arrowBackParent}>
          					<img className="arrow-back-icon" alt="" src="arrow_back.svg" onClick={onArrowBackIconClick} />
          					<div className={styles.choseYourPlan1}>Chose your plan!</div>
        				</div>
        				<div className={styles.instanceParent}>
          					<div className={styles.vectorParent}>
            						<img className={styles.vectorIcon} alt="" src="Vector.svg" />
            						<div className={styles.happyTogetherParent}>
              							<div className={styles.happyTogether}>Happy Together!</div>
              							<div className={styles.shareTheSubscriptionContainer}>
                								<span>{`Share the subscription with `}</span>
                								<span className={styles.other}>{`2 other `}</span>
                								<span>friends and save up to xyz rupees!</span>
              							</div>
            						</div>
          					</div>
          					<div className={styles.frameGroup}>
            						<img className={styles.instanceChild} alt="" src="Frame 1410117109.png" />
            						<div className={styles.happyTogetherParent}>
              							<div className={styles.happyTogether}>Solo Hustle</div>
              							<div className={styles.shareTheSubscriptionContainer}>
                								<p className={styles.youDontNeed}>You don’t need anyone keep at it.</p>
                								<p className={styles.youDontNeed}>Go get it!</p>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameContainer}>
        				<div className={styles.rectangleParent}>
          					<div className={styles.frameChild} />
          					<div className={styles.frameItem} />
          					<div className={styles.frameItem} />
        				</div>
        				<div className={styles.nextWrapper} onClick={onArrowBackIconClick}>
          					<div className={styles.next}>Next</div>
        				</div>
      			</div>
    		</div>);
};

export default ChoseYourPlan;
