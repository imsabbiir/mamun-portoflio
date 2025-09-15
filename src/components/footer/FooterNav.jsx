import Link from "next/link";

export default function FooterNav() {
const Links = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "testimonial", label: "Testimonial" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];
  return (
    <div>
      <h3 className="font-bold mb-4">Navigation</h3>
      <ul className="space-y-1 text-gray-600">
        {Links.map((link, i) => (
          <li key={i}>
            <Link href={`#${link?.id}`} className="hover:text-[#ffa900]">{link?.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
