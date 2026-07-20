import { getProducts } from "@/lib/sitecontent";
import { AdminPageTitle } from "@/components/admin/fields";
import { CollectionEditor } from "@/components/admin/CollectionEditor";

export const metadata = { title: "Products — Admin" };

export default async function AdminProductsPage() {
  const products = await getProducts();
  return (
    <>
      <AdminPageTitle
        title="Products"
        subtitle="Every product page — positioning, capabilities, stats and FAQs. Changes go live on save."
      />
      <CollectionEditor doc="products" itemNoun="product" initial={products} />
    </>
  );
}
