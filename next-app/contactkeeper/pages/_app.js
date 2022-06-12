import '../styles/globals.css';
import React, { Fragment } from "react";
import setAuthToken from "@utils/setAuthToken";
import Navbar from "@components/layout/Navbar";
import Alerts from "@components/layout/Alerts";
import ContactState from "@context/contact/ContactState";
import AuthState from "@context/auth/AuthState";
import AlertState from "@context/alert/AlertState";

function MyApp({ Component, pageProps }) {

  if (localStorage.token) {
      setAuthToken(localStorage.token);
  }

  return (
      <Fragment>
          <AuthState>
              <ContactState>
                  <AlertState>
                      <Router>
                          <Fragment>
                              <Navbar />
                              <div className="container">
                                  <Alerts />
                                  <Component {...pageProps} />
                              </div>
                          </Fragment>
                      </Router>
                  </AlertState>
              </ContactState>
          </AuthState>
      </Fragment>
  );
}

export default MyApp
