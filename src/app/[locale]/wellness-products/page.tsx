import HolisticProductsPage from "@/components/main-category/HolisticProductsPage";

type Locale = "en" | "ar";

export default function Page({ params }: { params: { locale: Locale } }) {
  return <HolisticProductsPage locale={params.locale} />;
}