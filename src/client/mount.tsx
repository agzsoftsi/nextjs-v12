import React from "react";
import ReactDOM from "react-dom";
import HomeContent from "@/components/HomeContent";

declare global {
  interface Window {
    MySpaApp?: (props: any) => JSX.Element;
    MySpaMount?: (container: HTMLElement, props: any) => void;
  }
}

window.MySpaApp = (props: any) => React.createElement(HomeContent, props);

window.MySpaMount = (container: HTMLElement, props: any) => {
  ReactDOM.render(React.createElement(HomeContent, props), container);
};
