import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-display: swap;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  background: linear-gradient(to right, #808080, #9e9e9e); /* Keeping the background consistent */
}

#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

/* Light Mode */
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff; /* This changes only text and root background color */
  }
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  }
}

`;
