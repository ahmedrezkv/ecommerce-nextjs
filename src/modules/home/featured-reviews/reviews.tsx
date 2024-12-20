import { homeContent } from "@/content/home";
import { featuredReviews } from "@/data/featured-reviews";
import { paths } from "@/paths";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ReviewProps = {
  title: string;
  text: string;
  imageSrc: string;
  score: number;
  userName: string;
  product: {
    id: string;
    title: string;
  };
};

function Review({
  title,
  text,
  imageSrc,
  score,
  userName,
  product,
}: ReviewProps) {
  return (
    <article className="flex snap-start flex-col gap-4">
      <div className="relative aspect-[1.45] min-h-60 w-fit overflow-hidden rounded-lg">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="flex grow flex-col gap-4 rounded-lg bg-primary-50 p-6">
        <div className="flex items-center gap-1">
          {new Array(Math.ceil(score)).fill(null).map((s, i) => (
            <Star key={i} size={18} className="fill-black" />
          ))}
          {new Array(5 - Math.ceil(score)).fill(null).map((s, i) => (
            <Star key={i} size={18} />
          ))}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{text}</p>
        <div className="mt-auto">
          <div className="font-medium">{userName}</div>
          <Link
            href={`${paths.products.index}/${product.id}`}
            className="underline transition hover:text-primary"
          >
            {homeContent.featuredReviews.reviewCard.shop} {product.title}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default React.forwardRef<HTMLDivElement>(function Reviews(_, ref) {
  return (
    <div ref={ref} className="scroll-bar flex snap-x gap-4 overflow-auto pb-8">
      {featuredReviews.concat(featuredReviews).map((review, index) => (
        <Review
          key={index}
          title={review.title}
          text={review.text}
          imageSrc={`/assets/media/reviews/${review.image}`}
          score={review.ratingScore}
          userName={review.user.name}
          product={review.product}
        />
      ))}
    </div>
  );
});
