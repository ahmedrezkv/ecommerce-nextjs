import { commonContent } from "@/content/common";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TabProps = {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function Tab({ isSelected, onClick, children }: TabProps) {
  return (
    <button
      className={`rounded-full px-6 py-3 font-medium transition ${isSelected ? "bg-primary text-white" : "bg-primary-50 text-black hover:bg-primary-100"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

type TabsNavigationProps = {
  tabs: { id: string; label: string }[];
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  handleScrollRight: () => void;
  handleScrollLeft: () => void;
};

export default function TabsNavigation({
  tabs,
  selectedTab,
  setSelectedTab,
  handleScrollRight,
  handleScrollLeft,
}: TabsNavigationProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <nav className="flex items-center gap-4">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            isSelected={selectedTab === tab.id}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.label}
          </Tab>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <button
          className="rounded-full bg-primary-50 p-2 transition hover:bg-primary-100"
          onClick={handleScrollLeft}
        >
          <span className="sr-only">
            {commonContent.components.productsSwiper.slideLeft}
          </span>
          <ChevronLeft size={24} />
        </button>
        <button
          className="rounded-full bg-primary-50 p-2 transition hover:bg-primary-100"
          onClick={handleScrollRight}
        >
          <span className="sr-only">
            {commonContent.components.productsSwiper.slideRight}
          </span>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
