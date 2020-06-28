import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="A pic of Dan Shrout" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            {/* <p>{bio}</p> */}
            <p>I am a Full Stack Developer with over 5 years of experience building websites, web and mobile applications. 
               Along the way in my career, I discovered React and all the amazing things I can build with it. With all the many 
               languages and frameworks to choose from, I discovered React is my favorite and works well for me.
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>
						         {city}, {state}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
