

export default function Hero() {
    return(
        <div className="max-w-[1440px] w-full mx-auto">
        <div className="w-[1439] h-[716] absolute top-[125px]  border">
          <div className="w-[1440px] h-[716px]">
                 <img src="/assets/shop.png" alt="girl" />
          </div>
         
      {/* Content Overlay */}
      <div className="absolute flex flex-col justify-center left-[150px] top-[200px] items-start gap-[35px] px-6 lg:px-16 z-10">
        <h5 className="font-Montserrat font-semibold text-[16px] leading-[24px] text-white">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat font-bold text-[58px] leading-[80px] text-white max-w-[600px]">
          NEW COLLECTION
        </h1>
        <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-white max-w-[500px]">
          We know how large objects will act, <br/>
          but things on a small scale.
        </h4>
        <button className="w-[221px] h-[62px] rounded-[5px] px-[40px] py-[15px] bg-[#2DC071] text-white text-[24px] font-Montserrat leading-[32px] justify-center">
          SHOP NOW
        </button>
      </div>
        </div>
        </div>
    )
}
  