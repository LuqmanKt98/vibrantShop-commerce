
import { categories } from "@/data/products";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-8 overflow-x-auto pb-2">
      <div className="flex space-x-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
              ? "bg-shop-blue text-white"
              : "bg-muted hover:bg-muted/80 text-foreground"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
