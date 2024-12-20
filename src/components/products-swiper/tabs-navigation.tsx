import SwiperButtons from "./swiper-buttons";

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
    <div className="flex items-center justify-between gap-8">
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
      <SwiperButtons
        onClickRightButton={handleScrollRight}
        onClickLeftButton={handleScrollLeft}
      />
    </div>
  );
}
