import {css} from 'lit'

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
  top: 0.25rem;
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

.auth-code-input-label {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  display: block;
  max-width: 215px;
  margin: auto;
}

.auth-code-input-label a {
  text-decoration: underline;
}

code-input {
  --item-height: 3.25rem;
  --item-spacing: 10px;
  --item-border: 1px solid #444444;
  --item-border-bottom: 1px solid #444444;
  --item-border-radius: 6px;
  --item-border-focused: 1px solid #444444;
  --item-border-bottom-focused: 1px solid #444444;
  --item-border-has-value: 1px solid #444444;
  --item-border-bottom-has-value: 1px solid #444444;
  --item-shadow-focused: 0px 0px 0px 6px rgba(204, 204, 204, 1.0);
}

.resendBtn {
  background: none !important;
  border: none;
  padding: 0 !important;
  color: #72a3db;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  text-align: center;
  margin-top: 0;
}

.resendBtn:hover {
  text-decoration: underline;
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
  width: 100%;
  padding: 0.65rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.items-center {
  align-items:center
}

.underline {
  text-decoration-line: underline;
}

.decoration-1 {
  text-decoration-thickness: 1px;
}

.text-red-600 {
  color: rgb(220, 38, 38);
}

.sign-in-another-way-btn {
  color: #72a3db;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
}

.margin-left-right-auto {
  margin-left: auto;
  margin-right: auto;
}

.cursor-pointer {
  cursor: pointer;
}
  
.small-paragraph {
  font-size:0.875rem;
  line-height:1.25rem
}  
  
`
