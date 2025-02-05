import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug: string): Promise<string> {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

interface BlogDetailsProps {
  params: Promise<{
    slug: string;
  }>
}

const BlogDetails: React.FC<BlogDetailsProps> = async ({ params }) => {
  const { slug } = await params;
  const blog = await getBlog(slug);

  return (
    <div>
      { blog }
    </div>
  );
};

export default BlogDetails;
