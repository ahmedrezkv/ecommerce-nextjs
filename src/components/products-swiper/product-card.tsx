import { Star } from "lucide-react";
import Image from "next/image";

type ProductCardProps = {
  id: string;
  title: string;
  image: string;
  tags: { id: string; label: string }[];
  rating: {
    score: number;
    quantity: number;
  };
  price: {
    amount: number;
    currency: string;
    symbol: string;
  };
};

export default function ProductCard({
  id,
  title,
  image,
  tags,
  rating,
  price,
}: ProductCardProps) {
  const tagsColors: Record<string, string> = {
    "most-awarded": "bg-slate-600 text-white",
    upgraded: "bg-emerald-200 text-black",
  };

  return (
    <article className="flex snap-start flex-col gap-2">
      <div className="relative aspect-[1.33] min-h-60 overflow-hidden rounded-lg">
        <Image src={`/assets/media/products/${id}/${image}`} alt={title} fill />
        <div className="absolute start-3 top-3 flex flex-wrap items-center gap-3">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className={`rounded-md px-2 py-1 text-sm font-medium ${tagsColors[tag.id]}`}
            >
              {tag.label}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-1">
          {new Array(Math.ceil(rating.score)).fill(null).map((s, i) => (
            <Star key={i} size={14} className="fill-black" />
          ))}
        </div>
        <p className="text-sm font-medium">
          <span>{rating.score}</span>&nbsp;
          <span>({rating.quantity})</span>
        </p>
      </div>
      <p>
        {price.symbol}
        {price.amount.toLocaleString()}
      </p>
    </article>
  );
}
