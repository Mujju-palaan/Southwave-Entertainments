import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";


const ContactDetails = () => {
  const service = [
    { icon: FaWhatsapp, text: "Live Chat on WhatsApp", href:'https://wa.me/447359658773' },
    { icon: FaTelegramPlane, text: "Shoot us an email", href:"mailto:info@southwaveentertainment.com" },
    { icon: BsTwitterX, text: "Message us on X", href:'www.twitter.com/southwaveentertainment' },
  ];
  const contact = [
    {name:'Company', phone:'+44 7359658773'},
    // {name:' Nithish kumar', phone:' +44 7774939820'},
    // {name:'Sathish Varma', phone:'+44 7440745814'},
    // {name:'Irshad Shaikh', phone:'+44 7907405166'},
  ]
  return (
    <div className="flex flex-col gap-6 w-full sm:max-w-lg justify-center md:mt-0 mt-8">
      <div>
        <h3 className="font-semibold md:text-2xl text-xl">Chat with us</h3>
        <p className="text-stone-500 md:text-sm text-sm">
          Speak to our friendly team via live chat.
        </p>
        {service.map(({ icon: Icon, text, href }, idx) => (
          <Link href={href} target='_blank' className="flex gap-2 pt-2 " key={idx}>
            <span className="md:text-xl text-lg">
              <Icon />
            </span>
            <span className="underline font-semibold md:text-sm text-sm">{text}</span>
          </Link>
        ))}
      </div>

      <div>
        <h3 className="font-semibold md:text-2xl text-xl">Call us</h3>
        <p className="text-stone-500 md:text-sm text-sm">Call our team Mon-Fri from 8am to 5pm.</p>
        {contact.map((e, idx)=>(
          <Link key={idx} href={`tel:${e.phone}`} className="flex gap-2 pt-2">
          <span className="md:text-xl text-lg">
            <FiPhoneCall />
          </span>
          <span className="md:text-sm text-sm flex gap-2">
            <p className="underline font-semibold">{e.phone}</p>
            <p className="text-stone-500">({e.name})</p></span>
        </Link>
        ))}
        
      </div>

      <div>
        <h3 className="font-semibold md:text-2xl text-xl">Visit us</h3>
        <p className="text-stone-500 md:text-sm text-sm">Chat to us in person at our London HQ.</p>
        <Link href="https://maps.app.goo.gl/AWHuzL5WxcmWrruT6" target="_blank" className="flex gap-2 pt-2">
          <span className="md:text-xl text-lg">
            <MdLocationPin />
          </span>
          <span className="underline font-semibold md:text-sm text-sm">Southwave Entertainment, London.</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
