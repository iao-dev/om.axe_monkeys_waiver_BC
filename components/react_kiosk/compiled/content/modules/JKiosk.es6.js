// e30829b9589fb7577ccfb9e827ec2a49
// Compiled from components/react_kiosk/content/modules/JKiosk.es6.js
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');

var F8ReactComponent = require('react-core/F8ReactComponent');
var PageURL = require("core/PageURL");

var JKiosk = function (_F8ReactComponent) {
    _inherits(JKiosk, _F8ReactComponent);

    function JKiosk(props) {
        _classCallCheck(this, JKiosk);

        var _this = _possibleConstructorReturn(this, (JKiosk.__proto__ || Object.getPrototypeOf(JKiosk)).call(this, props));

        _this.state = {
            title: "",
            welcometitle: "",
            page: "",
            icon: "fa fa-" + _this.props.attributes.icon.split(":")[1]
        };
        return _this;
    }

    _createClass(JKiosk, [{
        key: 'handleCardClick',
        value: function handleCardClick(tableNumber) {
            var viewName = this.props.attributes.page;
            //	var bucketName = 'sales';
            var tableNum = tableNumber;
            //var bucketName = tableNumber;
            var pageURL = new PageURL();

            pageURL.clearParms();
            pageURL.setLastPage(viewName + "?t=" + tableNum);
            //  pageURL.setLastPage(" " + viewName + "" + bucketName);
            pageURL.setSpaceName(pageURL.getSpaceName());
            //pageURL.setSpaceName('ignacio_space');
            this.props.baseComponent.navigate(pageURL);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { className: 'container-fluid' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-md-12 text-center' },
                        React.createElement('img', { src: './images/Axemonkeys_logohat_web.png', alt: 'Axe Monkeys logo', width: '200' }),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'h1',
                                null,
                                ' ',
                                this.props.attributes.welcometitle
                            )
                        )
                    )
                ),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('01');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 1'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('02');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 2'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('03');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 3'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('04');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 4'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('05');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 5'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('06');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 6'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('07');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 7'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('08');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 8'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('09');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 9'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('10');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 10'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('11');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 11'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('12');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 12'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('13');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 13'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6 col-md-4 text-center' },
                        React.createElement(
                            'div',
                            { className: 'alert_card', onClick: function onClick() {
                                    return _this2.handleCardClick('14');
                                } },
                            React.createElement(
                                'p',
                                { className: 'title' },
                                this.props.attributes.title,
                                ' 14'
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement('i', { className: this.state.icon })
                            )
                        ),
                        React.createElement('br', null)
                    )
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ title: this.props.attributes.title, bucket: this.props.attributes.bucket, slot: this.props.attributes.welcometitle, page: this.props.attributes.welcometitle });
        }
    }]);

    return JKiosk;
}(F8ReactComponent);

module.exports = JKiosk;
