export class UserData {
  firstname: string;
  lastname: string;
  topic: string;
  other: string;
  organisation: string;
  message: string;

  constructor(firstname: string,
              lastname: string,
              topic: string,
              other: string,
              organisation: string,
              message: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.topic = topic;
    this.other = other;
    this.organisation = organisation;
    this.message = message;
  }

  getFirstName(){
    return this.firstname;
  }
  getLastName(){
    return this.lastname;
  }
  getTopic(){
    return this.topic;
  }
  getOther(){
    return this.other;
  }
  getOrganisation(){
    return this.organisation;
  }
  getMessage(){
    return this.message;
  }

  resetData(){
    this.firstname = "";
    this.lastname = "";
    this.topic = "";
    this.other = "";
    this.organisation = "";
    this.message = "";
  }

}