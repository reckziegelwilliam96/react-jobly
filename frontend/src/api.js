import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = JoblyApi.token ? { Authorization: `Bearer ${JoblyApi.token}` } : {};
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(params = {}) {
    const endpoint = `companies`;
    let res = await this.request(endpoint, params, "get")
    return res.companies;
  }

  /** Get details on a job by id. */
  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  static async getJobs(params = {}) {
    const endpoint = `jobs`;
    let res = await this.request(endpoint, params, "get");
    return res.jobs;
  }
  

  /**  User register and authentication routes */

  static async registerUser({username, password, firstName, lastName, email}) {
    const data = {
      "username": username,
      "password": password,
      "firstName": firstName,
      "lastName": lastName,
      "email": email
    };

    let res = await this.request(`auth/register`, data, "post");

    JoblyApi.token = res.token;


    console.log('JoblyApi.registerUser response:', res);

    return res;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
  
  static async logInUser({username, password}) {
    const data = {
      "username": username,
      "password": password
    };

    let res = await this.request(`auth/token`, data, "post");

    JoblyApi.token = res.token;

    return res;
  }

  static async updateUser({username, updatedData}) {
    let res = await this.request(`users/${username}`, updatedData, "patch");

    return res.user;
  }
  
  static async applyForJob(username, jobId) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post")
    return res.applied;
  }

  static async unapplyToJob(username, jobId) {
    const result = await this.request(`users/${username}/jobs/${jobId}`, {}, "delete");
    return result.message;
  }

}

export default JoblyApi;