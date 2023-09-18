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
    font-family: Arial, sans-serif;
  }
  
  .text-center {
    text-align: center;
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
`
