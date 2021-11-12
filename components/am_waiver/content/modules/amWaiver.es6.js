const React = require("react");
const ReactDOM = require("react-dom");
const F8ReactComponent = require("react-core/F8ReactComponent");
const Controller = require("am_waiver/utils/Controller");
class amWaiver extends F8ReactComponent {
  constructor(props) {
            let tableNo = window.location.href;
        var bay = tableNo.slice(-2);
       super(props);
    this.state = {
      values: [],
      bucketGA: this.props.attributes.bucket_ga,
      isToggleOn: true,
      first_name:'',
      last_name:'',
      minor_1:'',
      minor_2:'',
      minor_3:'',
      minor_4:'',
      minor_5:'',
      minor_6:'',
      email:'',
      bay:bay
    };
        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

  }
   handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    // alert('A name was submitted: ' + JSON.stringify(this.state.name));
  }

      createUI(){
     return this.state.values.map((el, i) => 
       <div key={i}>
       <p><b>Minor</b></p>
        <div className="input-group">
                <span className="input-group-addon" >
                  Full name
                </span>
            <input type="text" className="form-control" name={'minor_'+[i]} value={el||''} placeholder="Minor full Name" onChange={this.handleChange.bind(this, i)} />
              </div>
    	    <input type='button' className="btn btn-danger" value='- Remove' onClick={this.removeClick.bind(this, i)}/>
          <br />
          <br />

       </div>       
     )
  }

  handleChange(i, event) {
     let values = [...this.state.values];
     values[i] = event.target.value;
     this.setState({ values });
  }
  
  addClick(){
    this.setState(prevState => ({ values: [...prevState.values, '']}))
  }
  
  removeClick(i){
     let values = [...this.state.values];
     values.splice(i,1);
     this.setState({ values });
  }
  
  handleSubmit(event) {
  //  alert('A name was submitted: ' + JSON.stringify(this.state.values));
   //  alert("bay: " + JSON.stringify(this.state.bay));
   // alert('A name was submitted: ' + this.state.values.join(', '));
   let values = [...this.state.values];
    let data = {"first_name":this.state.first_name, "last_name":this.state.last_name, "email":this.state.email,  "bay":this.state.bay, "minor_1":values[0], "minor_2":values[1], "minor_3":values[2], "minor_4":values[3], "minor_5":values[4], "minor_6":values[5]};
  //  alert("A name was submitted: " + JSON.stringify(data));
    //alert(" Thank you " + JSON.stringify(this.state.first_name) + "your waiver was summitted" );


   // console.log(data);
    var controller = new Controller();
    controller.updateBucket(data);
    alert(" Thank you " + this.state.first_name + " your waiver was summitted" ) ? "" : location.reload();

    //window.location.href = 'home';

    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row moduleContainer">
          <div className="col-md-8 text-center">
            <img src="./images/Axemonkeys_logohat_web.png" alt="Axe Monkeys logo" width="200"/>
          </div>
        </div>
        <div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row moduleContainer">
            <div className="col-md-8 text-center">
              <div className="hdivider">
                <span className="hdivider-label-big">
                  <b>Scroll to bottom to check consent box:</b>
                </span>
                <div className="hdivider-ext-line hdivider-ext-line_title"></div>
              </div>

              <h3>
              Release of Liability, Waiver, and Assumption of Risk
                
              </h3>

              <div className="waiver_box">
                <b>
                WARNING: BY SIGNING THIS WAIVER YOU ARE WAIVING CERTAIN LEGAL RIGHTS – PLEASE READ THE DOCUMENT BELOW CAREFULLY
                
                </b>
                <br />
                <br />
                TO: Axe Thowing Inc. O/A Axe Monkeys, for themselves, their present and former parent,
                subsidiaries, affiliates and related companies and each of their respective present and former
                directors, officers, shareholders, employees, volunteers, servants, agents, administrators,
                trustees, successors and assigns and any party or parties who claim a right or interest through
                them (hereinafter, the “Releasees”);

                <br />
                <br />
                RE: Recreational Axe-Throwing (the “Activity”) I, desire to participate in the Activity on the date
                as set out below, which has been organized by the Releasees.
                <br />
                <br />
                In consideration for being allowed to participate in the Activity on the date as set out below,
                which consideration is hereby expressly accepted and acknowledged, on behalf of myself, my
                representatives, heirs, agents administrators, trustees, executors, assigns, successors and on
                behalf of any party or parties who claim a right or interest through me (hereinafter, the
                “Releasor”), I HEREBY RELEASE, ACQUIT, AND FOREVER DISCHARGE, WITHOUT
                QUALIFICATION OR LIMITATION the Releasees from any and all claims I may now and/or in
                the future may have against the Releasees, and from any and all liability, for any personal
                injury, death and/or property damage, expense, and/or loss sustained by me as a result of my
                participation in the Activity due to any cause whatsoever, including but not limited to and without
                limitation, negligence, gross negligence, willful misconduct, including the failure to take
                reasonable steps to safeguard or protect me from the risk, dangers, and/or hazards of
                participating in the Activity, and/or breach of statutory or other duty, including duties arising from
                occupier's liability legislation.
                <br />
                <br />
                THE RELEASOR ACKNOWLEDGES AND ACCEPTS that the Activity is inherently risky and
                dangerous, and there is the possibility of personal injury (up to and including death), property
                damage and/or loss resulting therefrom.
                <br />
                <br />
                THE RELEASOR AGREES AND UNDERSTANDS that in order to participate in the
                Activity on the date designated by their electronic signature, AND any future date of
                participation, he/she must agree to be bound by the terms of this Release of Liability, Waiver,
                and Assumption of Risk.
                <br />
                <br />
                THE RELEASOR AGREES that he/she will be fully responsible for all costs and expenses that
                may be incurred in providing any special services to him/her, outside of regular services agreed
                to or provided by the Releasees in connection with the Activity, and without limiting the
                generality of the foregoing, agrees to be responsible for, and to pay for any and all costs relating
                to special travel, medical attention, or other special outlay for him/her personally, and to
                reimburse the Releasees for all costs of these services as may be incurred by them for his/her
                benefit or at his/her request.
                <br />
                <br />
                THE RELEASOR HEREBY confirms that by executing this agreement, he/she is representing
                that he/she is of the full age of majority and that he/she has read, and understands, this
                agreement. The Releasor acknowledges that he/she is not under the influence of any
                substances, including alcohol, illicit drugs, or prescription drugs, which may affect or impair
                his/her motor skills, judgment, or general ability to think clearly.
                <br />
                <br />
                IT IS AGREED AND UNDERSTOOD that the Releasor will not make any claim or take any
                proceedings against any other person or corporation who might claim, in any manner or forum,
                contribution or indemnity in common law or in equity, or under the provisions of any statute or
                regulation, including the Contributory Negligence Act, RSA 2000 c. C-27, and the amendments
                thereto and/or under any successor legislation thereto, and/or under the Rules of Civil
                Procedure, from the Releasees with respect to the matters discharged by this Release of
                Liability, Waiver, and Assumption of Risk and Responsibility. 
                <br />
                <br />
                
                IT IS AGREED AND UNDERSTOOD that if the Releasor commences such an action, or takes
                such proceedings, and the Releasees are added to such proceeding in any manner
                whatsoever, whether justified in law or not, the Releasor will immediately discontinue the
                proceedings and/or claims, and the Releasor will be jointly and severally liable to the Releasees
                for the legal costs incurred in any such proceeding, on a substantial indemnity basis. This
                Release of Liability, Waiver, and Assumption of Risk shall operate conclusively as an estoppel
                in the event of any claim, action, complaint or proceeding which might be brought in the future
                by the Releasor with respect to the matters covered by this Release of Liability, Waiver, and
                Assumption of Risk. This Release of Liability, Waiver, and Assumption of Risk may be pleaded
                in the event any such claim, action, complaint or proceeding is brought, as a complete defence
                and reply, and may be relied upon in any proceeding to dismiss the claim, action, complaint or
                proceeding on a summary basis and no objection will be raised by the Releasor in any
                subsequent action that the other parties in the subsequent action were not privy to formation of
                this Release.
                
                <br />
                <br />
                THE RELEASOR ACKNOWLEDGES that this Release of Liability, Waiver, and Assumption of
                Risk contains the entire agreement between the parties hereto, that the terms of this Release of
                Liability, Waiver, and Assumption of Risk are contractual, are not a mere recital, and any breach
                of these terms may be enforced against the Releasor, and may give rise to a damage claim
                against the Releasor enforceable by a further legal proceeding. The Releasor further
                acknowledges that the Releasees have not made any oral, written or visual representations or
                statements that are not otherwise reflected in this agreement.              
                <br />
                <br />
                PHOTOGRAPHS, VIDEOS AND RECORDINGS                
                <br />
                <br />
                I hereby grant Axe Monkeys, its managers, employees, and owners (collectively) non-revocable
                permission to capture my image and likeness in photographs, videotapes, recordings, or any
                other media (collectively “images”). I acknowledge that Axe Monkeys will own such images and
                further accept and grant Axe Monkeys permission to copyright, display, publish, distribute, use,
                modify, print and reprint such images on any media source and in any manner whatsoever
                related to Axe Monkeys business, including without limitation, publications, advertisements,
                brochures, website images, or other electronic displays and transmissions thereof. I further
                waive any right to inspect or approve the use of the image by Axe Monkeys prior to its use. I
                forever release and hold Axe Monkeys harmless from any and all liability arising out of the use
                of the images in any manner or media whatsoever, and waive any and all claims and causes of
                action relating to use of the images, including without limitation, claims for invasion of privacy
                rights or publicity.                
                <br />
                <br />
                <div class="checkbox">
                  <label>
                    <input type="checkbox" required /> I consent I reviewed and agree to
                    waiver
                  </label>
                </div>
                <br />
                <br />
              </div>

              <div className="input-group">
              <input type="hidden" name="bay" value={this.bay} onChange={this.handleInputChange} />
                <span className="input-group-addon">First Name</span>
                <input type="text" className="form-control" name="first_name" value={this.state.first_name} onChange={this.handleInputChange} required/>
              </div>

              <div className="input-group">
                <span className="input-group-addon">Last Name</span>
                <input type="text" className="form-control" name="last_name" value={this.state.last_name} onChange={this.handleInputChange} required/>
              </div>

              <div className="input-group">
                <span className="input-group-addon">Email</span>
                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} required/>
              </div>

              {this.createUI()}

              <br />
              <br />
              <div>
              <b>COMPLETE SECTION BELOW IF PARTICIPANT ABOVE IS A MINOR (Under 18 years old):</b> I am the parent or legal guardian of the minor named above. I have the legal right to consent to and, by signing below, I hereby do consent to the terms and conditions of this Release of Liability and Waiver of Claims. 
              </div>
              <br />
              <br />

              <input
                type="button"
                value="+ Add minor"
                className="btn btn-default"
                onClick={this.addClick.bind(this)}
              />
              <br />
              <br />

              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </div>
          </div>
        </form>
        <hr />
      </div>
    );
                 
  }
    componentDidMount() {
    this.setState({
      bucket: this.props.attributes.bucket
    });
  }
}
module.exports = amWaiver;
