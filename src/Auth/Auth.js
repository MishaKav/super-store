import auth0 from "auth0-js";

class Auth {
  constructor() {
    this.history = null;
    this.auth0 = new auth0.WebAuth({
      domain: "mishakav.auth0.com",
      clientID: "euoefW4ofT0V9rq0tzsKJWP1IYQ1t812",
      redirectUri: "http://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid profile email"
    });
  }

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.history.push("/home");
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  };

  getAccessToken = () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("No access token found.");
    }
    return accessToken;
  };

  setSession = authResult => {
    console.log(authResult);
    // set the time that the access token will expire
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);

    this.history.push("/home");
  };

  logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.userProfile = null;

    this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      returnTo: "http://localhost:3000"
    });
  };

  isAuthenticated = () => {
    const expiresAtStr = localStorage.getItem("expires_at");
    if (expiresAtStr) {
      const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
      return new Date().getTime() < expiresAt;
    }

    return false;
  };

  getProfile = cb => {
    if (this.userProfile) {
      return cb(this.userProfile);
    }

    this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }

      cb(profile, err);
    });
  };

  setHistoryObject = historyObj => {
    this.history = historyObj;
  };
}

export default new Auth();
