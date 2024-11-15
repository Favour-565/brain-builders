/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobileScreen: "url('./public/images/MobileHeroBackground.png')",
        webScreen: "url('./public/images/HeroBackground.png')",
      },
      colors: {
        darkBlue: "#0B2167",
      },
      spacing: {},
    },
    fontSize: {
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq473: {
        raw: "screen and (max-width: 473px)",
      },
      mq470: {
        raw: "screen and (max-width: 470px)",
      },
      mq419: {
        raw: "screen and (max-width: 419px)",
      },
      mq415: {
        raw: "screen and (max-width: 415px)",
      },
      mq409: {
        raw: "screen and (max-width: 409px)",
      },
      mq407: {
        raw: "screen and (max-width: 407px)",
      },
      mq403: {
        raw: "screen and (max-width: 403px)",
      },
      mq400: {
        raw: "screen and (max-width: 400px)",
      },
      mq396: {
        raw: "screen and (max-width: 396px)",
      },
      mq394: {
        raw: "screen and (max-width: 394px)",
      },
      mq392: {
        raw: "screen and (max-width: 392px)",
      },
      mq391: {
        raw: "screen and (max-width: 391px)",
      },
      mq390: {
        raw: "screen and (max-width: 390px)",
      },
      mq389: {
        raw: "screen and (max-width: 389px)",
      },
      mq388: {
        raw: "screen and (max-width: 388px)",
      },
      mq386: {
        raw: "screen and (max-width: 386px)",
      },
      mq381: {
        raw: "screen and (max-width: 381px)",
      },
      mq377: {
        raw: "screen and (max-width: 377px)",
      },
      mq373: {
        raw: "screen and (max-width: 373px)",
      },
      mq372: {
        raw: "screen and (max-width: 372px)",
      },
      mq370: {
        raw: "screen and (max-width: 370px)",
      },
      mq369: {
        raw: "screen and (max-width: 369px)",
      },
      mq364: {
        raw: "screen and (max-width: 364px)",
      },
      mq362: {
        raw: "screen and (max-width: 362px)",
      },
      mq361: {
        raw: "screen and (max-width: 361px)",
      },
      mq358: {
        raw: "screen and (max-width: 358px)",
      },
      mq353: {
        raw: "screen and (max-width: 353px)",
      },
      mq352: {
        raw: "screen and (max-width: 352px)",
      },
      mq349: {
        raw: "screen and (max-width: 349px)",
      },
      mq345: {
        raw: "screen and (max-width: 345px)",
      },
      mq343: {
        raw: "screen and (max-width: 343px)",
      },
      mq335: {
        raw: "screen and (max-width: 335px)",
      },
      mq334: {
        raw: "screen and (max-width: 334px)",
      },
      mq321: {
        raw: "screen and (max-width: 321px)",
      },
      mq320: {
        raw: "screen and (max-width: 320px)",
      },
      mq284: {
        raw: "screen and (max-width: 284px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
