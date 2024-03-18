import Header from "@/app/(front)/ui/Header";

function HeaderSticker({ color, textColor }) {
  return (
    <div className="h-[230px]">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-[0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 650 120"
          className=" h-[200px] w-full"
        >
          <path
            style={{ fill: `${color}` }}
            d="M 0 0 V 46.29 c 47.79 22.2 103.59 32.17 158 28 c 70.36 -5.37 136.33 -33.31 206.8 -37.5 C 438.64 32.43 512.34 53.67 583 72.05 c 69.27 18 138.3 24.88 209.4 13.08 c 36.15 -6 69.85 -17.84 104.45 -29.34 C 989.49 25 1113 -14.29 1200 52.47 V 0 Z"
            opacity={0.25}
          />
          <path
            style={{ fill: `${color}` }}
            d="M 0 0 V 15.81 C 13 36.92 27.64 56.86 47.69 72.05 C 99.41 111.27 165 111 224.58 91.58 c 31.15 -10.15 60.09 -26.07 89.67 -39.8 c 40.92 -19 84.73 -46 130.83 -49.67 c 36.26 -2.85 70.9 9.42 98.6 31.56 c 31.77 25.39 62.32 62 103.63 73 c 40.44 10.79 81.35 -6.69 119.13 -24.28 s 75.16 -39 116.92 -43.05 c 59.73 -5.85 113.28 22.88 168.9 38.84 c 30.2 8.66 59 6.17 87.09 -7.5 c 22.43 -10.89 48 -26.93 60.65 -49.24 V 0 Z"
            opacity={0.5}
          />
          <path
            style={{ fill: `${color}` }}
            d="M 0 0 V 5.63 C 149.93 59 314.09 71.32 475.83 42.57 c 43 -7.64 84.23 -20.12 127.61 -26.46 c 59 -8.63 112.48 12.24 165.56 35.4 C 827.93 77.22 886 95.24 951.2 90 c 86.53 -7 172.46 -45.71 248.8 -84.81 V 0 Z"
          />
        </svg>
      </div>
      <Header color={textColor} />
    </div>
  );
}

export default HeaderSticker;
