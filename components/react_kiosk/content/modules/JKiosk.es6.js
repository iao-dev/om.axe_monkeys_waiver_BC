const React = require('react');
const ReactDOM = require('react-dom');

const F8ReactComponent = require('react-core/F8ReactComponent');
var PageURL = require("core/PageURL");

    class JKiosk extends F8ReactComponent {
      constructor(props) {
        super(props);

        this.state = {
          title: "",
          welcometitle: "",
          page: "",
          icon: "fa fa-" + this.props.attributes.icon.split(":")[1],
        };
      }
handleCardClick(tableNumber) {
    var viewName = this.props.attributes.page;
    //	var bucketName = 'sales';
    var tableNum = tableNumber;
    //var bucketName = tableNumber;
    var pageURL = new PageURL();

    pageURL.clearParms();
    pageURL.setLastPage(viewName +"?t=" +  tableNum  );
	//  pageURL.setLastPage(" " + viewName + "" + bucketName);
    pageURL.setSpaceName(pageURL.getSpaceName());
    //pageURL.setSpaceName('ignacio_space');
    this.props.baseComponent.navigate(pageURL);
}

render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src="./images/Axemonkeys_logohat_web.png" alt="Axe Monkeys logo" width="200"/>
                    <div>
                        <h1> {this.props.attributes.welcometitle}</h1>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('01')}>
                        <p className="title">{this.props.attributes.title} 1</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('02')}>
                        <p className="title">{this.props.attributes.title} 2</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('03')}>
                        <p className="title">{this.props.attributes.title} 3</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('04')}>
                        <p className="title">{this.props.attributes.title} 4</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('05')}>
                        <p className="title">{this.props.attributes.title} 5</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('06')}>
                        <p className="title">{this.props.attributes.title} 6</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('07')}>
                        <p className="title">{this.props.attributes.title} 7</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('08')}>
                        <p className="title">{this.props.attributes.title} 8</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('09')}>
                        <p className="title">{this.props.attributes.title} 9</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('10')}>
                        <p className="title">{this.props.attributes.title} 10</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('11')}>
                        <p className="title">{this.props.attributes.title} 11</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('12')}>
                        <p className="title">{this.props.attributes.title} 12</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('13')}>
                        <p className="title">{this.props.attributes.title} 13</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
                <div className="col-xs-6 col-md-4 text-center">
                    <div className="alert_card" onClick={() => this.handleCardClick('14')}>
                        <p className="title">{this.props.attributes.title} 14</p>
                        <span>
                            <i className={this.state.icon}></i>
                        </span>
                    </div>
                    <br></br>
                </div>
            </div>

        </div>
    );
}
componentDidMount() {
    this.setState(
        {title: this.props.attributes.title, bucket: this.props.attributes.bucket, slot: this.props.attributes.welcometitle, page: this.props.attributes.welcometitle}
    );
}
}

module.exports = JKiosk;
