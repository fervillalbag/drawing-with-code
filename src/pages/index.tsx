import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[900px] grid place-items-center md:w-screen h-screen">
      <div className="w-[800px] h-[800px] border-4 border-custom-blue grid place-items-center grid-rows-[180px_1fr_1fr]">
        <div className="flex w-full h-full relative border-4 border-custom-blue border-t-0 border-l-0 border-r-0">
          <div className="w-[180px] bg-custom-light-blue h-full border-r-4 border-custom-blue relative">
            <div className="absolute z-10 bottom-0 left-0 w-[84px] border-4 border-b-0 border-l-0 border-custom-blue h-32 bg-custom-pink grid grid-cols-2 p-4 gap-4">
              <div className="w-4 h-[36px] bg-custom-blue rounded-md" />
              <div className="w-4 h-[36px] bg-custom-blue rounded-md" />
              <div className="w-4 h-[36px] bg-custom-blue rounded-md" />
              <div className="w-4 h-[36px] bg-custom-blue rounded-md" />
            </div>

            <div className="bg-custom-blue w-24 absolute bottom-0 right-0 h-16" />
            <div className="w-14 h-[68px] bg-custom-dark-pink absolute left-[84px] border-4 border-l-0 border-custom-blue bottom-[60px]" />
          </div>
          <div className="relative w-[264px] border-r-4 border-custom-blue h-full bg-custom-light-blue">
            <div
              className="bg-custom-pink h-full w-[90px]"
              style={{
                clipPath: "polygon(0 0, 0 100%, 100% 50%)",
              }}
            />
            <div
              className="bg-white absolute bottom-0 w-[180px] h-[88px]"
              style={{
                clipPath:
                  "polygon(50% 0, 0 100%, 100% 100%)",
              }}
            />
            <div className="w-[254px] h-1 bg-custom-blue rotate-45 absolute -top-[4px] left-0 origin-top-left" />
            <div className="w-[126px] h-1 bg-custom-blue -rotate-45 absolute bottom-[0] left-0 origin-bottom-left" />
          </div>
        </div>
        <div className="border-2 w-full h-full"></div>
        <div className="border-2 w-full h-full"></div>
      </div>
    </main>
  );
}
