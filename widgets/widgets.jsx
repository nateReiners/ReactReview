import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';


document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");

  let tabs = [
    {title: "Tab 1", content: 'This is the first tab'},
    {title: "Tab 2", content: 'This is the second tab'},
    {title: "Tab 3", content: 'This is the third tab'},
    {title: "Tab 4", content: 'This is the fourth tab'},

  ]

  ReactDOM.render(<Tabs tabs={tabs}/>, root);
});
