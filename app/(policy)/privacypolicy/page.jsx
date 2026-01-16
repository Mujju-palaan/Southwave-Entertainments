import PrivacyPolicyPage from "../../../components/policy/policy";
import PolicyBanner from "../../../components/policy/PolicyBanner";

const Privacypolicy = () => {
  return (
    <div className="min-h-screen">
      <PolicyBanner title={`Privacy Policy`} date={`Effective 1st Jan 2026`}/>
      <PrivacyPolicyPage />
    </div>
  );
};

export default Privacypolicy;

