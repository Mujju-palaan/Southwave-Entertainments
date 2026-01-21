import ContactDetails from "../../../components/contact/ContactDetails";
import ContactForm from "../../../components/contact/ContactForm";

const Contact = () => {
  return (
    <div
      className=" min-h-screen items-center justify-center bg-zinc-50
      font-sans dark:bg-black object-contain"
      style={{
        backgroundImage:
          "url('/southwave-entertainment-contact-events-london-uk.jpeg')",
      }}
    >
      <div className="bg-zinc-50/80 md:p-6 pt-4">
        <div className="">
          <h1 className="md:text-6xl text-2xl font-bold text-center text-stone-800">
            Contact Our Team
          </h1>

          <div className="text-center text-stone-600 mt-2 sm:text-xl text-[12px] md:p-6 px-6">
            <p>
              Got an question about the product or scaling on our platform?
              We&apos;re here to help.
            </p>
            <p>
              Chat to our freindly team 24/7 and get onboard in less than 5
              minutes.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:m-10">
          <div className="order-2 md:order-1 flex justify-center items-center">
            <ContactForm />
          </div>

          <div
            className="order-1 md:order-2 flex justify-center items-center
        pl-10 md:pl-0"
          >
            <ContactDetails />
          </div>
        </div>

        <div className="pb-20"></div>
      </div>
    </div>
  );
};

export default Contact;
