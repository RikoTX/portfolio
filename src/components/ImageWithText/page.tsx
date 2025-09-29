type Props = {
  logo?: string;
  viewBox?: string;
  url?: string;
  textTop: React.ReactNode;
  textBottom: React.ReactNode;
};

export default function ImageWithText({
  logo,
  viewBox = "0 0 512 512",
  url,
  textTop,
  textBottom,
}: Props) {
  return (
    <div className="flex gap-3">
      {logo ? (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox={viewBox}
          className="text-3xl shrink-0 text-accent"
          height="1.3em"
          width="1.3em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={logo}></path>
        </svg>
      ) : url ? (
        <img
          src={url}
          alt={typeof textTop === "string" ? textTop : "logo"}
          className="h-[50px] w-[50px] shrink-0 object-contain"
        />
      ) : null}

      <div className="flex flex-col mt-2">
        <h2 className="text-white text-base">{textTop}</h2>
        <span className="text-gray-400 text-sm font-normal">{textBottom}</span>
      </div>
    </div>
  );
}
