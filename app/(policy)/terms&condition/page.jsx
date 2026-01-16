import PrivacyPolicyPage from "../../../components/policy/policy";
import PolicyBanner from "../../../components/policy/PolicyBanner";
import PrivacyPolicyData from "../../data/PrivacyPolicyData";

const TermsCondition = () => {
  return (
    <div className="min-h-screen">
      <PolicyBanner title={`Terms & Condition`} date={`Effective 1st Jan 2026`}/>
      <PrivacyPolicyPage PolicyData={PrivacyPolicyData}/>
    </div>
  );
};

export default TermsCondition;

