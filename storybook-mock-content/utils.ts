import defaultJourneyConfig from './defaultJourneyConfig';
import ourCrowdJourneyConfig from "./ourCrowdJourneyConfig";
import tacJourneyConfig from "./tacJourneyConfig";
import nswJourneyConfig from "./nswJourneyConfig";

export const mergeDefaults = (remoteConfig: any): any => {
  return {
    global: {
      ...defaultJourneyConfig.global,
      ...remoteConfig.global
    },
    signInWithBiometricPrompt: {
      ...defaultJourneyConfig.signInWithBiometricPrompt,
      ...Object.fromEntries(Object.entries(remoteConfig.signInWithBiometricPrompt).filter(([_, value]) => value))
    },
    successfulUpgrade: {
      ...defaultJourneyConfig.successfulUpgrade,
      ...Object.fromEntries(Object.entries(remoteConfig.successfulUpgrade).filter(([_, value]) => value))
    },
    upgradePrompt: {
      ...defaultJourneyConfig.upgradePrompt,
      ...Object.fromEntries(Object.entries(remoteConfig.upgradePrompt).filter(([_, value]) => value))
    },
    platformSpecificIcons:{
      ...defaultJourneyConfig.platformSpecificIcons,
      ...Object.fromEntries(Object.entries(remoteConfig.platformSpecificIcons).filter(([_, value]) => value))
    }
  };
}

export const getConfigs = (config:string) => {
  if(config === 'ourCrowd'){
    return mergeDefaults(ourCrowdJourneyConfig)
  } else if(config === 'TAC'){
    return mergeDefaults(tacJourneyConfig)
  } else if(config === 'NSW'){
    return mergeDefaults(nswJourneyConfig)
  }

  return {...defaultJourneyConfig};
}
