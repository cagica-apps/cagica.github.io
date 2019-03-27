import * as React from "react";

class Profile extends React.Component {

  public render() {
    return (
      <div className="Profile">
            <div className="card">
              <h2>Hello!!</h2>
              <p>
                I'm a software engineer at TekEver currently working on
                Santander banking apps. I work mainly with Android Applications,
                but I have some experience in iOS too.
              </p>
              <p>
                On a daily basis I work with SOAP and REST services, MVP and MVC
                architectures, deploying and managing Google Play Apps and API
                access, and also securing our applications.
              </p>
              <p>
                I've been working as a software consultant for over 3 years now,
                playing around with Cordova, Ionic 1 and 2, Angular 1 and 2,
                RxJava, Unity, VR and web development stuff. In those years I've
                done some innovation projects for Novabase involving VR in
                mobile, Finzzy a ground breaking Personal Financial Manager, and
                others.
              </p>
              <p>
                For now, I love learning new stuff about Android Development.
                Like to attend conferences about new technologies.
              </p>
            </div>
      </div>
    );
  }
}

export default Profile;
