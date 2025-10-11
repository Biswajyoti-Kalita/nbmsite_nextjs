interface KnowledgeHubCard2Props {
    title: string;
    description: string;
    image: string;
    date: string;
}



export default function KnowledgeHubCard2({ title, description, image, date }: KnowledgeHubCard2Props) {
    return (
        <div className="w-full relative">
        <div
          className="bg-cover bg-center w-full md:w-[440px] h-[323px] p-[24px] flex flex-col justify-between rounded-2xl relative overflow-hidden"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div
            className="absolute inset-0 rounded-2xl z-0 rounded-lg p-4 shadow-md [background:linear-gradient(268.96deg,rgba(255,255,255,0.2)_100.9%,#ffffff_99.44%)]"
          ></div>


          <div className="relative z-10 flex flex-col justify-between h-full">

            <div className="w-full">
              <span
                className="px-2.5 py-2 text-[#FFFEFF] rounded-3xl border border-[#FFFEFF] text-sm"
              >
                {title}
              </span>
            </div>

            <div className="w-full flex flex-col gap-[10px]">
              <h6
                className="font-normal text-[16px] leading-[24px] text-[#E8E8E8]"
              >
                {date}
              </h6>
              <h6
                className="font-medium text-[18px] leading-[26px] text-[#FFFEFF]"
              >
                {description}
              </h6>
            </div>
          </div>
        </div>
      </div>
    )
}