import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainLayout from "@/components/MainLayout";

export default function MainLayoutRoot({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section>
    <MainLayout>
      {children}
    </MainLayout>
    </section>;
}

