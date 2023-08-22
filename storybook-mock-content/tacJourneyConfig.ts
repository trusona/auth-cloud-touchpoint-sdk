// import {GlobalStyles} from "../src/app/journey-config.model";

const tacJourneyConfig = {
  global: {
    obfuscateUsername: false,
    // Url or base64 string
    "headerNavLogo": '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="16.34 22.55 166.1 31.8">   <path d="M53.2015 28.4625H68.1124V31.8375H62.5171V48.3344H58.7968V31.8359H53.2015V28.4625Z" fill="#19064E"/>   <path d="M100.192 41.325V28.4625H103.884V41.3266C103.884 45.7687 100.395 48.6234 96.3563 48.6234C92.3172 48.6234 88.8 45.7672 88.8 41.3266V28.4625H92.55V41.3266C92.55 43.6344 94.3375 45.1344 96.3579 45.1344C98.3782 45.1344 100.192 43.6328 100.192 41.325Z" fill="#19064E"/>   <path d="M110.781 42.5375C110.839 43.9797 112.08 45.3344 114.219 45.3344C116.209 45.3344 117.42 44.2969 117.5 42.9406C117.586 41.6141 116.692 40.7531 114.759 40.2297L112.308 39.5953C107.981 38.3266 107.289 35.8172 107.289 34.0578C107.289 30.5672 110.317 28.2313 113.981 28.2313C117.731 28.2313 120.586 30.5094 120.586 34.2297H116.897C116.897 32.6672 115.772 31.6344 113.928 31.6344C112.284 31.6344 110.959 32.5578 110.959 33.9781C110.959 34.6125 111.191 35.6797 113.325 36.2563L115.777 36.9766C120.219 38.1891 121.372 40.6969 121.198 43.0328C121.025 46.6094 117.853 48.6578 114.219 48.6578C109.98 48.6578 107.095 45.9469 107.095 42.5438L110.781 42.5375Z" fill="#7B46D1"/>   <path d="M161.495 48.3344H158.125L150.453 35.2687V48.3344H146.786V28.4625H150.224L157.81 41.3844V28.4625H161.502L161.495 48.3344Z" fill="#7B46D1"/>   <path d="M80.4594 41.1234C83.9781 40.5469 85.5062 37.7484 85.5062 34.8937C85.5062 31.6641 83.5453 28.4625 79.1609 28.4625H71.2015V48.3344H74.8937V31.75H78.989C80.8343 31.75 81.6703 33.4516 81.6703 34.8937C81.6703 36.3656 80.8047 37.9797 78.8719 37.9797H76.6844V41.6578L81.0937 48.3344H85.5359L80.4594 41.1234Z" fill="#19064E"/>   <path d="M169.317 43.5172L167.498 48.3344H163.577L171.019 28.4625H174.998L182.439 48.3344H178.545L176.728 43.5172H171.047L172.253 40.2875H175.517L173.008 32.7016L170.556 40.2875L169.317 43.5172Z" fill="#7B46D1"/>   <path d="M133.428 31.9203C134.697 31.9203 135.937 32.2965 136.992 33.0013C138.046 33.7061 138.868 34.7078 139.354 35.8798C139.839 37.0518 139.966 38.3415 139.719 39.5857C139.471 40.8299 138.861 41.9728 137.963 42.8698C137.066 43.7668 135.924 44.3777 134.679 44.6252C133.435 44.8727 132.146 44.7457 130.974 44.2602C129.801 43.7747 128.8 42.9526 128.095 41.8978C127.39 40.8431 127.014 39.603 127.014 38.3344C127.016 36.6339 127.693 35.0037 128.895 33.8012C130.097 32.5988 131.728 31.9224 133.428 31.9203ZM133.428 28.2C131.424 28.2 129.464 28.7944 127.798 29.908C126.131 31.0215 124.832 32.6043 124.065 34.4561C123.298 36.3079 123.097 38.3456 123.488 40.3115C123.879 42.2774 124.845 44.0832 126.262 45.5005C127.679 46.9178 129.485 47.883 131.451 48.274C133.417 48.6651 135.455 48.4644 137.306 47.6973C139.158 46.9303 140.741 45.6313 141.854 43.9647C142.968 42.2982 143.562 40.3388 143.562 38.3344C143.562 35.6466 142.495 33.0689 140.594 31.1683C138.694 29.2677 136.116 28.2 133.428 28.2Z" fill="#7B46D1"/>   <path d="M24.2422 34.8891H41.4953V33.6016H22.9453C22.9449 33.7715 22.9782 33.9399 23.0434 34.0969C23.1085 34.2539 23.2042 34.3965 23.3248 34.5162C23.4454 34.636 23.5886 34.7306 23.7461 34.7946C23.9036 34.8586 24.0722 34.8907 24.2422 34.8891Z" fill="#7B46D1"/>   <path d="M34.1578 36.1703H32.8766V48.3578H34.1578V36.1703Z" fill="#7B46D1"/>   <path d="M32.236 22.55C29.0916 22.55 26.0178 23.4824 23.4033 25.2294C20.7888 26.9763 18.751 29.4593 17.5477 32.3644C16.3444 35.2694 16.0296 38.4661 16.643 41.5501C17.2565 44.6341 18.7706 47.4669 20.9941 49.6903C23.2175 51.9138 26.0503 53.4279 29.1343 54.0414C32.2183 54.6548 35.415 54.34 38.32 53.1367C41.2251 51.9333 43.7081 49.8956 45.455 47.2811C47.202 44.6666 48.1344 41.5928 48.1344 38.4484C48.1344 34.2319 46.4594 30.1881 43.4779 27.2065C40.4963 24.225 36.4525 22.55 32.236 22.55ZM42.7922 36.1703H35.4391V49.639H31.5985C31.2617 49.6403 30.928 49.5749 30.6165 49.4467C30.3051 49.3185 30.0221 49.1299 29.7838 48.8919C29.5455 48.6539 29.3566 48.3711 29.228 48.0598C29.0994 47.7486 29.0336 47.4149 29.0344 47.0781V36.1703H24.2422C23.9057 36.1709 23.5724 36.1051 23.2615 35.9766C22.9505 35.8481 22.6679 35.6595 22.43 35.4216C22.1921 35.1837 22.0034 34.9011 21.875 34.5901C21.7465 34.2791 21.6807 33.9458 21.6813 33.6094V29.7656H40.2313C40.9099 29.7677 41.56 30.0381 42.0399 30.518C42.5197 30.9978 42.7902 31.648 42.7922 32.3265V36.1703Z" fill="#7B46D1"/>   <path d="M40.2312 31.0469H22.9594V32.3281H41.5078C41.5082 32.1601 41.4755 31.9937 41.4115 31.8384C41.3476 31.6831 41.2536 31.5419 41.1351 31.4229C41.0165 31.3039 40.8757 31.2094 40.7206 31.1449C40.5655 31.0804 40.3992 31.0471 40.2312 31.0469Z" fill="#7B46D1"/>   <path d="M30.3125 47.0766C30.3125 47.4164 30.4475 47.7423 30.6878 47.9825C30.928 48.2228 31.2539 48.3578 31.5937 48.3578V36.1703H30.3125V47.0766Z" fill="#7B46D1"/> </svg>',
    // Px value or auto (default)
    "headerNavLogoHeight": "auto",
    // Px value or auto (default)
    "headerNavLogoWidth": "200px",
    // Custom text or "" (default)
    "headerNavLogoAlt": "Trusona",
    "headerNavStyle" : "box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);",
    "headerNavShowSecureMsg": true,
    "footerContent": '<div class="auth-help"><strong>Need help?</strong>&nbsp; Contact Trusona support.</div>',
    "footerStyle": "background-color: #FAFAFA;",
    "tacContainerBackgroundColor": "",
    "tacContainerShowSecondColumn": true,

    "primaryFontUrl": "https://www.trusona.com/wp-content/themes/trusona/html/app/assets/fonts/Regular/SofiaPro-Regular.woff2?v=1.1.0",
    "primaryFontType": "woff2",
    "primaryFontFamily": "SofiaPro",
    "primaryFontFaceStyleDeclaration": "@font-face {font-family: 'SofiaPro';src: url('https://www.trusona.com/wp-content/themes/trusona/html/app/assets/fonts/Regular/SofiaPro-Regular.woff2?v=1.1.0') format('woff2');}",
    spinnerIcon: `<svg class="animate-spin" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 1.75V5.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13 24.25V20.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.05078 5.04004L7.70078 7.69004" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.9508 20.9501L18.3008 18.3" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.75 13H5.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24.25 13H20.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.05078 20.9501L7.70078 18.3" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.9508 5.04004L18.3008 7.69004" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    rightArrowIcon: '<svg width="10" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.5L1 10.2631L1 0.73686L7 5.5Z" fill="black"></path></svg>',
    downArrowIcon: '<svg width="10" height="11" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6.5L0.236861 0.5L9.76314 0.5L5 6.5Z" fill="black"></path></svg>',
    backArrowIcon: `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14258 12.9785H20.1426" stroke="black" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M11.7383 21.7858L2.41798 13.5793C2.08969 13.283 2.05766 12.7786 2.35393 12.4423C2.37795 12.4102 2.40197 12.3862 2.42599 12.3702L11.7599 4.16211" stroke="black" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    biometricIcon: 'none',
    macOSBiometricIcon: 'none',
    biometricSuccessIcon: 'none',
    macOSBiometricSuccessIcon: 'none',
    checkmarkIcon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.3043 16C31.3043 24.4524 24.4524 31.3043 16 31.3043C7.54764 31.3043 0.695652 24.4524 0.695652 16C0.695652 7.54764 7.54764 0.695652 16 0.695652C24.4524 0.695652 31.3043 7.54764 31.3043 16Z" fill="white" stroke="black" stroke-width="1.3913" stroke-linecap="round"></path>
    <path d="M8.40015 16.7622L12.9601 21.3337L23.6001 10.667" stroke="black" stroke-width="1.3913" stroke-linecap="round"></path></svg>`,
    emailIcon: 'none',
    emailLabel:'Work Email',
    emailInputPlaceholderText: 'Enter your work email.',
    signInWithEmailIcon: 'none',
    buttonStyle: null,
    heading1Style: `margin-bottom: 2.5rem`,
    heading2Style: null,
    heading3Style: null,
    paragraphStyle: null,
    smallParagraphStyle: null,
    strongParagraphStyle: null,
    componentWidthStyle: "width:250px;",
    hideLearnMore: false
  },
  otpSignIn: {
    headline: 'Sign in',
    hideHeadline: false,
    buttonText: 'Continue',
    message: 'Enter code sent to your email.',
    hideMessage: false,
  },
  signInWithBiometricPrompt: {
    headline: "Login",
    hideHeadline: false,
    message: 'By continuing, you agree to our privacy policy and terms of use.',
    hideMessage: false,
    usernameControlText: 'Email',
    hideUsernameControlText: false,
    usernameFieldHint: 'Enter Email',
    hideUsernameFieldHint: false,
    buttonText: "Continue",
    disablePasswordSignIn: true,
    passwordSignInText: undefined
  },
  successfulUpgrade: {
    headline: 'Successfully added',
    bodyText: 'Your new sign-in for this account is ready to use.',
    buttonText: 'Done',
    hideIcon: false
  },
  upgradePrompt: {
    headline: 'Enable Simple Sign-In',
    bodyText: 'Add a safe and easy way to sign in to your account.',
    buttonText: 'Continue',
    learnMoreText: 'Learn More',
    learnMoreContent: `<p>Simple Sign-In lets you sign in securely without relying on a password by keeping your login information securely on your device. Nowhere else.</p>
      <p>How it works:</p>
      <ul style="margin: 15px; padding: 0;">
          <li>Simple Sign-In makes signing into your online accounts much easier, while keeping your info safe from hackers.</li>
          <li>Once you&#39;ve registered your computer&#39;s PIN, facial recognition, fingerprint, or security key, Simple Sign-In verifies it&#39;s really you and doesn&#39;t transmit any of your login information over the internet.</li>
          <li>Easy, safe—and private!</li>
          <li>Registering with Simple Sign-In provides you with an additional login option for this device—your password remains valid.</li>
          <li>Leading companies worldwide in retail, telecommunications, finance and technology are already using Simple Sign-In. The technology is called FIDO.</li>
      </ul>`,
    maybeLaterText: 'Maybe Later',
    hideIcon: false
  },
  platformSpecificIcons: {
    biometricIcon: 'none',
    biometricSuccessIcon: 'none',
  },
  createPasskey: {
    headline: "Create passkey",
    hideHeadline: false,
    buttonText: "Create passkey",
    hideIcon: false,
    message: "By continuing, you agree to our privacy policy and terms of use.",
    hideMessage: false,
    skipForNow: "Skip for now",
    hideSkipForNow: false
  },
  passwordSignIn: {
    headline: 'Sign in',
    hideHeadline: false,
    inputLabel: 'Password',
    hideInputLabel: false,
    inputHint: 'Enter Password',
    hideInputHint: false,
    buttonText: 'Continue',
    message: 'By continuing, you agree to our privacy policy and terms of use.',
    hideMessage: false,
    hidePasswordToggle: false
  }
}

export default tacJourneyConfig;
