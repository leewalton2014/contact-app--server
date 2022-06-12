import Head from 'next/head'
import React, { useContext, useEffect } from "react";
import Contacts from "@contacts/Contacts";
import ContactForm from "@contacts/ContactForm";
import ContactFilter from "@contacts/ContactFilter";
import AuthContext from "@context/auth/authContext";
import PrivateRoute from "@components/routing/PrivateRoute";


if (localStorage.token) {
    setAuthToken(localStorage.token);
}

export default function Home() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
      authContext.loadUser();
      // eslint-disable-next-line
  }, []);
  
  return (
      <Fragment>
          <Head>
              <meta charset="utf-8" />
              <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
              <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
              />
              <meta name="theme-color" content="#000000" />

              <meta
                  name="ContactKeeper"
                  content="Keep track of your contacts"
              />
              <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

              <script
                  src="https://kit.fontawesome.com/2a690d768b.js"
                  crossorigin="anonymous"
              ></script>
              <title>ContactKeeper</title>
          </Head>

          <PrivateRoute>
              <div className="grid-2">
                  <div>
                      <ContactForm />
                  </div>
                  <div>
                      <ContactFilter />
                      <Contacts />
                  </div>
              </div>
          </PrivateRoute>
      </Fragment>
  );
}
