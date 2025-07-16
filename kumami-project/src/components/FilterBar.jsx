const categories = ['All', 'Games', 'NFT', 'Web 3', 'Exchanges'];

const FilterBar = ({ selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-1 rounded-full text-sm ${
            selected === cat
              ? 'bg-cyan-500 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
