import { FunctionComponent, useCallback } from 'react';
import styles from './UpgradeScreen.module.css';


const UpgradeScreen:FunctionComponent = () => {
  	
  	const onFrameContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.upgradeScreen}>
      			<div className={styles.frameParent}>
        				<div className={styles.arrowBackParent}>
          					<img className={styles.arrowBackIcon} alt="" src="arrow_back.png" />
          					<div className={styles.groupParent}>
            						<img className={styles.instanceChild} alt="" src="Group 9.png" />
            						<div className={styles.valeriVisuals}>Valeri Visuals</div>
          					</div>
        				</div>
        				<div className={styles.frameGroup}>
          					<div className={styles.groupContainer}>
            						<img className={styles.frameChild} alt="" src="Group 10.png" />
            						<b className={styles.portalPlus}>Portal Plus</b>
          					</div>
          					<div className={styles.accessOver3000Container}>
            						<p className={styles.perYear}>{`Access over 3000 quality courses for creative skills starting at just `}</p>
            						<p className={styles.perYear}>600 per year!</p>
          					</div>
        				</div>
      			</div>
      			<div className={styles.whyJoinPortalPlusParent}>
        				<div className={styles.whyJoinPortal}>Why join Portal Plus?</div>
          					<img className={styles.frameItem} alt="" src="Line 11.png" />
          					<div className={styles.frameContainer}>
            						<div className={styles.vectorParent}>
              							<img className={styles.vectorIcon} alt="" src="Vector.png" />
              							<div className={styles.adFreeLearningParent}>
                								<div className={styles.adFreeLearning}>{`Ad-Free learning! `}</div>
                								<div className={styles.noMoreDisturbances}>No more disturbances. Just you, your dream and our instructors!</div>
              							</div>
            						</div>
            						<div className={styles.vectorParent}>
              							<img className={styles.frameInner} alt="" src="Group 1410117305.png" />
              							<div className={styles.onlyTheBestForYouParent}>
                								<div className={styles.adFreeLearning}>Only the best for you!</div>
                								<div className={styles.noMoreDisturbances}>Gain access to high quality premium courses</div>
              							</div>
            						</div>
            						<div className={styles.vectorParent}>
              							<img className={styles.groupIcon} alt="" src="Group 1410117306.png" />
              							<div className={styles.onlyTheBestForYouParent}>
                								<div className={styles.adFreeLearning}>
                  									<p className={styles.perYear}>{`Didn’t get a concept? `}</p>
                  									<p className={styles.perYear}>Talk it out!</p>
                								</div>
                								<div className={styles.noMoreDisturbances}>Access to discussion forums moderated by instructors!</div>
              							</div>
            						</div>
            						<div className={styles.vectorParent}>
              							<img className={styles.vectorIcon} alt="" src="Group.png" />
              							<div className={styles.onlyTheBestForYouParent}>
                								<div className={styles.adFreeLearning}>Your wallet is in safe hands</div>
                  									<div className={styles.noMoreDisturbances}>
                    										<p className={styles.perYear}>{`High quality content starting at just `}</p>
                    										<p className={styles.perYear}>600 per year!</p>
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.getPortalPlusWrapper} onClick={onFrameContainerClick}>
            						<div className={styles.getPortalPlus}>Get Portal Plus!</div>
          					</div>
          					</div>);
        				};
        				
        				export default UpgradeScreen;
        				