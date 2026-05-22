import notFound from "@/app/not-found";
import { ManagePostForm } from "@/components/Admin/ManagePostForm";
import { makePublicPostFromDb } from "@/dto/post/dto";
import { findPostIdAdmin } from "@/lib/post/queries/admin";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Editar post",
};

type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;
  const post = await findPostIdAdmin(id).catch();

  if (!post) notFound();

  const publicPost = makePublicPostFromDb(post);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-extrabold">Editar post</h1>
      <ManagePostForm mode="update" publicPost={publicPost} />
    </div>
  );
}
