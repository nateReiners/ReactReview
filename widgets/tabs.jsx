import React from 'react';

class Tabs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTabIndex: 1
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(idx) {
    return (

    () => {
      this.setState({ selectedTabIndex: idx });
    }
  ).bind(this);
  }

  logIdx(idx) {
    console.log(89);
  }

  render() {
    let active_title = this.props.tabs[this.state.selectedTabIndex].title;
    let content = this.props.tabs[this.state.selectedTabIndex].content;
    let titles = this.props.tabs.map((tab,idx) => {
      let klass = '';
      if (idx === this.state.selectedTabIndex) {
        klass = 'active';
      }
      return (
        <h4 key={idx} onClick={this.selectTab(idx)} className={klass}>
          {tab.title}
        </h4>
      );
    })
    return (
      <div className="tabs-widget">
        <h1>Tabs Widget</h1>
        <ul className="titles">
          {titles}
        </ul>
        <br></br>
        <div className="content">
          {content}
        </div>
      </div>
    );
  };
};

export default Tabs;
