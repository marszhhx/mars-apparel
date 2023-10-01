import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Directory = ({ directory }) => {
  return (
    <div className="directory-container">
      {directory.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;