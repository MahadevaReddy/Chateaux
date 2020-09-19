class Employee {
    constructor(id,f_name, m_name, l_name, emailId, mobile, address, state, country, isActive, password, confirm_password) {
      this.id = id;
      this.f_name = f_name;
      this.m_name = m_name;
      this.l_name = l_name;
      this.username = emailId;
      this.mobile = mobile;
      this.address = address;
      this.state = state;
      this.country = country;
      this.isActive = isActive;
      this.password = password;
    }
  }
  
  export default Employee;