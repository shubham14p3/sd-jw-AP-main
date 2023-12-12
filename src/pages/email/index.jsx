import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../component/home-two/Layout";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Wrapper from "../../component/email/Wrapper";
import EmailHeader from "../../component/email/EmailHeader";
import BodyWrapper from "../../component/email/BodyWrapper";
import EmailSidebar from "../../component/email/EmailSidebar";
import EmailCom from "../../component/email/EmailCom";
import useMenu from "../../hooks/useMenu";
import { fetchAllUserEmail } from "../../redux/features/authActions";

function Email() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmail = async () => {
    try {
      // Call the fetchAllUserEmail action using dispatch
      const userEmail = await dispatch(fetchAllUserEmail());
      // Set the email state
      setEmail(userEmail?.payload);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error("Error fetching email:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    // Define an asynchronous function to fetch and set the email
    // Call the asynchronous function
    if (email.length === 0) {
      fetchEmail();
    }
  }, [email]);

  useMenu();

  return (
    <Layout>
      <BreadCrumb title="Email" link="/email" />
      {email && email.length > 0 ? (
        <Wrapper>
          <EmailHeader />
          <BodyWrapper>
            <EmailSidebar email={email} />
            <EmailCom email={email} />
          </BodyWrapper>
        </Wrapper>
      ) : (
        <></>
      )}
    </Layout>
  );
}

export default Email;
