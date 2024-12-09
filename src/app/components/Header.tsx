import phone from "../../assets/phone.png"
import email from "../../assets/email.png"
import social from "../../assets/social.png"
import { headers } from "next/headers";


 function Header() {
    return (
      <div className="max-w-[1440px] w-full mx-auto"
>
      <div className="lg:block hidden w-[1439] h-[58px] bg-[#252B42] ">
        <div className="flex justify-between items-center w-full h-full px-[24px]">
         
          <div className="flex gap-[10px]">
            <button className="flex items-center gap-[5px] p-[10px] text-white">
              <img src="assets/phone.png" alt="phone" width={16} height={16}/>
              <span className="font-Montserrat font-semibold text-[14px]"> (225) 555-0118</span>
            </button>
            <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px] mx-12">
            <img src="assets/email.png" alt="email" width={16} height={16}/>
              <span className="font-Montserrat font-semibold text-[14px]">michelle.rivera@example.com</span>
            </button>
          </div>
  
          
          <h3 className="font-Montserrat font-semibold text-[14px] text-white">
            Follow Us and get a chance to win 80% off
          </h3>
  
          
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
              <span className="font-Montserrat font-semibold text-[14px]">Follow Us :</span>
              <img src="assets/social.png" alt="social" width={120} height={120}/>
            </button>
            
          </div>
        </div>
        </div>
      
    );
  }
  export default Header