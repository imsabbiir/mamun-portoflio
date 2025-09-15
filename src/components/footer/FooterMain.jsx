import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";
import FooterContact from "./FooterContact";
import FooterSubscribe from "./FotterSubscribe";

export default function FooterMain() {
  return (
    <div className="w-9/10 md:w-[85%] py-12 grid grid-cols-1 md:grid-cols-9 gap-14 mx-auto">
      <FooterBrand />
      <FooterNav />
      <FooterContact />
      <FooterSubscribe />
    </div>
  );
}
