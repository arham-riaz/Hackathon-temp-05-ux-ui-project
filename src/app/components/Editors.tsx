import editor from "../assets/editor.png"
import editor2 from "../assets/editor2.png"
import editor3 from "../assets/editor3.png"
import editor4 from "../assets/editor4.png"


export default function Editors() {
    return (
        
      <div className="w-full flex justify-center py-[10px] absolute top-[800px] h-[716]">
        <div className="w-[1440px] h-auto flex flex-col gap-[30px] bg-[#FAFAFA] p-[45px]">
          {/* Title */}
          <div className="flex flex-col items-center gap-[10px]">
            <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px]">
              EDITOR’S PICK
            </h3>
            <p className="w-[347px] h-auto font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
              Problems trying to resolve the conflict between
            </p>
          </div>
          {/* Images */}
          <div className="w-full h-[400px] flex gap-[30px] justify-center">
            {/* Men */}
            <div className="relative w-[510px] h-[500px]">
              <img src="/assets/editor.png" alt="men" 
                className="w-full h-full object-cover rounded-md"/>
              <button className="absolute top-[434px] left-[101px] transform -translate-x-1/2 bg-white px-[50px] py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px]
               hover:bg-gray-50"> MEN
              </button>
            </div>
            {/* Women */}
            <div className="relative w-[240px] h-[500px]">
            
             <img src="/assets/editor2.png" alt="women" className="w-full h-full object-cover" /><button className="absolute top-[434px] left-[21px] w-[136px] h-[48px] px-[48px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md">
            <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]"> WOMEN </h2>
                        </button>
                        

            </div>
            {/* Asses */}
            <div className="w-[240px] h-[500px] flex flex-col gap-[30px]">
              {/* Accessories Image */}
              <div className="relative w-[240px] h-[242px]">
            <img src="/assets/editor3.png" alt="asses"
                  className="w-full h-full object-cover"
                /> 
                <button className="absolute top-[180px] left-[20px] w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white  shadow-md">
                  <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                    ACCESSORIES
                  </h2>
                </button>
              </div>
              {/* Kids */}
              <div className="relative w-[240px] h-[242px]">
            <img src="/assets/editor4.png" alt="kid"
                  className="w-full h-full object-cover"
                /> 
                <button className="absolute top-[180px] left-[20px] w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white  shadow-md">
                  <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                    KIDS
                  </h2>
                </button>
              </div>
            </div>
          </div>
          </div>
          </div>
        
    );
  }
  