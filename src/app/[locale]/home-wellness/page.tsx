import HomeWellnessPage from "@/components/main-category/HomeWellnessPage";

type Locale = "en" | "ar";

export default function Page({ params }: { params: { locale: Locale } }) {
  return <HomeWellnessPage locale={params.locale} />;
}