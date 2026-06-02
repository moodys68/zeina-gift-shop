import { notFound } from "next/navigation";
import { getPlugin, plugins } from "@/data/plugins";
import PluginView from "./PluginView";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return plugins.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const plugin = getPlugin(id);
  if (!plugin) return {};
  return {
    title: `${plugin.name_en} — Plugin Marketplace`,
    description: plugin.description_en,
  };
}

export default async function PluginDetailPage({ params }: Props) {
  const { id } = await params;
  const plugin = getPlugin(id);
  if (!plugin) notFound();
  return <PluginView plugin={plugin} />;
}
