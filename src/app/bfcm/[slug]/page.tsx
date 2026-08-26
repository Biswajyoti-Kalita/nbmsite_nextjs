import BfcmResultPage, {
  BfcmComingSoon,
} from "@/components/bfcm/BfcmResultPage";
import {
  BFCM_CATEGORIES,
  getCategoryContent,
  getCategoryMeta,
} from "@/data/bfcm/categories";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BFCM_CATEGORIES.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = getCategoryMeta(slug);
  const content = getCategoryContent(slug);

  if (!meta) {
    return { title: "BFCM podcast mix" };
  }

  return {
    title: content
      ? `${meta.name} BFCM podcast mix`
      : `${meta.name} BFCM mix — Coming soon`,
    description: content
      ? `Explore Next Audio's ${meta.name} BFCM podcast mix — audience genres, spotlight shows, and campaign evidence.`
      : `The ${meta.name} BFCM podcast mix is coming soon. Request a custom mix from Next Audio.`,
    alternates: {
      canonical: `/bfcm/${slug}`,
    },
  };
}

export default async function BfcmCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const meta = getCategoryMeta(slug);

  if (!meta) {
    notFound();
  }

  const content = getCategoryContent(slug);
  if (content) {
    return <BfcmResultPage content={content} />;
  }

  return <BfcmComingSoon name={meta.name} icon={meta.icon} />;
}
