import { commonContent } from "@/content/common";
import { CircleUser, Search, ShoppingCart } from "lucide-react";

export default function NavigationIconButtons() {
  return (
    <div className="flex items-center justify-center gap-4">
      <button>
        <span className="sr-only">
          {
            commonContent.layout.header.primaryNavigation.iconButtons.search
              .label
          }
        </span>
        <Search size={20} />
      </button>
      <button>
        <span className="sr-only">
          {commonContent.layout.header.primaryNavigation.iconButtons.user.label}
        </span>
        <CircleUser size={20} />
      </button>
      <button>
        <span className="sr-only">
          {commonContent.layout.header.primaryNavigation.iconButtons.cart.label}
        </span>
        <ShoppingCart size={20} />
      </button>
    </div>
  );
}
