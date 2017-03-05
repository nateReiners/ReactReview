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
        <p key={idx} onClick={this.selectTab(idx)} className={klass}>
          {tab.title}
        </p>
      );
    })
    return (
      <div className="tabs-widget">
        <h3>Tabs Widget</h3>
        <ul className="titles">
          {titles}
        </ul>
        <br></br>
        <div className="content">
          <h4>
            {content}
          </h4>
        </div>
      </div>
    );
  };
};

export default Tabs;
