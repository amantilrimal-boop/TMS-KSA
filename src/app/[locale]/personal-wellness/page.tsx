import PersonalWellnessPage from "@/components/main-category/PersonalWellnessPage";

type Locale = "en" | "ar";

export default function Page({ params }: { params: { locale: Locale } }) {
  return <PersonalWellnessPage locale={params.locale} />;
}