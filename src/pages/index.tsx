export default function Home() {
  return (
    <main className="w-[900px] grid place-items-center md:w-screen h-screen">
      <div className="w-[800px] h-[600px] border-4 border-custom-blue grid place-items-center grid-rows-[180px_1fr_1fr]">
        <div className="flex w-full h-full relative border-4 border-custom-blue border-t-0 border-l-0 border-r-0">
          <div className="w-[180px] bg-custom-light-blue h-full border-r-4 border-custom-blue relative">
            <div className="absolute z-10 bottom-0 left-0 w-[84px] border-4 border-b-0 border-l-0 border-custom-blue h-32 bg-custom-pink grid grid-cols-2 p-4 gap-4">
              <div className="w-4 h-[36px] bg-custom-blue rounded-sm" />
              <div className="w-4 h-[36px] bg-custom-blue rounded-sm" />
              <div className="w-4 h-[36px] bg-custom-blue rounded-sm" />
              <div className="w-4 h-[36px] bg-custom-blue rounded-sm" />
            </div>

            <div className="bg-custom-blue w-24 absolute bottom-0 right-0 h-16" />
            <div className="w-14 h-[68px] bg-custom-dark-pink absolute left-[84px] border-4 border-l-0 border-custom-blue bottom-[60px]" />
          </div>
          <div className="relative w-[264px] border-r-4 border-custom-blue h-full bg-custom-light-blue">
            <div
              className="bg-custom-pink h-full w-[90px] z-10 relative"
              style={{
                clipPath: "polygon(0 0, 0 100%, 100% 50%)",
              }}
            />
            <div
              className="bg-white absolute bottom-0 w-[180px] h-[88px]"
              style={{
                clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
              }}
            />
            <div className="w-[255px] h-1 z-10 bg-custom-blue rotate-45 absolute -top-[4px] left-0 origin-top-left" />
            <div className="w-[126px] h-1 z-10 bg-custom-blue -rotate-45 absolute bottom-[0] left-0 origin-bottom-left" />
            <div className="flex gap-8 justify-end items-center w-full h-12 border-b-4 border-custom-blue bg-custom-dark-pink absolute top-0 left-0 z-0">
              <div className="w-6 h-6 bg-custom-blue rounded-md" />
              <div className="w-6 h-6 bg-custom-blue rounded-md" />
              <div className="w-6 h-6 bg-custom-blue rounded-md mr-8" />
            </div>
            <div className="bg-custom-blue h-7 w-32 absolute top-12 right-20" />
            <div className="w-20 h-32 bg-white absolute bottom-0 z-10 right-0 border-l-4 border-custom-blue">
              <div className="border-4 border-custom-blue w-9 h-9 bg-custom-dark-pink rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="border-4 border-custom-blue w-20 -z-10 h-20 bg-custom-pink rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-1 h-12 bg-custom-blue left-1/2 bottom-0 -translate-x-1/2" />
            </div>
          </div>
          <div className="relative -z-20 w-[calc(100%_-_180px_-_264px)] bg-custom-light-blue">
            <div className="w-[264px] grid grid-cols-3 place-items-center h-20 border-4 border-custom-blue border-b-0 border-l-0 bg-custom-dark-pink absolute bottom-0 z-20">
              <div className="bg-custom-blue w-7 h-7 rounded-md" />
              <div className="bg-custom-blue w-7 h-7 rounded-md" />
              <div className="bg-custom-blue w-7 h-7 rounded-md" />
            </div>
            <div className="absolute w-[68px] h-1 bg-custom-blue right-[76px] bottom-[98px] rotate-[40deg] z-20" />
            <div
              className="w-[264px] border-t-4 border-custom-blue h-[45px] absolute bottom-[79px] bg-custom-pink"
              style={{
                clipPath: "polygon(0 0, 80% 0, 100% 100%, 0% 100%)",
              }}
            />
            <div className="w-[70px] h-[114px] bg-custom-blue absolute bottom-0 right-16 -z-10 rounded-tr-md"></div>
            <div className="w-[70px] h-[80px] bg-custom-blue absolute bottom-0 right-0 -z-10"></div>
            <div className="w-[30px] h-[150px] bg-custom-blue absolute bottom-0 right-0 -z-10 rounded-tl-md"></div>
          </div>
        </div>

        <div className="w-full h-[222px]">
          <div className="flex">
            <div className="w-[180px] h-[88px] border-r-4 border-b-4 border-custom-blue">
              <div className="flex">
                <div className="w-[84px] h-[42px] border-b-4 border-r-4 border-custom-blue bg-white"></div>
                <div className="h-[42px] flex-1 bg-custom-dark-pink border-b-4 border-custom-blue"></div>
              </div>
              <div className="flex">
                <div className="w-12 bg-custom-light-blue border-r-4 border-custom-blue h-[42px]"></div>
                <div className="h-[42px] flex-1 bg-custom-pink"></div>
              </div>
            </div>

            <div className="w-[184px] z-20 h-[88px] border-b-4 border-r-4 overflow-hidden border-custom-blue bg-white relative">
              <div className="w-[184px] relative z-30 -mt-[2px] -ml-[2px] border-4 overflow-hidden border-custom-blue h-[176px] bg-transparent rounded-full"></div>
              <div className="w-[92px] z-30 -mt-[2px] -ml-[2px] border-4 overflow-hidden border-custom-blue h-[88px] bg-transparent rounded-full absolute -bottom-1/2 left-1/2 -translate-x-1/2"></div>

              <div className="w-1 z-30 bg-custom-blue h-full absolute bottom-0 left-1/2 -translate-x-1/2"></div>
              <div className="w-1 z-30 rotate-[136deg] bg-custom-blue h-[90px] absolute -bottom-4 left-[58px]"></div>
              <div className="w-1 z-30 rotate-[-136deg] bg-custom-blue h-[90px] absolute -bottom-4 right-[58px]"></div>

              {/* 1era pintura relleno */}
              <div>
                <div className="w-3 h-3 bg-custom-pink absolute top-[17px] left-[32px] rotate-[50deg]"></div>
                <div className="w-3 h-3 bg-custom-pink absolute top-[9px] left-[40px] rotate-[56deg]"></div>
                <div className="w-3 h-3 bg-custom-pink absolute top-[6px] left-[49px] rotate-[66deg]"></div>
                <div className="w-3 h-3 bg-custom-pink absolute top-[4px] left-[59px] rotate-[75deg]"></div>
                <div className="w-3 h-3 bg-custom-pink absolute top-[2px] left-[69px] rotate-[77deg]"></div>
                <div className="w-3 h-3 bg-custom-pink absolute top-[0px] left-[74px] rotate-[90deg]"></div>
                <div className="w-5 h-5 bg-custom-pink absolute -top-[4px] left-[70px] rotate-[90deg]"></div>
                <div className="w-6 h-7 bg-custom-pink absolute top-[14px] left-[41px] rotate-[136deg]"></div>
                <div className="w-6 h-7 bg-custom-pink absolute top-[12px] left-[60px] rotate-[166deg]"></div>
                <div className="w-3 h-10 bg-custom-pink absolute top-[0] left-[76px] rotate-[0]"></div>
                <div className="w-5 h-5 bg-custom-pink absolute top-[28px] left-[49px] rotate-[50deg]"></div>
              </div>

              {/* 2da pintura relleno */}
              <div>
                <div className="top-[68px] absolute left-[45px] w-7 h-4 bg-custom-pink"></div>
                <div className="top-[60px] absolute left-[48px] w-4 h-2 bg-custom-pink"></div>
                <div className="top-[60px] absolute left-[56px] w-5 h-9 rotate-[136deg] bg-custom-pink"></div>
                <div className="top-[52px] absolute left-[52px] w-2 rotate-[46deg] h-3 bg-custom-pink"></div>
              </div>

              {/* 3ra pintura relleno */}
              <div>
                <div className="top-[46px] absolute left-[92px] w-4 h-6 bg-custom-pink"></div>
                <div className="top-[54px] absolute left-[92px] w-1 h-7 bg-custom-pink"></div>
                <div className="top-[46px] absolute left-[98px] w-3.5 h-5 bg-custom-pink"></div>
                <div className="top-[48px] absolute left-[104px] w-3 h-3.5 bg-custom-pink"></div>
                <div className="top-[50px] absolute left-[110px] w-2.5 h-2 bg-custom-pink"></div>
                <div className="top-[62px] absolute left-[94px] rotate-[50deg] w-2 h-4 bg-custom-pink"></div>
                <div className="top-[36px] absolute left-[96px] rotate-[100deg] w-2 h-5 bg-custom-pink"></div>
              </div>

              {/* 4ta pintura relleno */}
              <div>
                <div className="w-9 h-9 bg-custom-pink absolute right-[10px] top-[48px]"></div>
                <div className="w-8 h-9 bg-custom-pink rotate-[134deg] absolute right-[18px] top-[38px]"></div>
                <div className="w-5 h-5 bg-custom-pink rotate-[164deg] absolute right-[30px] top-[55px]"></div>
                <div className="w-3 h-6 bg-custom-pink rotate-[134deg] absolute right-[18px] top-[25px]"></div>
                <div className="w-3 h-4 bg-custom-pink absolute right-[2px] top-[68px]"></div>
                <div className="w-3 h-4 bg-custom-pink absolute right-[3px] top-[58px]"></div>
                <div className="w-3 h-4 bg-custom-pink absolute right-[6px] top-[50px]"></div>
                <div className="w-3 h-4 bg-custom-pink absolute right-[10px] top-[43px]"></div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-[134px] h-[calc(222px-88px)] border-r-4 bg-custom-blue p-1 border-custom-blue border-b-4">
              <div className="relative h-full w-full grid place-items-center rounded-full bg-white">
                <div className="h-3/5 w-3/5 grid place-items-center border-4 border-custom-blue rounded-full bg-custom-dark-pink">
                  <div className="h-1/2 w-1/2 rounded-full bg-custom-blue"></div>
                </div>
                <div className="w-1 h-7 left-1/2 -translate-x-1/2 absolute bottom-0 bg-custom-blue "></div>
              </div>
            </div>
            <div className="h-[calc(222px-88px)] flex flex-col w-[46px] border-b-4 border-r-4 border-custom-blue">
              <div className="relative border-b-4 grid place-items-center border-custom-blue flex-1">
                <div className="h-[30px] w-[30px] bg-custom-light-blue rounded-full border-4 border-custom-blue"></div>
                <div className="w-1 h-5 bg-custom-blue absolute left-1/2 -translate-x-1/2 bottom-0"></div>
              </div>
              <div className="flex-1 flex relative">
                <div className="flex-1 bg-custom-pink"></div>
                <div className="flex-1 bg-custom-dark-pink"></div>

                <div className="w-1 absolute h-full left-1/2 -translate-x-1/2 bg-custom-blue bottom-0"></div>
              </div>
            </div>
            <div className="w-[184px] h-[calc(222px-88px)] border-r-4 bg-custom-dark-pink p-1 border-custom-blue relative border-b-4">
              <div className="w-1 z-40 h-[72px] bg-custom-blue absolute top-0 left-1/2 -translate-x-1/2"></div>
              <div className="w-[192px] z-40 h-1 bg-custom-blue absolute top-[29px] -left-3"></div>

              <div className="z-20 w-[120px] h-[120px] bg-custom-blue rounded-full -bottom-1 left-1/2 -translate-x-1/2 absolute">
                <div className="w-[112px] h-2 bg-white absolute bottom-[54px] rounded-[1px] left-1"></div>
              </div>
              <div className="w-full absolute z-30 bg-custom-dark-pink top-0 left-0 h-[68px]"></div>
            </div>

            <div className="h-[calc(222px-88px)] relative w-[206px]">
              <div className="w-1 h-32 bg-custom-blue absolute left-9 -top-24"></div>

              <div className="flex items-end absolute bottom-0 left-0 overflow-hidden">
                <div className="relative h-[calc(222px-84px)] border-b-4 border-custom-blue border-t-4 w-16 bg-custom-dark-pink">
                  <div className="absolute top-0 left-0 w-full h-[36px] bg-custom-blue"></div>
                  <div className="w-16 h-16 bg-custom-blue absolute left-0 bottom-10"></div>
                  <div className="w-8 h-16 bg-custom-blue absolute left-0 bottom-5"></div>
                  <div className="w-24 bg-custom-blue h-7 absolute left-10 bottom-[66px]">
                    <div className="absolute top-0 left-14 z-10 bg-custom-blue w-2 h-2"></div>
                  </div>
                </div>
                <div className="overflow-hidden h-[98px] border-b-4 border-custom-blue w-[32px] bg-custom-dark-pink"></div>
                <div className="overflow-hidden relative h-[176px] border-t-4 border-r-4 border-custom-blue border-b-4 w-[106px] bg-custom-dark-pink">
                  <div className="rounded-sm w-[30px] h-[30px] bg-custom-blue absolute bottom-6 right-6"></div>

                  <div className="absolute top-0 left-0 w-12 h-[74px] bg-custom-blue">
                    <div className="w-2 h-2 bg-custom-blue absolute -bottom-[1px] z-10 right-[0]"></div>
                  </div>
                </div>
                <div className="w-[340px] rotate-[146.1deg] bg-custom-blue -left-[174px] h-6 absolute"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full"></div>
      </div>
    </main>
  );
}
