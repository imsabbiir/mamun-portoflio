import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="bg-[#fff] py-16">
      <div className="w-[90%] lg:w-[85%] mx-auto grid md:grid-cols-5 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
