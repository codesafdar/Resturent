import ButtonUI from "@/components/common/ButtonUI";
import NextImage from "@/components/common/NextImage";

const Banner = () => {
  return (
    <>
      <div className="relative w-full min-h-[calc(100vh-120px)]">
        <div className="relative w-full min-h-[calc(100vh-120px)]">
          <NextImage
            src="/images/banner.png"
            alt="banner"
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.42)] flex flex-col justify-center">
          <div className="container">
            <div className="space-y-6">
              <div className="w-20 h-1 bg-white" />
              <h1 className="primary_title">
                Unforgettable Taco
                <br />
                Bliss
              </h1>
              <h3 className="text-lg font-bold">Best Tacos in America</h3>
              <div className="flex gap-4">
                <ButtonUI
                  size="lg"
                  variant="bordered"
                  className="sm:h-[60px] text-white"
                >
                  Our Story
                </ButtonUI>
                <ButtonUI size="lg" className="sm:h-[60px]">
                  Order Now
                </ButtonUI>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-20">
          <h2 className="text-center primary_title">
            Florida, Atlanta, Washington D.C, New York, North Carolina, and
            growing!
          </h2>
        </div>
      </div>
      <div className="relative w-full">
        <div className="relative w-full h-[500px]">
          <NextImage
            src="/images/lowerBanner.png"
            alt="lowerBanner"
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.42)]"></div>
      </div>
    </>
  );
};

export default Banner;
