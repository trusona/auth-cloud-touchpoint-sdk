// import {GlobalStyles} from "../src/app/journey-config.model";

const tacJourneyConfig = {
  global: {
    obfuscateUsername: false,
    // Url or base64 string
    "headerNavLogo": '<svg viewBox="0 0 259 280" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2079 270.207H19.1749H19.1625V265.93L30.3122 265.984V279.66H26.0807V277.169C25.8149 277.447 25.5284 277.725 25.2211 278.002C24.5484 278.587 23.7303 279.072 22.7877 279.436C21.8284 279.809 20.645 280 19.2746 280C16.945 280 14.8895 279.461 13.1662 278.4C11.4387 277.335 10.0933 275.806 9.15894 273.862C8.23291 271.935 7.76367 269.631 7.76367 267.012C7.76367 264.355 8.25783 262.018 9.23368 260.066C10.2054 258.106 11.5965 256.568 13.3655 255.495C15.1345 254.43 17.2149 253.891 19.5487 253.891C21.0644 253.891 22.4638 254.136 23.7054 254.616C24.9595 255.101 26.0641 255.773 26.9776 256.601C27.9078 257.439 28.6428 258.396 29.1702 259.453C29.6976 260.501 29.9882 261.62 30.0422 262.772L30.063 263.207H24.0252L23.9629 262.868C23.83 262.155 23.5559 261.488 23.149 260.887C22.7503 260.294 22.2312 259.809 21.6125 259.457C20.9979 259.105 20.2671 258.926 19.4366 258.926C18.4316 258.926 17.5056 259.187 16.6959 259.701C15.8903 260.211 15.2383 261.052 14.7608 262.196C14.2749 263.365 14.0299 264.936 14.0299 266.875C14.0299 268.454 14.1919 269.772 14.5116 270.8C14.823 271.811 15.2508 272.619 15.7781 273.203C16.3014 273.784 16.8952 274.194 17.5513 274.422C18.2157 274.666 18.9175 274.791 19.64 274.791C20.3086 274.791 20.9107 274.679 21.4298 274.463C21.953 274.239 22.4098 273.949 22.7835 273.597C23.1614 273.241 23.4604 272.851 23.668 272.445C23.884 272.035 24.0168 271.629 24.0667 271.235L24.2079 270.207ZM45.0858 253.895C47.4403 253.895 49.5207 254.429 51.2648 255.482C53.0172 256.543 54.3959 258.072 55.3509 260.028C56.2977 261.963 56.7794 264.309 56.7794 266.995C56.7794 269.643 56.306 271.964 55.3675 273.895C54.4208 275.843 53.0504 277.364 51.2939 278.416C49.5498 279.469 47.4569 279.999 45.0816 279.999C42.6856 279.999 40.5802 279.465 38.8279 278.416C37.0755 277.372 35.6927 275.859 34.7293 273.911C33.7825 271.984 33.3008 269.659 33.3008 266.999C33.3008 264.326 33.7866 261.984 34.75 260.045C35.7176 258.089 37.1045 256.559 38.8694 255.494C40.6342 254.433 42.723 253.895 45.0858 253.895ZM45.0858 275.08C46.2028 275.08 47.1787 274.815 47.9843 274.293C48.7857 273.77 49.4169 272.921 49.8654 271.777C50.318 270.592 50.5506 269.005 50.5506 267.065C50.5506 265.072 50.3139 263.447 49.8529 262.233C49.4086 261.052 48.7733 260.177 47.9677 259.63C47.1538 259.087 46.1862 258.81 45.0899 258.81C43.9895 258.81 43.0178 259.087 42.2039 259.63C41.3941 260.173 40.7505 261.052 40.2979 262.241C39.8286 263.464 39.5919 265.084 39.5919 267.061C39.5919 269.005 39.8286 270.592 40.2937 271.773C40.7463 272.921 41.3858 273.77 42.1956 274.288C43.0053 274.815 43.977 275.08 45.0858 275.08ZM68.8499 272.15L62.6875 254.321H57.0898L65.7438 279.572H71.9395L80.6682 254.321H75.0622L68.8499 272.15ZM99.1615 269.323H88.8631V274.529L100.906 274.545V279.572H83.1035V254.321H100.735L100.719 259.311H88.8922V264.4H99.1615V269.323ZM121.644 267.794C122.329 267.181 122.89 266.393 123.322 265.453C123.741 264.52 123.957 263.372 123.957 262.034C123.957 260.537 123.646 259.199 123.027 258.051C122.408 256.882 121.428 255.958 120.108 255.295C118.808 254.648 117.135 254.321 115.133 254.321H104.395V279.564H110.154V270.16H114.394L118.385 279.564H124.431L119.78 269.108C120.453 268.751 121.08 268.308 121.644 267.794ZM118.131 262.154C118.131 263.153 117.795 263.944 117.106 264.582C116.416 265.212 115.457 265.531 114.249 265.531H110.154V258.925H114.61C115.648 258.925 116.483 259.211 117.155 259.8C117.812 260.376 118.131 261.147 118.131 262.154ZM133.29 254.321L143.817 269.551V254.321H149.593V279.572H144.507L133.527 263.712V279.572H127.768V254.321H133.29ZM167.239 270.782L161.949 254.321H154.055V279.572H159.864V263.306L164.988 279.572H169.473L174.635 263.215V279.572H180.461V254.321H172.583L167.239 270.782ZM200.966 269.323H190.668V274.529L202.714 274.545V279.572H184.908V254.321H202.544L202.523 259.311H190.705V264.4H200.966V269.323ZM222.46 269.551L211.937 254.321H206.41V279.572H212.166V263.712L223.145 279.572H228.232V254.321H222.46V269.551ZM238.046 259.547H230.658V254.321H251.06V259.547H243.843V279.572H238.046V259.547Z" fill="#002664"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M146.699 209.236C145.217 206.841 142.982 204.665 140.059 202.771C137.14 200.877 133.162 199.431 128.249 198.474L114.571 195.66C110.439 194.769 107.59 193.617 106.103 192.241C104.654 190.898 103.919 189.112 103.919 186.932C103.919 185.544 104.235 184.28 104.862 183.173C105.485 182.062 106.39 181.08 107.549 180.251C108.715 179.423 110.165 178.768 111.855 178.308C113.566 177.839 115.488 177.603 117.569 177.603C120.309 177.603 122.78 177.964 124.915 178.681C127.024 179.394 128.772 180.562 130.109 182.162C131.447 183.762 132.269 185.937 132.551 188.627L132.589 189H149.56L149.552 188.573C149.477 183.998 148.181 179.8 145.702 176.099C143.219 172.394 139.561 169.418 134.823 167.247C130.097 165.083 124.2 163.985 117.295 163.985C111.494 163.985 106.178 164.996 101.49 166.994C96.7893 168.996 93.0146 171.884 90.278 175.581C87.529 179.298 86.1587 183.745 86.2002 188.805C86.3123 194.98 88.1893 199.991 91.7771 203.708C95.3525 207.405 100.253 209.866 106.344 211.014L120.139 213.824C122.668 214.326 124.964 214.984 126.962 215.784C128.922 216.568 130.487 217.587 131.613 218.814C132.713 220.011 133.27 221.586 133.27 223.484C133.27 225.598 132.576 227.384 131.21 228.785C129.81 230.219 127.909 231.3 125.567 232.009C123.179 232.73 120.509 233.095 117.631 233.095C114.824 233.095 112.237 232.66 109.945 231.798C107.665 230.948 105.751 229.705 104.256 228.105C102.765 226.514 101.743 224.52 101.216 222.187L101.141 221.86H83.8457L83.8914 222.32C84.2983 226.365 85.5566 229.949 87.6287 232.979C89.6967 235.988 92.346 238.524 95.502 240.53C98.6496 242.523 102.179 244.044 105.996 245.043C109.803 246.037 113.74 246.543 117.689 246.543C124.155 246.543 129.889 245.524 134.735 243.509C139.602 241.487 143.452 238.702 146.184 235.233C148.937 231.74 150.332 227.757 150.332 223.385C150.332 221.321 150.1 219.025 149.635 216.563C149.157 214.081 148.169 211.615 146.699 209.236ZM25.9368 191.763L62.8532 245.075H77.8689V165.351H61.0717V216.633L25.7541 165.53L25.6295 165.351H9.18945V245.075H25.9368V191.763ZM222.574 216.34L236.962 165.353H253.419L229.832 245.077H216.465L201.911 194.608L187.252 245.077H174.105L150.572 165.353H167.083L181.467 216.332L195.856 165.353H208.023L222.574 216.34Z" fill="#002664"/> <path d="M122.291 145.572C102.541 143.148 83.3565 149.476 49.6002 140.309C46.1536 139.372 44.8829 143.003 46.7474 146.045C55.8166 160.848 101.628 149.248 122.382 147.11C123.288 147.015 123.196 145.684 122.291 145.572Z" fill="#D7153A"/> <path d="M59.8819 119.132C53.0177 109.074 47.4076 97.8218 43.064 85.4429C29.9626 89.268 16.554 94.7882 2.90445 102.012C1.13961 102.944 0.0557817 104.693 0.00179824 106.682C-0.0480326 108.672 0.940279 110.47 2.65529 111.494C29.0864 127.296 54.9279 136.335 79.5858 138.427C72.2441 133.952 65.5128 127.383 59.8819 119.132Z" fill="#D7153A"/> <path d="M23.0586 85.5128C29.1047 83.0967 35.0969 81.0245 41.0351 79.2798C38.909 72.3837 37.1649 65.1603 35.7862 57.6218C28.9594 56.7723 21.8959 56.2211 14.5873 55.9807C14.525 55.9807 14.4586 55.9766 14.3963 55.9766C12.482 55.9766 10.7545 56.938 9.74958 58.5792C8.71144 60.27 8.66576 62.3214 9.62916 64.062C13.8731 71.7206 18.3537 78.8695 23.0586 85.5128Z" fill="#D7153A"/> <path d="M88.0053 135.572C92.1039 137.379 96.298 138.39 100.363 138.601C90.4097 131.481 82.5904 119.409 78.0848 104.021C72.2795 84.2118 70.3403 62.3549 72.2546 38.774C64.4228 33.8382 55.935 29.2173 46.7952 24.9239C45.0303 24.095 43.0122 24.2566 41.3927 25.3549C39.7773 26.449 38.8845 28.26 39.0049 30.1954C41.1311 64.4105 49.9553 93.1096 65.2285 115.493C71.6317 124.884 79.5092 131.825 88.0053 135.572Z" fill="#D7153A"/> <path d="M125.713 95.261C123.686 90.5366 121.452 86.0815 117.985 81.0752C108.176 66.9142 94.9588 54.1416 78.5104 42.8899C78.3402 45.5422 75.94 74.1874 84.3614 102.194C90.7688 123.496 101.715 132.174 107.715 135.527C113.753 138.896 119.276 139.692 125.754 138.084C119.189 129.149 120.007 110.814 125.713 95.261Z" fill="#D7153A"/> <path d="M107.488 23.5772C102.803 17.8995 97.7207 12.2841 92.2352 6.73487C91.1721 5.65736 89.8018 5.08545 88.3857 5.08545C87.8791 5.08545 87.3684 5.16005 86.8617 5.30924C84.9391 5.87701 83.548 7.41453 83.1286 9.4245C82.0572 14.5883 80.0183 25.1147 79.1172 35.5251C86.1309 40.1377 92.6089 45.0155 98.5429 50.1461C100.843 41.3893 103.833 32.5164 107.488 23.5772Z" fill="#D7153A"/> <path d="M129.144 87.2286C135.784 74.1368 146.39 62.4003 154.354 54.9862C149.982 37.2073 143.25 20.4354 133.957 2.88856C132.998 1.07751 131.195 0 129.148 0C127.101 0 125.303 1.08165 124.34 2.88856C114.951 20.4934 108.103 38.0112 103.963 54.982C112.276 62.6696 123.243 75.2061 129.144 87.2286Z" fill="#D7153A"/> <path d="M153.541 133.686C160.426 128.853 167.311 120.432 171.68 108.716C180.138 86.0347 181.014 60.7712 179.802 42.8928C164.471 53.1085 140.137 74.4432 131.827 97.2532C127.916 107.987 126.093 122.608 129.107 130.764C130.366 134.175 132.508 136.761 135.452 137.991C139.912 139.856 146.764 138.447 153.541 133.686Z" fill="#D7153A"/> <path d="M180.247 104.025C175.742 119.409 167.918 131.485 157.969 138.605C162.034 138.394 166.232 137.378 170.327 135.571C178.823 131.825 186.7 124.883 193.104 115.496C208.377 93.1132 217.201 64.4142 219.327 30.199C219.448 28.2637 218.555 26.4526 216.939 25.3585C215.32 24.2603 213.302 24.0987 211.537 24.9275C202.397 29.2169 193.909 33.8377 186.077 38.7777C187.992 62.3586 186.048 84.2113 180.247 104.025Z" fill="#D7153A"/> <path d="M235.273 85.5133C239.978 78.87 244.459 71.717 248.703 64.0584C249.666 62.3178 249.625 60.2705 248.582 58.5755C247.577 56.9385 245.85 55.9729 243.936 55.9729C243.873 55.9729 243.807 55.9729 243.745 55.977C236.436 56.2174 229.368 56.7727 222.546 57.6182C221.171 65.1566 219.423 72.3801 217.297 79.2761C223.235 81.025 229.231 83.1013 235.273 85.5133Z" fill="#D7153A"/> <path d="M255.42 102.007C241.77 94.7836 228.362 89.2634 215.26 85.4382C210.917 97.8172 205.307 109.069 198.442 119.127C192.812 127.382 186.08 133.947 178.734 138.423C203.392 136.33 229.234 127.291 255.665 111.489C257.38 110.465 258.372 108.667 258.318 106.678C258.273 104.688 257.185 102.944 255.42 102.007Z" fill="#D7153A"/> <path d="M208.735 140.309C174.979 149.476 155.794 143.148 136.044 145.572C135.139 145.684 135.044 147.019 135.953 147.11C156.712 149.248 202.519 160.848 211.588 146.045C213.452 143.003 212.182 139.372 208.735 140.309Z" fill="#D7153A"/> </svg>',
    // Px/rem value or auto (default)
    "headerNavLogoHeight": "auto",
    // Px value or auto (default)
    "headerNavLogoWidth": "62px",
    // Custom text or "" (default)
    "headerNavLogoAlt": "New South Wales",
    "headerNavStyle" : "border-bottom: 1px solid #CCCCCC;",
    "headerNavShowSecureMsg": true,
    "footerContent": '&copy; 2022 New South Wales&nbsp;&nbsp;&nbsp; <a style="text-decoration: underline" href="https://www.nsw.gov.au/privacy-statement" title="Privacy and Terms">Privacy and Terms</a>',
    "footerStyle": "border-top: 1px solid #CCCCCC;font-size: 18px",

    "tacContainerBackgroundColor": "white",
    "tacContainerShowSecondColumn": false,

    "primaryFontUrl": "https://fonts.gstatic.com/s/publicsans/v14/ijwRs572Xtc6ZYQws9YVwnNIfJ7QwOk1Fig.woff2",
    "primaryFontType": "woff2",
    "primaryFontFamily": '"Public Sans"',
    "primaryFontFaceStyleDeclaration": "@font-face {font-family: 'Public Sans, sans-serif';src: url('https://fonts.gstatic.com/s/publicsans/v14/ijwRs572Xtc6ZYQws9YVwnNIfJ7QwOk1Fig.woff2') format('woff2');}",
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
    emailLabel:'Email address',
    emailInputPlaceholderText: 'Enter your email address.',
    signInWithEmailIcon: 'none',
    buttonStyle: 'background-color: #002664;color: #FFFFFF;border: 1px solid #002664;',
    heading1Style: `margin-bottom: 1.5rem; font-size:24px;line-height:26px; max-width:250px;margin: auto`,
    heading2Style: null,
    heading3Style: null,
    paragraphStyle: null,
    smallParagraphStyle: null,
    strongParagraphStyle: null,
    componentWidthStyle: "width:375px;",
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
    hideMessage: true,
    usernameControlText: 'Username',
    hideUsernameControlText: false,
    usernameFieldHint: 'Enter username',
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
