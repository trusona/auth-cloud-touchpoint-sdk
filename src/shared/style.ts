import { css } from 'lit'

export const sharedStyles = css`
:root {
  --main-bg-color: green;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: inherit;
}

  .auth-ui-input-wrapper {
    position: relative;
  }

  .auth-ui-input-wrapper .auth-ui-input {
    border: 1px solid #444444;
    border-radius: 6px;
    position: relative;
    width: 100%;
    margin-top: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    padding: 1rem;
    color: #444444;
  }

  .auth-ui-input-wrapper .auth-ui-label {
    position: absolute;
    top: .25rem;
    z-index: 1;
    left: 2em;
    background-color: white;
    padding: 0 7px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #444444;
  }

  .auth-ui-button {
    background: #FFBF3B;
    border: 1px solid #FFBF3B;
    color: #172F30;
    border-radius: 2px;
    padding: 15px 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
    justify-content: center;
    cursor: pointer;

    &:disabled {
      background-color: #cccccc !important;
      border: 2px solid #cccccc !important;
      color: #444444 !important;
      cursor: not-allowed;
    }
  }


  .reset-button {
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    width: auto;
    max-width: 100%;
    min-width: 90%;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 14px;
    text-align: center;
    color: #444444;
    background: #FAFAFA;
    border: 1px solid #EEEEEE;
    border-radius: 20px;
  }


  .reset-button__wrapper {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    white-space: normal;
    word-break: break-all;
  }

  .reset-button__wrapper span {
    white-space: normal;
    word-wrap: break-word;
  }


  .error-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 8px;
    background-color: #FEE5E5;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    color: #D14646;
    width: auto;
    min-width: 300px;
    padding: 0.65rem;
  }


  /* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */

  /* position */

  .toast-center-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .toast-top-center {
    top: 0;
    right: 0;
    width: 100%;
  }

  .toast-bottom-center {
    bottom: 0;
    right: 0;
    width: 100%;
  }

  .toast-top-full-width {
    top: 0;
    right: 0;
    width: 100%;
  }

  .toast-bottom-full-width {
    bottom: 0;
    right: 0;
    width: 100%;
  }

  .toast-top-left {
    top: 12px;
    left: 12px;
  }

  .toast-top-right {
    top: 12px;
    right: 12px;
  }

  .toast-bottom-right {
    right: 12px;
    bottom: 12px;
  }

  .toast-bottom-left {
    bottom: 12px;
    left: 12px;
  }

  /* toast styles */

  .toast-title {
    font-weight: bold;
  }

  .toast-message {
    word-wrap: break-word;
  }

  .toast-message a,
  .toast-message label {
    color: #FFFFFF;
  }

  .toast-message a:hover {
    color: #CCCCCC;
    text-decoration: none;
  }

  .toast-close-button {
    position: relative;
    right: -0.3em;
    top: -0.3em;
    float: right;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    text-shadow: 0 1px 0 #ffffff;
    /* opacity: 0.8; */
  }

  .toast-close-button:hover,
  .toast-close-button:focus {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.4;
  }

  /*Additional properties for button version
   iOS requires the button element instead of an anchor tag.
   If you want the anchor version, it requires \`href="#"\`.*/

  button.toast-close-button {
    padding: 0;
    cursor: pointer;
    background: transparent;
    border: 0;
  }

  .toast-container {
    pointer-events: none;
    position: fixed;
    z-index: 999999;
  }

  .toast-container * {
    box-sizing: border-box;
  }

  .toast-container .ngx-toastr {
    position: relative;
    overflow: hidden;
    margin: 0 0 6px;
    padding: 15px 15px 15px 50px;
    width: 300px;
    border-radius: 3px 3px 3px 3px;
    background-position: 15px center;
    background-repeat: no-repeat;
    background-size: 24px;
    box-shadow: 0 0 12px #999999;
    color: #FFFFFF;
    background-color: #7B46D1
  }

  .toast-container .ngx-toastr:hover {
    box-shadow: 0 0 12px #000000;
    opacity: 1;
    cursor: pointer;
  }

  /* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */

  .toast-info {
    background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjgwMHB4IiB3aWR0aD0iODAwcHgiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIA0KCSB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGlkPSJNYWlsIiBkPSJNNTguMDAzNDQ4NSw4SDUuOTk2NTUwNmMtMy4zMTM2Nzk1LDAtNS45OTk5OTk1LDIuNjg2MjAwMS01Ljk5OTk5OTUsNnYzNmMwLDMuMzEzNzAxNiwyLjY4NjMyMDMsNiw1Ljk5OTk5OTUsNg0KCWg1Mi4wMDY4OTdjMy4zMTM3MDE2LDAsNi0yLjY4NjI5ODQsNi02VjE0QzY0LjAwMzQ0ODUsMTAuNjg2MjAwMSw2MS4zMTcxNTAxLDgsNTguMDAzNDQ4NSw4eiBNNjIuMDAzNDQ4NSw0OS4xMTA4MDE3DQoJTDQzLjA4NDU0OSwzMC4xOTE5OTk0bDE4LjkxODg5OTUtMTIuMDU1NTk5MlY0OS4xMTA4MDE3eiBNNS45OTY1NTA2LDEwaDUyLjAwNjg5N2MyLjIwNTYwMDcsMCw0LDEuNzk0MzAwMSw0LDR2MS43NjY0MDAzDQoJTDM0LjQ2Nzc1MDUsMzMuMzEzNDAwM2MtMS40OTAyLDAuOTQ5Mjk4OS0zLjM5MzUwMTMsMC45MTk5OTgyLTQuODQ5NTk5OC0wLjA3MDMwMTFMMS45OTY1NTA4LDE0LjQ2OTQ5OTZWMTQNCglDMS45OTY1NTA4LDExLjc5NDMwMDEsMy43OTEwNTA3LDEwLDUuOTk2NTUwNiwxMHogTTEuOTk2NTUwOCwxNi44ODUyMDA1TDIxLjE4MjI1MSwyOS45MjUxMDAzTDEuOTk2NTUwOCw0OS4xMTA4MDE3VjE2Ljg4NTIwMDV6DQoJIE01OC4wMDM0NDg1LDU0SDUuOTk2NTUwNmMtMS42NDczOTk5LDAtMy4wNjM4OTk4LTEuMDAyMTAxOS0zLjY3NjA5OTgtMi40Mjc4OTg0bDIwLjUxOTkwMTMtMjAuNTIwMDAyNGw1LjY1NDc5ODUsMy44NDM0MDENCgljMS4wODU5MDEzLDAuNzM4MzAwMywyLjM0MTgwMDcsMS4xMDgzOTg0LDMuNTk5NTk5OCwxLjEwODM5ODRjMS4xOTUzMDExLDAsMi4zOTI1MDE4LTAuMzMzOTk5NiwzLjQ0NjMwMDUtMS4wMDQ4OTgxDQoJbDUuODQyMzk5Ni0zLjcyMzAwMTVsMjAuMjk2MTAwNiwyMC4yOTYxMDI1QzYxLjA2NzM0ODUsNTIuOTk3ODk4MSw1OS42NTA4NzEzLDU0LDU4LjAwMzQ0ODUsNTR6Ii8+DQo8L3N2Zz4=");
  }

  /* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */

  .toast-error {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTEyMS42IDMxMy4xYzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMzggMzc3LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwyNTYgMzEybC02NS4xIDY1LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwxMzQuNCAzMzhjLTQuNy00LjctNC43LTEyLjMgMC0xN2w2NS42LTY1LTY1LjYtNjUuMWMtNC43LTQuNy00LjctMTIuMyAwLTE3bDM5LjYtMzkuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsNjUgNjUuNyA2NS4xLTY1LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDM5LjYgMzkuNmM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzEyIDI1Nmw2NS42IDY1LjF6Jy8+PC9zdmc+");
  }

  /* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */

  .toast-success {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvPjwvc3ZnPg==");
  }

  /* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */

  .toast-warning {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyB3aWR0aD0nNTc2JyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicvPjwvc3ZnPg==");
  }

  .toast-container.toast-top-center .ngx-toastr,
  .toast-container.toast-bottom-center .ngx-toastr {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .toast-container.toast-top-full-width .ngx-toastr,
  .toast-container.toast-bottom-full-width .ngx-toastr {
    width: 96%;
    margin-left: auto;
    margin-right: auto;
  }

  .ngx-toastr {
    background-color: #030303;
    pointer-events: auto;
  }

  .toast-success {
    background-color: #51A351;
  }

  .toast-error {
    background-color: #BD362F;
  }

  .toast-info {
    background-color: #2F96B4;
  }

  .toast-warning {
    background-color: #F89406;
  }

  .toast-progress {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    background-color: #000000;
    opacity: 0.4;
  }

  /* Responsive Design */
  @media all and (max-width: 240px) {
    .toast-container .ngx-toastr.div {
      padding: 8px 8px 8px 50px;
      width: 11em;
    }

    .toast-container .toast-close-button {
      right: -0.2em;
      top: -0.2em;
    }
  }
  @media all and (min-width: 241px) and (max-width: 480px) {
    .toast-container .ngx-toastr.div {
      padding: 8px 8px 8px 50px;
      width: 18em;
    }

    .toast-container .toast-close-button {
      right: -0.2em;
      top: -0.2em;
    }
  }
  @media all and (min-width: 481px) and (max-width: 768px) {
    .toast-container .ngx-toastr.div {
      padding: 15px 15px 15px 50px;
      width: 25em;
    }
  }
`
