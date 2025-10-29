export const NEWSDATA_API_KEY = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;
export const GNEWS_API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
export const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
export const CRYPTO_PASSWORD = process.env.NEXT_PUBLIC_CRYPTO_PASSWORD;
export const CRYPTO_SALT = process.env.NEXT_PUBLIC_CRYPTO_SALT;

export const mockLeadStory = {
  title: "Цар тахлын дараах зах зээлийн хөрвөлт",
  summary:
    "Дэлхийн төв банкуудын бодлогын өөрчлөлт хөрөнгийн урсгалд хэрхэн нөлөөлөв.",
  href: "/news",
};

export const mockSideStories = [
  { title: "АНУ-ын бондын өгөөж буурлаа", href: "/analysis" },
  { title: "Хөгжиж буй орнуудын валютын дарамт", href: "/news" },
  { title: "Түүхий газрын тосны үнийн хэлбэлзэл", href: "/lesson" },
  { title: "Төв банкны хүүгийн төлөв", href: "/analysis" },
];

export const mockSecondaryStories = [
  {
    title: "Технологийн хувьцааны өсөлт саарлаа",
    summary: "Приб ашиг, үнэлгээний дарамт зэрэг хүчин зүйлс нөлөөлөв.",
    href: "/news",
  },
  {
    title: "Зээлийн чанарын өөрчлөлт",
    summary: "Банкны салбарын эрсдэлийн шинжилгээний шинэ тойм.",
    href: "/analysis",
  },
  {
    title: "Импортын инфляцийн сувгууд",
    summary: "Валют, ложистикийн зардал, тарифын нөлөө.",
    href: "/lesson",
  },
];

export const mockLessons = [
  {
    id: 1,
    lesson_url:
      "https://www.youtube.com/watch?v=HdHlfiOAJyE&list=PLUl4u3cNGP63B2lDhyKOsImI7FjCf6eDW",
    name: "MIT 15.401 Finance Theory I, Fall 2008",
    teacher: "Andrew Lo",
  },
  {
    id: 2,
    lesson_url: "https://www.youtube.com/watch?v=HdHlfiOAJyE",
    video_id: "HdHlfiOAJyE",
    name: "Session 1: Introduction and Course Overview",
    teacher: "Andrew Lo",
  },
  {
    id: 3,
    lesson_url: "https://www.youtube.com/watch?v=hyc8h5T76BE",
    video_id: "hyc8h5T76BE",
    name: "Session 4: Present Value Relations III & Fixed-Income Securities I",
    teacher: "Andrew Lo",
  },
  {
    id: 4,
    lesson_url: "https://www.youtube.com/watch?v=tL7Lcl90Sc0",
    video_id: "tL7Lcl90Sc0",
    name: "Session 13: Risk and Return II & Portfolio Theory I",
    teacher: "Andrew Lo",
  },
  {
    id: 5,
    lesson_url: "https://www.youtube.com/watch?v=Q2qjnLO3I_M",
    video_id: "Q2qjnLO3I_M",
    name: "Session 12: Options III & Risk and Return I",
    teacher: "Andrew Lo",
  },
];
