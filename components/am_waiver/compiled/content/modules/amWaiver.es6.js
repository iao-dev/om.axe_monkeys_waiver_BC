// b227b79a8409e18fb6cf78277e11fe27
// Compiled from components/am_waiver/content/modules/amWaiver.es6.js
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var ReactDOM = require("react-dom");
var F8ReactComponent = require("react-core/F8ReactComponent");
var Controller = require("am_waiver/utils/Controller");

var amWaiver = function (_F8ReactComponent) {
  _inherits(amWaiver, _F8ReactComponent);

  function amWaiver(props) {
    _classCallCheck(this, amWaiver);

    var tableNo = window.location.href;
    var bay = tableNo.slice(-2);

    var _this = _possibleConstructorReturn(this, (amWaiver.__proto__ || Object.getPrototypeOf(amWaiver)).call(this, props));

    _this.state = {
      values: [],
      bucketGA: _this.props.attributes.bucket_ga,
      isToggleOn: true,
      first_name: '',
      last_name: '',
      minor_1: '',
      minor_2: '',
      minor_3: '',
      minor_4: '',
      minor_5: '',
      minor_6: '',
      email: '',
      bay: bay
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);

    return _this;
  }

  _createClass(amWaiver, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
      // alert('A name was submitted: ' + JSON.stringify(this.state.name));
    }
  }, {
    key: "createUI",
    value: function createUI() {
      var _this2 = this;

      return this.state.values.map(function (el, i) {
        return React.createElement(
          "div",
          { key: i },
          React.createElement(
            "p",
            null,
            React.createElement(
              "b",
              null,
              "Minor"
            )
          ),
          React.createElement(
            "div",
            { className: "input-group" },
            React.createElement(
              "span",
              { className: "input-group-addon" },
              "Full name"
            ),
            React.createElement("input", { type: "text", className: "form-control", name: 'minor_' + [i], value: el || '', placeholder: "Minor full Name", onChange: _this2.handleChange.bind(_this2, i) })
          ),
          React.createElement("input", { type: "button", className: "btn btn-danger", value: "- Remove", onClick: _this2.removeClick.bind(_this2, i) }),
          React.createElement("br", null),
          React.createElement("br", null)
        );
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(i, event) {
      var values = [].concat(_toConsumableArray(this.state.values));
      values[i] = event.target.value;
      this.setState({ values: values });
    }
  }, {
    key: "addClick",
    value: function addClick() {
      this.setState(function (prevState) {
        return { values: [].concat(_toConsumableArray(prevState.values), ['']) };
      });
    }
  }, {
    key: "removeClick",
    value: function removeClick(i) {
      var values = [].concat(_toConsumableArray(this.state.values));
      values.splice(i, 1);
      this.setState({ values: values });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      //  alert('A name was submitted: ' + JSON.stringify(this.state.values));
      //  alert("bay: " + JSON.stringify(this.state.bay));
      // alert('A name was submitted: ' + this.state.values.join(', '));
      var values = [].concat(_toConsumableArray(this.state.values));
      var data = { "first_name": this.state.first_name, "last_name": this.state.last_name, "email": this.state.email, "bay": this.state.bay, "minor_1": values[0], "minor_2": values[1], "minor_3": values[2], "minor_4": values[3], "minor_5": values[4], "minor_6": values[5] };
      //  alert("A name was submitted: " + JSON.stringify(data));
      //alert(" Thank you " + JSON.stringify(this.state.first_name) + "your waiver was summitted" );


      // console.log(data);
      var controller = new Controller();
      controller.updateBucket(data);
      alert(" Thank you " + this.state.first_name + " your waiver was summitted") ? "" : location.reload();

      //window.location.href = 'home';

      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row moduleContainer" },
          React.createElement(
            "div",
            { className: "col-md-8 text-center" },
            React.createElement("img", { src: "./images/Axemonkeys_logohat_web.png", alt: "Axe Monkeys logo", width: "200" })
          )
        ),
        React.createElement("div", null),
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement(
            "div",
            { className: "row moduleContainer" },
            React.createElement(
              "div",
              { className: "col-md-8 text-center" },
              React.createElement(
                "div",
                { className: "hdivider" },
                React.createElement(
                  "span",
                  { className: "hdivider-label-big" },
                  React.createElement(
                    "b",
                    null,
                    "Scroll to bottom to check consent box:"
                  )
                ),
                React.createElement("div", { className: "hdivider-ext-line hdivider-ext-line_title" })
              ),
              React.createElement(
                "h3",
                null,
                "Release of Liability, Waiver, and Assumption of Risk"
              ),
              React.createElement(
                "div",
                { className: "waiver_box" },
                React.createElement(
                  "b",
                  null,
                  "WARNING: BY SIGNING THIS WAIVER YOU ARE WAIVING CERTAIN LEGAL RIGHTS \u2013 PLEASE READ THE DOCUMENT BELOW CAREFULLY"
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                "TO: Axe Thowing Inc. O/A Axe Monkeys, for themselves, their present and former parent, subsidiaries, affiliates and related companies and each of their respective present and former directors, officers, shareholders, employees, volunteers, servants, agents, administrators, trustees, successors and assigns and any party or parties who claim a right or interest through them (hereinafter, the \u201CReleasees\u201D);",
                React.createElement("br", null),
                React.createElement("br", null),
                "RE: Recreational Axe-Throwing (the \u201CActivity\u201D) I, desire to participate in the Activity on the date as set out below, which has been organized by the Releasees.",
                React.createElement("br", null),
                React.createElement("br", null),
                "In consideration for being allowed to participate in the Activity on the date as set out below, which consideration is hereby expressly accepted and acknowledged, on behalf of myself, my representatives, heirs, agents administrators, trustees, executors, assigns, successors and on behalf of any party or parties who claim a right or interest through me (hereinafter, the \u201CReleasor\u201D), I HEREBY RELEASE, ACQUIT, AND FOREVER DISCHARGE, WITHOUT QUALIFICATION OR LIMITATION the Releasees from any and all claims I may now and/or in the future may have against the Releasees, and from any and all liability, for any personal injury, death and/or property damage, expense, and/or loss sustained by me as a result of my participation in the Activity due to any cause whatsoever, including but not limited to and without limitation, negligence, gross negligence, willful misconduct, including the failure to take reasonable steps to safeguard or protect me from the risk, dangers, and/or hazards of participating in the Activity, and/or breach of statutory or other duty, including duties arising from occupier's liability legislation.",
                React.createElement("br", null),
                React.createElement("br", null),
                "THE RELEASOR ACKNOWLEDGES AND ACCEPTS that the Activity is inherently risky and dangerous, and there is the possibility of personal injury (up to and including death), property damage and/or loss resulting therefrom.",
                React.createElement("br", null),
                React.createElement("br", null),
                "THE RELEASOR AGREES AND UNDERSTANDS that in order to participate in the Activity on the date designated by their electronic signature, AND any future date of participation, he/she must agree to be bound by the terms of this Release of Liability, Waiver, and Assumption of Risk.",
                React.createElement("br", null),
                React.createElement("br", null),
                "THE RELEASOR AGREES that he/she will be fully responsible for all costs and expenses that may be incurred in providing any special services to him/her, outside of regular services agreed to or provided by the Releasees in connection with the Activity, and without limiting the generality of the foregoing, agrees to be responsible for, and to pay for any and all costs relating to special travel, medical attention, or other special outlay for him/her personally, and to reimburse the Releasees for all costs of these services as may be incurred by them for his/her benefit or at his/her request.",
                React.createElement("br", null),
                React.createElement("br", null),
                "THE RELEASOR HEREBY confirms that by executing this agreement, he/she is representing that he/she is of the full age of majority and that he/she has read, and understands, this agreement. The Releasor acknowledges that he/she is not under the influence of any substances, including alcohol, illicit drugs, or prescription drugs, which may affect or impair his/her motor skills, judgment, or general ability to think clearly.",
                React.createElement("br", null),
                React.createElement("br", null),
                "IT IS AGREED AND UNDERSTOOD that the Releasor will not make any claim or take any proceedings against any other person or corporation who might claim, in any manner or forum, contribution or indemnity in common law or in equity, or under the provisions of any statute or regulation, including the Contributory Negligence Act, RSA 2000 c. C-27, and the amendments thereto and/or under any successor legislation thereto, and/or under the Rules of Civil Procedure, from the Releasees with respect to the matters discharged by this Release of Liability, Waiver, and Assumption of Risk and Responsibility.",
                React.createElement("br", null),
                React.createElement("br", null),
                "IT IS AGREED AND UNDERSTOOD that if the Releasor commences such an action, or takes such proceedings, and the Releasees are added to such proceeding in any manner whatsoever, whether justified in law or not, the Releasor will immediately discontinue the proceedings and/or claims, and the Releasor will be jointly and severally liable to the Releasees for the legal costs incurred in any such proceeding, on a substantial indemnity basis. This Release of Liability, Waiver, and Assumption of Risk shall operate conclusively as an estoppel in the event of any claim, action, complaint or proceeding which might be brought in the future by the Releasor with respect to the matters covered by this Release of Liability, Waiver, and Assumption of Risk. This Release of Liability, Waiver, and Assumption of Risk may be pleaded in the event any such claim, action, complaint or proceeding is brought, as a complete defence and reply, and may be relied upon in any proceeding to dismiss the claim, action, complaint or proceeding on a summary basis and no objection will be raised by the Releasor in any subsequent action that the other parties in the subsequent action were not privy to formation of this Release.",
                React.createElement("br", null),
                React.createElement("br", null),
                "THE RELEASOR ACKNOWLEDGES that this Release of Liability, Waiver, and Assumption of Risk contains the entire agreement between the parties hereto, that the terms of this Release of Liability, Waiver, and Assumption of Risk are contractual, are not a mere recital, and any breach of these terms may be enforced against the Releasor, and may give rise to a damage claim against the Releasor enforceable by a further legal proceeding. The Releasor further acknowledges that the Releasees have not made any oral, written or visual representations or statements that are not otherwise reflected in this agreement.",
                React.createElement("br", null),
                React.createElement("br", null),
                "PHOTOGRAPHS, VIDEOS AND RECORDINGS",
                React.createElement("br", null),
                React.createElement("br", null),
                "I hereby grant Axe Monkeys, its managers, employees, and owners (collectively) non-revocable permission to capture my image and likeness in photographs, videotapes, recordings, or any other media (collectively \u201Cimages\u201D). I acknowledge that Axe Monkeys will own such images and further accept and grant Axe Monkeys permission to copyright, display, publish, distribute, use, modify, print and reprint such images on any media source and in any manner whatsoever related to Axe Monkeys business, including without limitation, publications, advertisements, brochures, website images, or other electronic displays and transmissions thereof. I further waive any right to inspect or approve the use of the image by Axe Monkeys prior to its use. I forever release and hold Axe Monkeys harmless from any and all liability arising out of the use of the images in any manner or media whatsoever, and waive any and all claims and causes of action relating to use of the images, including without limitation, claims for invasion of privacy rights or publicity.",
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                  "div",
                  { "class": "checkbox" },
                  React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "checkbox", required: true }),
                    " I consent I reviewed and agree to waiver"
                  )
                ),
                React.createElement("br", null),
                React.createElement("br", null)
              ),
              React.createElement(
                "div",
                { className: "input-group" },
                React.createElement("input", { type: "hidden", name: "bay", value: this.bay, onChange: this.handleInputChange }),
                React.createElement(
                  "span",
                  { className: "input-group-addon" },
                  "First Name"
                ),
                React.createElement("input", { type: "text", className: "form-control", name: "first_name", value: this.state.first_name, onChange: this.handleInputChange, required: true })
              ),
              React.createElement(
                "div",
                { className: "input-group" },
                React.createElement(
                  "span",
                  { className: "input-group-addon" },
                  "Last Name"
                ),
                React.createElement("input", { type: "text", className: "form-control", name: "last_name", value: this.state.last_name, onChange: this.handleInputChange, required: true })
              ),
              React.createElement(
                "div",
                { className: "input-group" },
                React.createElement(
                  "span",
                  { className: "input-group-addon" },
                  "Email"
                ),
                React.createElement("input", { type: "email", className: "form-control", name: "email", value: this.state.email, onChange: this.handleInputChange, required: true })
              ),
              this.createUI(),
              React.createElement("br", null),
              React.createElement("br", null),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "b",
                  null,
                  "COMPLETE SECTION BELOW IF PARTICIPANT ABOVE IS A MINOR (Under 18 years old):"
                ),
                " I am the parent or legal guardian of the minor named above. I have the legal right to consent to and, by signing below, I hereby do consent to the terms and conditions of this Release of Liability and Waiver of Claims."
              ),
              React.createElement("br", null),
              React.createElement("br", null),
              React.createElement("input", {
                type: "button",
                value: "+ Add minor",
                className: "btn btn-default",
                onClick: this.addClick.bind(this)
              }),
              React.createElement("br", null),
              React.createElement("br", null),
              React.createElement(
                "button",
                { type: "submit", className: "btn btn-default" },
                "Submit"
              )
            )
          )
        ),
        React.createElement("hr", null)
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        bucket: this.props.attributes.bucket
      });
    }
  }]);

  return amWaiver;
}(F8ReactComponent);

module.exports = amWaiver;
